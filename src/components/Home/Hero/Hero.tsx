"use client";

import React from "react";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
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
  );
};

export default Hero;
