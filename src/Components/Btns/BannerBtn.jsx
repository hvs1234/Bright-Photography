/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BannerBtn = ({ btnTitle }) => {
  return (
    <>
      <button
        className={`w-full rounded-xl px-[4rem] py-[2rem] text-[2.2rem] font-medium text-white bg-transparent border-[1px] 
        border-white hover:bg-white hover:text-black hover:border-white transition-all duration-[0.2s] ease-in-out 
        cursor-pointer`}
      >
        {btnTitle}
      </button>
    </>
  );
};

export default BannerBtn;
