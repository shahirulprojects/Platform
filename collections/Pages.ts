import { CollectionConfig } from "payload";
import { cardBlock } from "../blocks/cardBlock";
import { infoBlock } from "../blocks/infoBlock";
import { textBlock } from "../blocks/textBlock";
import { projectBlock } from "../blocks/projectBlock";
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
      blocks: [cardBlock, infoBlock, textBlock, projectBlock],
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
