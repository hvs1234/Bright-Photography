/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ImageCard = ({ ImgCardData, ImgClass }) => {
  return (
    <>
      {ImgCardData.map((e) => {
        return (
          <div
            key={e?.id}
            className="flex shrink-0 grow-0 items-center overflow-hidden justify-center w-auto h-auto transition-all duration-[0.2s] ease-in-out"
          >
            <img
              src={e?.img}
              alt="img"
              className={`w-full ${ImgClass} object-cover rounded-xl hover:scale-[1.2] transition-all duration-[0.4s] ease-in-out`}
              loading="lazy"
            />
          </div>
        );
      })}
    </>
  );
};

export default ImageCard;
