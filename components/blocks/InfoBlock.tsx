import React from "react";
import Image from "next/image";
import Link from "next/link";

// component for rendering an info block
const InfoBlock: React.FC<any> = ({ block }) => {
  const {
    blockName,
    blockStyles,
    heading,
    subheading,
    content,
    layout,
    media,
    callToAction,
  } = block;

  return (
    <div
      className={`
        w-full 
        ${blockStyles?.padding === "none" ? "" : "py-12"}
        ${blockStyles?.padding === "small" ? "py-8" : ""}
        ${blockStyles?.padding === "medium" ? "py-12" : ""}
        ${blockStyles?.padding === "large" ? "py-16" : ""}
        ${blockStyles?.backgroundColor === "white" ? "bg-white" : ""}
        ${blockStyles?.backgroundColor === "gray-100" ? "bg-gray-100" : ""}
        ${blockStyles?.backgroundColor === "gray-800" ? "bg-gray-800" : ""}
        ${blockStyles?.backgroundColor === "primary" ? "bg-primary" : ""}
        ${blockStyles?.textColor === "dark" ? "text-gray-900" : ""}
        ${blockStyles?.textColor === "light" ? "text-white" : ""}
        ${blockStyles?.textColor === "primary" ? "text-primary" : ""}
      `}
    >
      <div className="container mx-auto px-4">
        <div
          className={`
          grid grid-cols-1 gap-8
          ${layout === "left" ? "md:grid-cols-[2fr,1fr]" : ""}
          ${layout === "right" ? "md:grid-cols-[1fr,2fr]" : ""}
          ${layout === "center" ? "md:max-w-2xl mx-auto text-center" : ""}
        `}
        >
          <div
            className={`
            flex flex-col justify-center
            ${layout === "right" ? "md:order-2" : ""}
          `}
          >
            <h2 className="text-3xl font-bold mb-4">{heading}</h2>
            {subheading && (
              <h3 className="text-xl mb-4 opacity-80">{subheading}</h3>
            )}
            <div className="prose max-w-none mb-6">{content}</div>
            {callToAction?.text && callToAction?.url && (
              <Link
                href={callToAction.url}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
              >
                {callToAction.text}
              </Link>
            )}
          </div>

          {media?.url && layout !== "center" && (
            <div
              className={`
              relative h-64 md:h-full min-h-[400px]
              ${layout === "right" ? "md:order-1" : ""}
            `}
            >
              <Image
                src={media.url}
                alt={heading}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
