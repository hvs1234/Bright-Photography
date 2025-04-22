/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const FormBtn = ({ btnTitle, btnType }) => {
  return (
    <>
      <button
        type={btnType}
        className={`px-[4rem] py-[1rem] w-full rounded-xl bg-[#1f468a] text-[white] text-[2rem] font-normal transition-all duration-[0.2s] ease-in-out hover:opacity-[0.8] cursor-pointer`}
      >
        {btnTitle}
      </button>
    </>
  );
};

export default FormBtn;
