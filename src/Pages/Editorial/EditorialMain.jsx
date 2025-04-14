/* eslint-disable no-unused-vars */
import React from "react";
import ImageCard from "../../Components/Card/ImageCard";
import EditorialImages from "../../Services/Data/EditorialImgData";

const EditorialMain = () => {
  return (
    <>
      <div className="mt-[1rem] px-[1rem] max-md:px-[2rem] grid grid-cols-4 gap-[2rem] w-full justify-center rounded-xl max-md:grid-cols-3 max-sm:grid-cols-2">
        <ImageCard ImgCardData={EditorialImages} ImgClass={"h-full"} />
      </div>
    </>
  );
};

export default EditorialMain;
