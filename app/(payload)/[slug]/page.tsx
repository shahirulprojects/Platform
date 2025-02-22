import { notFound } from "next/navigation";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import type { Page } from "../../../payload-types";
import CardBlock from "@/components/blocks/CardBlock";
import InfoBlock from "@/components/blocks/InfoBlock";

// define block types
type Block = {
  blockType: string;
  [key: string]: any;
};

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

    console.log("Page query result:", pageQuery);

    // if no page found, show 404
    if (!pageQuery.docs[0]) {
      console.log("No page found with slug:", slug);
      return notFound();
    }

    const page = pageQuery.docs[0] as Page;
    console.log("Found page:", { title: page.title, status: page.status });

    return (
      <div className="page-content">
        <h1>{page.title}</h1>

        {/* render blocks based on their type */}
        {page.content?.map((block: Block, i) => {
          switch (block.blockType) {
            case "cardBlock":
              return <CardBlock key={i} block={block} />;
            case "infoBlock":
              return <InfoBlock key={i} block={block} />;
            default:
              console.log("Unknown block type:", block.blockType);
              return null;
          }
        })}
      </div>
    );
  } catch (error) {
    // log the error but still return 404
    console.error("Error fetching page:", error);
    return notFound();
  }
}
