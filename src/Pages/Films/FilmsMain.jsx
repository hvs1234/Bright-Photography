/* eslint-disable no-unused-vars */
import React from "react";
import FilmCard from "../../Components/Card/FilmCard";
import { FilmCardData } from "../../Services/Data/FilmCardData";

const FilmsMain = () => {
  return (
    <>
      <div className="py-[6rem] px-[20rem] w-full relative object-cover h-full max-xl:px-[5rem] max-md:px-[2rem]">
        <div className="relative grid grid-cols-4 gap-[2rem] w-full justify-center max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <FilmCard filmCardData={FilmCardData} />
        </div>
      </div>
    </>
  );
};

export default FilmsMain;
