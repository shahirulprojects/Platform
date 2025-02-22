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
  ] as Field[],
};
