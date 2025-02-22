import { Block, Field } from "payload";

// base block type that all other blocks will extend from
export const baseBlock: Partial<Block> = {
  fields: [
    {
      name: "blockName",
      type: "text",
      required: true,
      admin: {
        description: "name this block instance for easier identification",
      },
    },
    {
      name: "blockStyles",
      type: "group",
      fields: [
        {
          name: "padding",
          type: "select",
          defaultValue: "medium",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "small" },
            { label: "Medium", value: "medium" },
            { label: "Large", value: "large" },
          ],
        },
        {
          name: "backgroundColor",
          type: "select",
          defaultValue: "white",
          options: [
            { label: "White", value: "white" },
            { label: "Light Gray", value: "gray-100" },
            { label: "Dark Gray", value: "gray-800" },
            { label: "Primary", value: "primary" },
          ],
        },
        {
          name: "textColor",
          type: "select",
          defaultValue: "dark",
          options: [
            { label: "Dark", value: "dark" },
            { label: "Light", value: "light" },
            { label: "Primary", value: "primary" },
          ],
        },
      ],
    },
  ] as Field[],
};
