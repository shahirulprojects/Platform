import React from "react";
import Image from "next/image";
import Link from "next/link";

// component for rendering an info block
const InfoBlock: React.FC<any> = ({ block }) => {
  const { heading, subheading, content, media, callToAction } = block;

  return (
    <div className="w-full flex py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-white">{heading}</h2>
            {subheading && (
              <h3 className="text-xl mb-4 opacity-80 text-white">
                {subheading}
              </h3>
            )}
            <div className="prose max-w-none mb-6 text-white">{content}</div>
            {callToAction?.text && callToAction?.url && (
              <Link
                href={callToAction.url}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
              >
                {callToAction.text}
              </Link>
            )}
          </div>

          {media?.url && (
            <div className="relative h-64 md:h-full min-h-[400px]">
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
