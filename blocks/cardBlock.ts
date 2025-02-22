import { Block, Field } from "payload";
import { baseBlock } from "./baseBlock";

// card block for displaying content in a card format
export const cardBlock: Block = {
  slug: "cardBlock",
  labels: {
    singular: "Card Block",
    plural: "Card Blocks",
  },
  fields: [
    ...(baseBlock.fields || []),
    {
      name: "cards",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "link",
          type: "group",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
            },
            {
              name: "url",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ] as Field[],
};
