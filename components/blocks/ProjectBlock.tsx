"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "../ui/Pin";
import React from "react";

// component for rendering a project block
const ProjectBlock: React.FC<any> = ({ block }) => {
  const { title, description, projectImage, technologyIcons, liveSiteUrl } =
    block;

  return (
    <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
      <PinContainer title="Our Work" href={liveSiteUrl}>
        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[160px] mb-10 ">
          <div
            className="relative w-full h-full overflow-hidden lg:rounded-3xl "
            style={{ backgroundColor: "#13162D" }}
          ></div>
          <img
            src={projectImage.url}
            alt={title}
            className="z-10 absolute bottom-0"
          />
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-white line-clamp-1">
          {title}
        </h1>

        <p
          className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
          style={{
            color: "#BEC1DD",
            margin: "1vh 0",
          }}
        >
          {description}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {technologyIcons.map((tech: any, index: number) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img
                  src={tech.icon.url}
                  alt={`tech-${index}`}
                  className="p-2"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
              Check Live Site
            </p>
            <FaLocationArrow className="ms-3" color="#CBACF9" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default ProjectBlock;
