/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ImageCard from "../../Components/Card/ImageCard";
import SliderImg from "../../Services/Data/SliderImgData";
import LineDesign from "../../Components/Design/LineDesign";

const HomeMain = () => {
  const [sliderImg] = useState(SliderImg);

  return (
    <>
      <section className="py-[6rem] w-full relative object-cover">
        <div className="flex flex-col gap-[1rem] justify-center items-center text-center px-[20rem] max-xl:px-[5rem] max-md:px-[2rem]">
          <h2 className="text-[4rem] max-md:text-[3rem] text-[#212121] font-noto">
            The Art of{" "}
            <span className="text-[#414141] font-lobster">Still Frames</span> in
            a Moving World
          </h2>
          <LineDesign />
          <div className="flex flex-col justify-center items-center gap-[1rem] mt-[1rem] w-full">
            <p className="text-[2rem] max-sm:text-[1.6rem] text-center max-sm:text-justify text-[#212121] font-normal">
              {`Blending timeless tradition with modern vision, we capture the soul of trade through a creative lens. Our photography celebrates heritage crafts while embracing innovation, telling powerful stories that connect generations. With every frame, we honor the past and inspire the future—where artistry meets commerce in
              vibrant harmony. Through curated compositions and thoughtful storytelling, we reveal the intricate beauty of cultural legacy reimagined for today's world. From handcrafted artistry to bustling marketplaces, our lens finds meaning in every detail. This visual journey not only documents tradition but redefines it—bridging eras with elegance, emotion, and a contemporary creative spirit.`}
            </p>
          </div>
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
      </section>
    </>
  );
};

export default HomeMain;
