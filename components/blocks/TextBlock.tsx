import React from "react";
import Image from "next/image";
import Link from "next/link";

// component for rendering an info block
const TextBlock: React.FC<any> = ({ block }) => {
  const { content } = block;

  return (
    <div className="pt-10">
      <p className="leading-relaxed font-sans text-wrap text-2xl text-white text-justify">
        {content}
      </p>
    </div>
  );
};

export default TextBlock;
