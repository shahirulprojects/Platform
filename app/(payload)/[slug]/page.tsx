import { notFound } from "next/navigation";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import type { Page, Media } from "../../../payload-types";

// this renders a page based on the slug from the url
export default async function Page({ params }: { params: { slug: string } }) {
  // await params before using its properties
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  try {
    const payload = await getPayload({
      config: configPromise,
    });

    // find the page by slug
    const pageQuery = await payload.find({
      collection: "pages",
      where: {
        and: [
          {
            slug: {
              equals: slug,
            },
          },
          {
            status: {
              equals: "published",
            },
          },
        ],
      },
    });

    // if no page found, show 404
    if (!pageQuery.docs[0]) {
      return notFound();
    }

    const page = pageQuery.docs[0] as Page;

    return (
      <div className="page-content">
        <h1>{page.title}</h1>

        {/* render blocks based on their type */}
        {page.content?.map((block, i) => {
          switch (block.blockType) {
            case "rich-text":
              return (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{ __html: block.content }}
                />
              );
            case "image": {
              const imageUrl =
                typeof block.image === "string"
                  ? block.image
                  : (block.image as Media).url;
              return (
                <figure key={i}>
                  {/* @ts-ignore - we know this is safe as we're defaulting to empty string */}
                  <img src={imageUrl} alt={block.caption || ""} />
                  {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
              );
            }
            case "call-to-action":
              return (
                <div key={i} className="cta-block">
                  <h2>{block.heading}</h2>
                  <a href={block.buttonLink} className="cta-button">
                    {block.buttonText}
                  </a>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    );
  } catch (error) {
    // silently return 404 without logging the error
    return notFound();
  }
}
