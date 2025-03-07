"use client";

import Button from "@/components/UI/Button/Button";
import Counter from "@/components/UI/Counter/Counter";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <div>
      <div className="absolute bottom-0 right-0 z-50 flex gap-5 !p-8 !pb-5 bg-white items-center rounded-tl-3xl">
        <div>
          <Counter
            targetNumber={1000}
            title={"Projects Completed"}
            duration={2}
            containerCountClass={`text-4xl font-bold text-purple-500`}
            containerTitleClass={`font-bold text-purple-500`}
          />
        </div>
        <div className="h-10 w-0.5 bg-gray-500"></div>
        <div>
          <Counter
            targetNumber={20}
            title={"Experienced Staff"}
            duration={2}
            containerCountClass={`text-4xl font-bold text-purple-500`}
            containerTitleClass={`font-bold text-purple-500`}
          />
        </div>
        <div className="h-10 w-0.5 bg-gray-500"></div>
        <div>
          <Counter
            targetNumber={4}
            title={"Ongoing Projects"}
            duration={2}
            containerCountClass={`text-4xl font-bold text-purple-500`}
            containerTitleClass={`font-bold text-purple-500`}
          />
        </div>
        <div className="h-10 w-0.5 bg-gray-500"></div>
        <div>
          <Counter
            targetNumber={3}
            title={"Years of Experience"}
            duration={2}
            containerCountClass={`text-4xl font-bold text-purple-500`}
            containerTitleClass={`font-bold text-purple-500`}
          />
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full">
        <div className="max-w-7xl !mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1">
            <h2 className="text-6xl text-white text-shadow font-bold">
              We create <span className="text-purple-500">software</span> <br />{" "}
              for a sustainable <br /> future.
            </h2>
            <h3 className="text-gray-200 text-3xl !my-5">
              We Execute Your Ideas From The Start To Finish
            </h3>
            <div className="flex gap-5">
              <Button
                title="Get In Touch"
                iconRight={<MdArrowOutward className="text-xl" />}
                containerClass="!py-2 !px-5 rounded-full font-semibold bg-purple-500 text-white btn border-none shadow-none"
              />
              <Button
                title="View Our Work"
                containerClass="!py-2 !px-5 rounded-full font-semibold text-white btn shadow-none btn-outline hover:bg-purple-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <ReactPlayer
            url="/videos/home_video.mp4"
            playing={true}
            muted={true}
            loop={true}
            width="100%"
            height="100%"
            className="!absolute top-0 left-0 !w-full !h-full"
            config={{
              file: {
                attributes: {
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
