import { Block, Field } from "payload";

export const textBlock: Block = {
  slug: "textBlock",
  labels: {
    singular: "Text Block",
    plural: "Text Blocks",
  },
  fields: [
    {
      name: "content",
      type: "textarea",
      required: true,
    },
  ] as Field[],
};
