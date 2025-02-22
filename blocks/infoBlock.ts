import { Block, Field } from "payload";
import { baseBlock } from "./baseBlock";

// info block for displaying detailed information sections
export const infoBlock: Block = {
  slug: "infoBlock",
  labels: {
    singular: "Info Block",
    plural: "Info Blocks",
  },
  fields: [
    ...(baseBlock.fields || []),
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "subheading",
      type: "text",
    },
    {
      name: "content",
      type: "textarea",
      required: true,
    },
    {
      name: "layout",
      type: "select",
      defaultValue: "left",
      options: [
        { label: "Content Left", value: "left" },
        { label: "Content Right", value: "right" },
        { label: "Content Center", value: "center" },
      ],
    },
    {
      name: "media",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "callToAction",
      type: "group",
      fields: [
        {
          name: "text",
          type: "text",
        },
        {
          name: "url",
          type: "text",
        },
      ],
    },
  ] as Field[],
};
