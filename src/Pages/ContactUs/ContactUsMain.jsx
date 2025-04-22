/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TopBanner from "../../Components/Card/TopBanner";
import { ContactUsTopBannerData } from "../../Services/Data/TopBannerData";
import ContactForm from "../../Components/Form/ContactForm";

const ContactUsMain = () => {
  return (
    <>
      <TopBanner topBannerData={ContactUsTopBannerData} />
      <div className="py-[6rem] px-[20rem] w-full h-full relative object-cover max-xl:px-[5rem] max-md:px-[2rem]">
        <div className="flex flex-col items-center w-full gap-[4rem] justify-center">
          <div className="flex flex-col gap-[1rem] w-full justify-center items-center text-center">
            <h2 className="text-[2.5rem] text-[#731528] font-medium">
              <i className="fa-solid fa-hand-point-right"></i>&nbsp; Connect
              with us
            </h2>
            <p className="text-[2rem] max-md:text-[1.6rem] text-[#212121] font-normal max-sm:text-justify">
              Please fill in the form below and provide as much details as
              possible to help us create an accurate quote. We will try to get
              back within 48hrs , give us a call on the number below if you
              don`t hear from us or if its a last minute enquiry.
            </p>
            <p className="text-[2rem] max-md:text-[1.6rem] text-[#212121] font-normal max-sm:text-justify">
              Connect with us! Share your vision, book a session, or inquire
              about our photography services. We`re here to capture your
              moments. Let`s create unforgettable memories together! Contact us
              to book your photography session, discuss creative ideas, or
              inquire about our services. Whether it`s portraits, events, or
              commercial shoots, our team is passionate about capturing your
              unique story. Reach out today via email, phone, or our online form
              to start your journey!
            </p>
            <div className="flex items-center justify-center gap-[4rem] w-full my-[2rem]">
              <a
                href="mailto:info@gmail.com"
                className="text-[2rem] max-md:text-[1.6rem] text-[#414141] font-normal hover:text-[#61355a]"
              >
                <i className="fa-solid fa-envelope"></i>&nbsp; info@gmail.com
              </a>
              <a
                href="tel:0101010101"
                className="text-[2rem] max-md:text-[1.6rem] text-[#414141] font-normal hover:text-[#61355a]"
              >
                <i className="fa-solid fa-phone"></i>&nbsp; +91-01010101
              </a>
              <div className="flex items-center justify-center gap-[2rem]">
                <a
                  href="#"
                  target="_blank"
                  className={`fa-brands fa-facebook text-[2.2rem] hover:opacity-[0.5] transition-all duration-[0.2s] ease-in-out`}
                ></a>
                <a
                  href="#"
                  target="_blank"
                  className={`fa-brands fa-linkedin text-[2.2rem] hover:opacity-[0.5] transition-all duration-[0.2s] ease-in-out`}
                ></a>
                <a
                  href="#"
                  target="_blank"
                  className={`fa-brands fa-instagram text-[2.2rem] hover:opacity-[0.5] transition-all duration-[0.2s] ease-in-out`}
                ></a>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsMain;
