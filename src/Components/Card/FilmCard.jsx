/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const FilmCard = ({ filmCardData, filmCardShow }) => {
  return (
    <>
      {filmCardData.map((ele) => {
        return (
          <div
            key={ele.id}
            className={`flex flex-col gap-[1rem] w-full h-full rounded-xl transition-all duration-[0.4s] ease-in-out`}
          >
            <div className="flex justify-center items-center w-auto h-[500px]">
              <img
                src={ele?.img}
                alt="img"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col gap-[1rem]">
              <p className="text-[2rem] max-sm:text-[1.8rem] font-normal text-[#414141]">
                {ele?.topDesc}
              </p>
              {ele?.mainHeaing && (
                <h2 className="text-[2.5rem] font-normal text-[#212121] font-cinzel">
                  {ele?.mainHeading}
                </h2>
              )}
              {ele?.desc && (
                <p className="text-[2rem] font-lobster text-[#414141] max-sm:text-[1.6rem]">
                  {ele?.desc}
                </p>
              )}
              {filmCardShow === "Photography" && (
                <Link
                  to={ele?.to}
                  className="cursor-pointer hover:opacity-[0.8] text-black text-[1.8rem]"
                >
                  Read More &nbsp;{" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              )}
              {ele?.religion && (
                <p className="text-[1.4rem] font-lobster text-[#414141]">
                  {ele?.religion}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FilmCard;
