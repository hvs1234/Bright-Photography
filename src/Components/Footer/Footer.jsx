/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import ViewBtn from "../Btns/ViewBtn";

const Footer = () => {
  return (
    <>
      <div className="relative px-[20rem] py-[6rem] w-full bg-[#f2f2f2] transition-all duration-[0.4s] ease-in-out max-xl:px-[5rem] max-md:px-[2rem]">
        <div className="flex justify-center items-start w-full gap-[10rem] max-sm:flex-col max-sm:items-center max-sm:gap-[4rem]">
          <div className="flex flex-col gap-[2rem] max-sm:items-center max-sm:justify-center max-sm:text-center">
            <div className="relative flex items-center justify-center gap-[2rem] mt-[1rem] max-sm:mt-0 max-sm:items-center max-sm:text-center">
              <a
                href="#"
                target="_blank"
                className={`fa-brands fa-facebook text-[#212121] text-[2.5rem] hover:opacity-[0.5] transition-all duration-[0.2s] ease-in-out`}
              ></a>
              <a
                href="#"
                target="_blank"
                className={`fa-brands fa-linkedin text-[#212121] text-[2.5rem] hover:opacity-[0.5] transition-all duration-[0.2s] ease-in-out`}
              ></a>
              <a
                href="#"
                target="_blank"
                className={`fa-brands fa-instagram text-[#212121] text-[2.5rem] hover:opacity-[0.5] transition-all duration-[0.2s] ease-in-out`}
              ></a>
            </div>
            <div className="relative flex w-auto items-center justify-center max-lg:hidden">
              <ViewBtn btnTitle={"Get in Touch"} btnFunc={"/"} />
            </div>
          </div>
          <div className="flex flex-col gap-[2rem] max-sm:items-center max-sm:text-center max-sm:justify-center">
            <h2 className="text-[2.2rem] text-[#212121] font-normal">
              Important Links
            </h2>
            <div className="flex flex-col gap-[1rem] max-sm:items-center max-sm:text-center max-sm:justify-center">
              <Link
                to={"/"}
                className="text-[2rem] text-[#414141] font-normal cursor-pointer hover:opacity-[0.8] transition-all duration-[0.2s] ease-in-out"
              >
                Photography
              </Link>
              <Link
                to={"/"}
                className="text-[2rem] text-[#414141] font-normal cursor-pointer hover:opacity-[0.8] transition-all duration-[0.2s] ease-in-out"
              >
                Editorial
              </Link>
              <Link
                to={"/"}
                className="text-[2rem] text-[#414141] font-normal cursor-pointer hover:opacity-[0.8] transition-all duration-[0.2s] ease-in-out"
              >
                Contact Us
              </Link>
              <Link
                to={"/"}
                className="text-[2rem] text-[#414141] font-normal cursor-pointer hover:opacity-[0.8] transition-all duration-[0.2s] ease-in-out"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[2rem] max-sm:items-center max-sm:text-center max-sm:justify-center">
            <h2 className="text-[2.2rem] text-[#212121] font-normal">
              Get In Touch with us
            </h2>
            <div className="flex flex-col gap-[1rem] max-sm:items-center max-sm:text-center max-sm:justify-center">
              <p className="text-[2rem] text-[#414141] font-normal transition-all duration-[0.2s] ease-in-out">
                <i className="fa-solid fa-location-dot"></i>&nbsp; XYZ, Street
                17, India
              </p>
              <a
                href={"tel:01010101"}
                className="text-[2rem] text-[#414141] font-normal cursor-pointer hover:opacity-[0.8] transition-all duration-[0.2s] ease-in-out"
              >
                <i className="fa-solid fa-phone"></i>&nbsp; +91-01010101
              </a>
              <a
                href={"mailto:info@gmail.com"}
                className="text-[2rem] text-[#414141] font-normal cursor-pointer hover:opacity-[0.8] transition-all duration-[0.2s] ease-in-out"
              >
                <i className="fa-solid fa-envelope"></i>&nbsp; info@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
