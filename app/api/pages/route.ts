import { getPayload } from "payload";
import configPromise from "@payload-config";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const payload = await getPayload({
      config: configPromise,
    });

    // fetch all published pages
    const pagesQuery = await payload.find({
      collection: "pages",
      where: {
        status: {
          equals: "published",
        },
      },
      sort: "createdAt",
    });

    if (!pagesQuery.docs || pagesQuery.docs.length === 0) {
      console.log("No pages found in the database");
      return NextResponse.json([], { status: 200 });
    }

    // ensure we're returning an array of pages with title, slug, and createdAt
    const pages = pagesQuery.docs
      .map((doc) => ({
        title: doc.title || "Untitled",
        slug: doc.slug || "",
        createdAt: doc.createdAt,
      }))
      .filter((page) => page.slug); // only return pages with valid slugs

    return NextResponse.json(pages);
  } catch (error) {
    console.error("Error in /api/pages:", error);
    return NextResponse.json(
      { error: "Failed to fetch pages" },
      { status: 500 }
    );
  }
}
