import Image from "next/image";
import React, { useState, useEffect } from "react";

const BeamDot = ({
  dotColor = "red",
  beamColor = "rgba(255, 0, 0, 0.3)",
  tooltipImage = "/images/assets/tooltip/tooltip-image.jpg",
}) => {
  const [beamSize, setBeamSize] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeamSize((prevSize) => (prevSize < 100 ? prevSize + 20 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* Beam Effect */}
      <div
        className="absolute rounded-full transition-all duration-700"
        style={{
          width: `${beamSize}px`,
          height: `${beamSize}px`,
          backgroundColor: beamColor,
          filter: "blur(10px)",
        }}
      ></div>

      {/* Dot */}
      <div
        className="w-4 h-4 rounded-full cursor-pointer relative z-10"
        style={{ backgroundColor: dotColor }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
      ></div>

      {/* Tooltip with Image */}
      {showTooltip && tooltipImage && (
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white p-2 shadow-lg rounded-md w-[128px] z-50">
          <Image
            src={tooltipImage}
            alt="Tooltip"
            width={500}
            height={500}
            className="w-32 h-32 object-cover rounded"
          />
        </div>
      )}
    </div>
  );
};

export default BeamDot;
