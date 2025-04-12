/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BannerBtn from "../../Components/Btns/BannerBtn";
import { HomeCarouselData } from "../../Services/Data/CarouselData";

const Hero = () => {
  const [homecarouseldata] = useState(HomeCarouselData);

  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={1000}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-screen relative object-cover"
      >
        {homecarouseldata.map((e) => {
          return (
            <SwiperSlide key={e.id}>
              <div
                className="pt-[5rem] px-[20rem] w-full h-full relative object-cover bg-no-repeat bg-center bg-cover max-xl:px-[5rem] max-md:px-[2rem]"
                style={{ backgroundImage: `url(${e.bannerImg})` }}
              >
                <div className="absolute top-0 left-0 w-full h-full object-cover bg-[black] opacity-[0.5]"></div>
                <div className="relative w-full h-full justify-center flex flex-col items-center text-center gap-[2rem] animated-content">
                  <h1 className="text-[5rem] max-xl:text-[4rem] max-md:text-[3.5rem] font-medium text-white">
                    {e.title}
                  </h1>
                  <p className="text-[2.5rem] max-md:text-[2rem] font-normal text-[#f2f2f2] px-[20rem] max-lg:px-[10rem] max-sm:px-[2rem]">
                    {e.desc}
                  </p>
                  <div className="flex items-center justify-center w-auto mt-[2rem]">
                    <BannerBtn btnTitle={"Visit More"} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <style>
        {`
    .swiper-pagination-bullet {
      width: 15px;
      height: 15px;
      background: #f2f2f2;
      opacity: 1;
    }

    .swiper-pagination-bullet-active {
      background: cyan;
    }
  `}
      </style>
    </>
  );
};

export default Hero;
