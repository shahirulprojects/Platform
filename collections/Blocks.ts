import { CollectionConfig } from "payload";
import { cardBlock } from "../blocks/cardBlock";
import { infoBlock } from "../blocks/infoBlock";

// collection to manage all block types
export const Blocks: CollectionConfig = {
  slug: "blocks",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "blockType",
      type: "blocks",
      required: true,
      blocks: [cardBlock, infoBlock],
    },
  ],
};
