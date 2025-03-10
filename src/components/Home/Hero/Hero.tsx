"use client";

import BeamDot from "@/components/UI/BeamDot/BeamDot";
import Button from "@/components/UI/Button/Button";
import Counter from "@/components/UI/Counter/Counter";
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <div>
      <div className="absolute bottom-0 right-0 w-full md:w-auto z-30 flex gap-2 md:gap-5 !p-2 md:!p-8 !pb-5 bg-white items-center justify-center md:justify-end md:rounded-tl-3xl text-center">
        <div>
          <Counter
            targetNumber={1000}
            title={"Projects Completed"}
            duration={2}
            containerCountClass={`text-xl md:text-4xl font-bold text-purple-500`}
            containerTitleClass={`text-sm md:text-base font-bold text-purple-500`}
          />
        </div>
        <div className="h-10 w-0.5 bg-gray-500"></div>
        <div>
          <Counter
            targetNumber={20}
            title={"Experienced Staff"}
            duration={2}
            containerCountClass={`text-xl md:text-4xl font-bold text-purple-500`}
            containerTitleClass={`text-sm md:text-base font-bold text-purple-500`}
          />
        </div>
        <div className="h-10 w-0.5 bg-gray-500"></div>
        <div>
          <Counter
            targetNumber={4}
            title={"Ongoing Projects"}
            duration={2}
            containerCountClass={`text-xl md:text-4xl font-bold text-purple-500`}
            containerTitleClass={`text-sm md:text-base font-bold text-purple-500`}
          />
        </div>
        <div className="h-10 w-0.5 bg-gray-500"></div>
        <div>
          <Counter
            targetNumber={3}
            title={"Years of Experience"}
            duration={2}
            containerCountClass={`text-xl md:text-4xl font-bold text-purple-500`}
            containerTitleClass={`text-sm md:text-base font-bold text-purple-500`}
          />
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 z-20 w-full ">
        <div className="max-w-7xl !mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1 !p-4 md:p-0">
            <h2 className="text-4xl md:text-6xl text-white text-shadow font-bold">
              We create <span className="text-purple-500">software</span> <br />{" "}
              for a sustainable <br /> future.
            </h2>
            <h3 className="text-gray-200 text-2xl md:text-3xl !my-5">
              We Execute Your Ideas From The Start To Finish
            </h3>
            <div className="flex flex-col md:flex-row gap-5 ">
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
          <div className="flex-1 hidden lg:flex justify-end items-center absolute right-0">
            {/* beams */}
            <div className="absolute bottom-60 right-56 ">
              <BeamDot
                dotColor="red"
                beamColor="rgba(255, 0, 0, 0.3)"
                tooltipImage="/images/assets/tooltip/tooltip-image.jpg"
              />
            </div>
            <div className="absolute bottom-48 right-48 ">
              <BeamDot
                dotColor="blue"
                beamColor="rgba(0, 0, 255, 0.3)"
                tooltipImage="/images/assets/tooltip/tooltip-image-2.jpg"
              />
            </div>
            <div className="absolute bottom-52 right-64 ">
              <BeamDot
                dotColor="green"
                beamColor="rgba(0, 255, 0, 0.3)"
                tooltipImage="/images/assets/tooltip/tooltip-image-1.jpg"
              />
            </div>
            <Image
              src="/images/assets/map.svg"
              alt="World Map"
              width={500}
              height={500}
              style={{ width: "700px", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <div className="!absolute top-0 left-0 !w-full !h-full bg-black/50 z-10"></div>
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
