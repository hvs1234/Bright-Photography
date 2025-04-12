/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ImageCard = ({ ImgCardData }) => {
  return (
    <>
      {ImgCardData.map((e) => {
        return (
          <div
            key={e?.id}
            className="flex shrink-0 grow-0 items-center justify-center w-auto h-auto transition-all duration-[0.2s] ease-in-out"
          >
            <img
              src={e?.img}
              alt="img"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        );
      })}
    </>
  );
};

export default ImageCard;
