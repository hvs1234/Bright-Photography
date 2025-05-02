/* eslint-disable no-unused-vars */
import React from "react";
import LineDesign from "../../Components/Design/LineDesign";
import FilmCard from "../../Components/Card/FilmCard";
import { PhotographyCardData } from "../../Services/Data/FilmCardData";

const PhotographyMain = () => {
  return (
    <>
      <div className="px-[10rem] py-[6rem] w-full relative object-cover mt-[5rem] max-xl:px-[5rem] max-md:px-[2rem]">
        <div className="px-[4rem] py-[4rem] rounded-xl bg-[#f2f2f2] shadow-xl border-[1px] border-[#d2d2d2]">
          <div className="flex flex-col gap-[1rem] w-full justify-center items-center text-center">
            <h2 className="text-[1.8rem] text-[#414141]">
              Soul of Divine, Indian | International
            </h2>
            <LineDesign />
          </div>
          <div className="grid grid-cols-4 gap-[4rem] w-full relative justify-center mt-[6rem] max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <FilmCard
              filmCardData={PhotographyCardData}
              filmCardShow={"Photography"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotographyMain;
