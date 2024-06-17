"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div>
      <h1
        className="heading mt-2 sm:mt-0 md:mt-0 lg:mt-2 xl:mt-2 2xl:mt-2"
        id="garantii"
      >
        <span className="text-purple mr-2">Даем юридические гарантии</span>
        при покупке квартиры
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 lg:gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[320px] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="lg:rounded-3xl flex items-center justify-center"
                  style={{ width: "150px" }}
                >
                  <img
                    src={item.img}
                    alt="cover"
                    className=" animate-bounce animate-pulse w-30 z-1 "
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-2 ">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-4"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
