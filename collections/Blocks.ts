import { Block } from "payload";

// define our block types
export const RichTextBlock: Block = {
  slug: "rich-text",
  interfaceName: "RichTextBlock",
  fields: [
    {
      name: "content",
      type: "richText",
      required: true,
    },
  ],
};

export const ImageBlock: Block = {
  slug: "image",
  interfaceName: "ImageBlock",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "caption",
      type: "text",
      required: false,
    },
  ],
};

export const CallToActionBlock: Block = {
  slug: "call-to-action",
  interfaceName: "CallToActionBlock",
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "buttonText",
      type: "text",
      required: true,
    },
    {
      name: "buttonLink",
      type: "text",
      required: true,
    },
  ],
};

// export all blocks for easy access
export const Blocks = {
  RichTextBlock,
  ImageBlock,
  CallToActionBlock,
};
