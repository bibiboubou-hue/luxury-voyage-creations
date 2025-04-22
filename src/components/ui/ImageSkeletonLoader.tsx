
import React from "react";

const ImageSkeletonLoader = () => (
  <div className="w-full h-[400px] md:h-[512px] bg-gradient-to-tr from-nautical-navy via-nautical-blue/30 to-nautical-navy relative rounded-lg shimmer overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-r from-nautical-blue/10 to-nautical-navy/50 animate-pulse rounded-lg" />
    <div className="z-10 flex flex-col items-center justify-center w-full h-full">
      <svg className="animate-spin mb-4 text-nautical-lightblue" width="48" height="48" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"
        ></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
      </svg>
      <p className="text-nautical-sand text-sm md:text-base">Generating Ferrari Roma render...</p>
    </div>
  </div>
);

export default ImageSkeletonLoader;
