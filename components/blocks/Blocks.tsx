import React from "react";
import CardBlock from "./CardBlock";
import InfoBlock from "./InfoBlock";

type BlockType = {
  blockType: "cardBlock" | "infoBlock";
  [key: string]: any;
};

// maps block types to their components
const blockComponents = {
  cardBlock: CardBlock,
  infoBlock: InfoBlock,
} as const;

// component that renders blocks based on their type
const Blocks: React.FC<{ blocks: BlockType[] }> = ({ blocks }) => {
  return (
    <div>
      {blocks?.map((block, i) => {
        const Component = blockComponents[block.blockType];
        if (!Component) return null;
        return <Component key={i} block={block} />;
      })}
    </div>
  );
};

export default Blocks;
