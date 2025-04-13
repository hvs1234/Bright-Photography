/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "/Media/Gallery/9.jpeg";
import img2 from "/Media/Gallery/10.jpeg";
import LineDesign from "../../Components/Design/LineDesign";

const HomeMorden = () => {
  return (
    <>
      <section className="py-[6rem] px-[20rem] max-xl:px-[5rem] max-md:px-[2rem] w-full relative object-cover">
        <div className="flex flex-col gap-[1rem] w-full justify-center items-center text-center">
          <h2 className="text-[4rem] max-sm:text-[3rem] font-cinzel text-[#212121] uppercase">
            Where Motion{" "}
            <span className="font-oleo text-[#414141]">Pauses</span> and{" "}
            <span className="font-oleo text-[#414141]">Meaning</span> Emerges
          </h2>
          <LineDesign />
        </div>
        <div className="grid grid-cols-3 gap-[4rem] max-md:grid-cols-1 w-full justify-center relative mt-[4rem]">
          <div className="flex justify-center items-end mt-[10rem] max-md:mt-0 w-auto h-auto">
            <img
              src={img1}
              alt="img"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-[1rem] w-full justify-start mt-[4rem] max-md:mt-0 items-center">
            <h2 className="text-[2.5rem] text-[#212121] font-medium">
              <span className="text-[#414141] uppercase font-oleo">Modern</span>{" "}
              Moments,{" "}
              <span className="text-[#414141] uppercase font-oleo">Timeless</span>{" "}
              Frames
            </h2>
            <p className="text-[2rem] max-sm:text-[1.6rem] font-lobster text-[#414141] text-justify">
              {`In a world that moves fast, we pause — capturing the fleeting
              seconds that deserve to last a lifetime. Modern Moments, Timeless
              Frames is more than a tagline; it's our philosophy. We believe
              that today's memories are tomorrow's visual heirlooms, and each
              frame we capture is crafted with precision, emotion, and intent.`}
            </p>
            <p className="text-[2rem] max-sm:text-[1.6rem] font-lobster text-[#414141] text-justify">
              {`Whether it's the quiet glance between two people, the energy of an urban street, or the soft light falling on a still surface, we strive to preserve the beauty in the now.`}
            </p>
          </div>
          <div className="flex justify-center items-start w-auto h-auto">
            <img
              src={img2}
              alt="img"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMorden;
