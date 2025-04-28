/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TopBanner = ({ topBannerData }) => {
  return (
    <>
      {topBannerData.map((e) => {
        return (
          <div
            key={e.id}
            className={`px-[20rem] w-full h-[70vh] relative object-cover max-xl:px-[5rem] max-md:px-[2rem] bg-center bg-cover bg-no-repeat`}
            style={e?.bgImg ? { backgroundImage: `url(${e.bgImg})` } : {}}
          >
            {e?.bgVideo && (
              <video
                className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-[0.4s] ease-linear"
                src={e?.bgVideo}
                autoPlay
                loop
                muted
              ></video>
            )}
            <div className="absolute top-0 left-0 w-full h-full bg-[black] opacity-[0.5]"></div>
            <div className="relative w-full flex flex-col gap-[1rem] justify-center items-center text-center h-full">
              {e?.mainHeading && (
                <h1 className="text-[6rem] max-lg:text-[5rem] max-md:text-[3.5rem] text-[white] font-lobster">
                  {e?.mainHeading}
                </h1>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TopBanner;
