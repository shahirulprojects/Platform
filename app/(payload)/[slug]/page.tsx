import { notFound } from "next/navigation";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import type { Page } from "../../../payload-types";
import CardBlock from "@/components/blocks/CardBlock";
import InfoBlock from "@/components/blocks/InfoBlock";
import TextBlock from "@/components/blocks/TextBlock";
import ProjectBlock from "@/components/blocks/ProjectBlock";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
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

    // if no page found, show 404
    if (!pageQuery.docs[0]) {
      return notFound();
    }

    const page = pageQuery.docs[0] as Page;

    return (
      <div className="min-h-screen p-10 w-full">
        <div className="flex justify-between items-center">
          <div className="flex top-0 right-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/platformlogo.svg"
                alt="logo"
                width={80}
                height={80}
                className="max-sm:hidden"
              />
              <h1 className="text-white text-5xl max-sm:text-4xl font-bold">
                The Great Great Company
              </h1>
            </Link>
          </div>
          <Navbar />
        </div>
        <h1 className="text-purple text-5xl max-sm:text-3xl font-bold mt-10">
          {page.title}
        </h1>

        {/* render blocks based on their type */}
        <div className="flex flex-wrap items-center justify-center gap-10">
          {page.content?.map((block: Block, i) => {
            switch (block.blockType) {
              case "textBlock":
                return <TextBlock key={i} block={block} />;
              case "cardBlock":
                return <CardBlock key={i} block={block} />;
              case "infoBlock":
                return <InfoBlock key={i} block={block} />;
              case "projectBlock":
                return <ProjectBlock key={i} block={block} />;
              default:
                return null;
            }
          })}
        </div>
        <div className="flex mt-16  justify-center">
          <p className="md:text-base text-sm md:font-normal font-light text-white">
            Copyright © 2025 The Great Great Company
          </p>
        </div>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}
