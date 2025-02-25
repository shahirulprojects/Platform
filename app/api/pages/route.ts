import { getPayload } from "payload";
import configPromise from "@payload-config";
import { NextResponse } from "next/server";
import {
  REST_POST,
  REST_DELETE,
  REST_PUT,
  REST_PATCH,
} from "@payloadcms/next/routes";

// handle GET requests to fetch published pages for navigation
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
      // return empty array instead of null for better client-side handling
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

    return NextResponse.json(pages, { status: 200 });
  } catch (error) {
    console.error("Error fetching pages:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// use PayloadCMS's built-in REST handlers for all operations
export const POST = REST_POST(configPromise);
export const DELETE = REST_DELETE(configPromise);
export const PUT = REST_PUT(configPromise);
export const PATCH = REST_PATCH(configPromise);
