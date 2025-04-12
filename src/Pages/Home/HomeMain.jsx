/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ImageCard from "../../Components/Card/ImageCard";
import SliderImg from "../../Services/Data/SliderImgData";
import LineDesign from "../../Components/Design/LineDesign";

const HomeMain = () => {
  const [sliderImg] = useState(SliderImg);

  return (
    <>
      <div className="py-[6rem] w-full relative object-cover">
        <div className="flex flex-col gap-[1rem] justify-center items-center text-center px-[2rem]">
          <h2 className="text-[3rem] text-[#212121]">
            The Art of Still Frames in a Moving World
          </h2>
          <LineDesign />
        </div>
        <div className="px-[2rem] w-full mt-[4rem]">
          <div className="flex gap-[1rem] shrink-0 grow-0 w-full overflow-x-auto no-scrollbar rounded-xl">
            <ImageCard ImgCardData={sliderImg} />
          </div>
          <p className="text-[2rem] font-normal text-[crimson] text-center mt-[4rem] rounded-xl">
            Scroll left to right here &nbsp;
            <i className="fa-solid fa-arrow-right-long"></i>
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
