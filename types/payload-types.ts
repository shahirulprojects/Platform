import type { Media as PayloadMedia } from "payload/generated-types";

export interface Page {
  id: string;
  title: string;
  slug: string;
  meta: {
    description?: string;
    keywords?: string;
  };
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}

export interface PayloadCollections {
  pages: Page;
  media: PayloadMedia;
}
