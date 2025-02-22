import type { Media as PayloadMedia } from "payload/generated-types";

// base block interface that all blocks will extend
interface BaseBlock {
  id?: string;
  blockName?: string;
  blockType: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: Array<RichTextBlock | ImageBlock | CallToActionBlock>;
  meta: {
    description?: string;
    keywords?: string;
  };
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}

export interface RichTextBlock extends BaseBlock {
  blockType: "rich-text";
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
      }[];
      direction: "ltr" | "rtl" | null;
      format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
      indent: number;
      version: number;
    };
  };
}

export interface ImageBlock extends BaseBlock {
  blockType: "image";
  image: string | PayloadMedia;
  caption?: string;
}

export interface CallToActionBlock extends BaseBlock {
  blockType: "call-to-action";
  heading: string;
  buttonText: string;
  buttonLink: string;
}

export interface PayloadCollections {
  pages: Page;
  media: PayloadMedia;
}
