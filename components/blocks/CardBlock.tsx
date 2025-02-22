import React from "react";
import Image from "next/image";
import Link from "next/link";

// component for rendering a card block
const CardBlock: React.FC<any> = ({ block }) => {
  const { cards } = block;

  return (
    <div className="w-full bg-green-500 flex py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards?.map((card: any, i: number) => (
            <div
              key={i}
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {card.image?.url && (
                <div className="relative h-48">
                  <Image
                    src={card.image.url}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                {card.description && (
                  <p className="text-gray-600 mb-4 flex-1">
                    {card.description}
                  </p>
                )}
                {card.link && (
                  <Link
                    href={card.link.url}
                    className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90"
                  >
                    {card.link.text}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardBlock;
