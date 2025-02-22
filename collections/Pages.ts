import { CollectionConfig } from "payload";
import { CallToActionBlock, ImageBlock, RichTextBlock } from "./Blocks";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true, // anyone can read pages
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description:
          "this is the url-friendly name that will be used in the page url",
      },
    },
    {
      name: "content",
      type: "blocks",
      blocks: [RichTextBlock, ImageBlock, CallToActionBlock],
      required: true,
    },
    {
      name: "meta",
      type: "group",
      fields: [
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "keywords",
          type: "text",
        },
      ],
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          label: "Draft",
          value: "draft",
        },
        {
          label: "Published",
          value: "published",
        },
      ],
      defaultValue: "draft",
      required: true,
    },
  ],
};
