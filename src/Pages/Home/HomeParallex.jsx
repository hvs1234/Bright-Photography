/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BannerBtn from "../../Components/Btns/BannerBtn";
import LineDesign from "../../Components/Design/LineDesign";
import ImageCard from "../../Components/Card/ImageCard";
import { HomeStoryImgData } from "../../Services/Data/HomeImageCardData";
import ViewBtn from "../../Components/Btns/ViewBtn";

const HomeParallex = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [showAll, setShowAll] = useState(false);
  const totalImages = HomeStoryImgData.length;

  const handleToggle = () => {
    if (!showAll) {
      const nextCount = visibleCount + 3;
      if (nextCount >= totalImages) {
        setVisibleCount(totalImages);
        setShowAll(true);
      } else {
        setVisibleCount(nextCount);
      }
    } else {
      const nextCount = visibleCount - 3;
      if (nextCount <= 3) {
        setVisibleCount(3);
        setShowAll(false);
      } else {
        setVisibleCount(nextCount);
      }
    }
  };

  return (
    <>
      <section className="py-[6rem] px-[20rem] w-full h-[50vh] relative object-cover bg-[url('/Media/parallex2.jpg')] not-visited:bg-no-repeat bg-center bg-cover bg-fixed max-xl:px-[5rem] max-md:px-[2rem] object-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-[#23230b] opacity-[0.5]"></div>
        <div className="relative w-full h-full flex flex-col gap-[1rem] justify-center items-center text-center">
          <h2 className="text-[4rem] max-md:text-[3rem] font-cinzel text-white">
            Soul + Cinema
          </h2>
          <p className="text-[2rem] max-md:text-[1.6rem] text-white">
            Every wedding is unique and so are our films. For past 8 years HOTC
            has set new benchmarks of of storytelling within wedding realm and
            beyond. We are fortunate to have experienced so unique cultures and
            traditions across 25 countries and to document stories that
            continuously overwhelm us.
          </p>
          <div className="flex justify-center items-center w-auto mt-[4rem]">
            <BannerBtn btnTitle={"Visit our soul"} />
          </div>
        </div>
      </section>

      <section className="px-[20rem] py-[6rem] max-xl:px-[5rem] max-md:px-[2rem] relative w-full object-cover">
        <div className="flex flex-col gap-[1rem] w-full justify-center text-center items-center">
          <h2 className="text-[4rem] max-md:text-[3rem] font-oleo uppercase text-[#212121]">
            Lens Meets Storyline
          </h2>
          <LineDesign />
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[2rem] w-full justify-center rounded-xl mt-[4rem]">
          <ImageCard ImgCardData={HomeStoryImgData.slice(0, visibleCount)} />
        </div>
        <div className="flex justify-center items-center w-auto mt-[4rem]">
          <ViewBtn
            btnTitle={showAll ? "Show Less" : "Show More"}
            btnFunc={handleToggle}
          />
        </div>
      </section>
    </>
  );
};

export default HomeParallex;
