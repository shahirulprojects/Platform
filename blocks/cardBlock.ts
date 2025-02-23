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
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
        {
          name: "order",
          type: "text",
          required: true,
          label: "Card Name (e.g. Vision)",
        },
        {
          name: "backgroundColor",
          type: "text",
          required: true,
          defaultValue: "bg-emerald-900",
          label: "Background Color Class",
        },
        {
          name: "animationSpeed",
          type: "number",
          required: true,
          defaultValue: 3,
          label: "Animation Speed",
        },
        {
          name: "animationColors",
          type: "array",
          label: "Animation Colors (RGB values)",
          fields: [
            {
              name: "color",
              type: "array",
              fields: [
                {
                  name: "r",
                  type: "number",
                  required: false,
                },
                {
                  name: "g",
                  type: "number",
                  required: false,
                },
                {
                  name: "b",
                  type: "number",
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ] as Field[],
};
