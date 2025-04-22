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
            style={{ backgroundImage: `url(${e.bgImg})` }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[black] opacity-[0.2]"></div>
          </div>
        );
      })}
    </>
  );
};

export default TopBanner;
