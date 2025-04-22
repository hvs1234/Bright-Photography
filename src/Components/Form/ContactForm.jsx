/* eslint-disable no-unused-vars */
import React from "react";
import FormBtn from "../Btns/FormBtn";

const ContactForm = () => {
  return (
    <>
      <form
        action={""}
        className="border-[1px] border-[#d2d2d2] w-full px-[3rem] py-[3rem] rounded-xl flex flex-col gap-[2rem] justify-center"
      >
        <div className="flex flex-col gap-[2rem] w-full">
          <label
            htmlFor="Name"
            className="text-[2rem] font-normal text-[#414141] max-md:text-[1.6rem]"
          >
            Visitor Name *
          </label>
          <input
            type="text"
            name="Name"
            id="name"
            required
            placeholder="Enter your name"
            autoComplete="off"
            className="w-full px-[1rem] py-[1rem] rounded-xl border-[1px] border-[#d2d2d2] text-[2rem] outline-none 
            max-md:text-[1.6rem] 
            text-[#414141] font-normal"
          />
        </div>
        <div className="flex flex-col gap-[2rem] w-full">
          <label
            htmlFor="Email"
            className="text-[2rem] font-normal text-[#414141] max-md:text-[1.6rem]"
          >
            Email Address *
          </label>
          <input
            type="email"
            name="Email"
            id="email"
            required
            placeholder="Enter your valid email address"
            autoComplete="off"
            className="w-full px-[1rem] py-[1rem] rounded-xl border-[1px] border-[#d2d2d2] text-[2rem] outline-none 
            max-md:text-[1.6rem] 
            text-[#414141] font-normal"
          />
        </div>
        <div className="flex flex-col gap-[2rem] w-full">
          <label
            htmlFor="Phone"
            className="text-[2rem] font-normal text-[#414141] max-md:text-[1.6rem]"
          >
            Phone Number *
          </label>
          <input
            type="number"
            name="Phone"
            id="phone"
            required
            placeholder="Enter your valid phone number  "
            autoComplete="off"
            className="w-full px-[1rem] py-[1rem] rounded-xl border-[1px] border-[#d2d2d2] text-[2rem] outline-none 
            max-md:text-[1.6rem] 
            text-[#414141] font-normal"
          />
        </div>
        <div className="flex flex-col gap-[2rem] w-full">
          <label
            htmlFor="Guest Count"
            className="text-[2rem] font-normal text-[#414141] max-md:text-[1.6rem]"
          >
            Estimated Guest Count *
          </label>
          <input
            type="number"
            name="Guest Count"
            id="guest-count"
            required
            placeholder="Enter your estimated guest count"
            autoComplete="off"
            className="w-full px-[1rem] py-[1rem] rounded-xl border-[1px] border-[#d2d2d2] text-[2rem] outline-none 
            max-md:text-[1.6rem] 
            text-[#414141] font-normal"
          />
        </div>
        <div className="flex flex-col gap-[2rem] w-full">
          <label
            htmlFor="About Wedding"
            className="text-[2rem] font-normal text-[#414141] max-md:text-[1.6rem]"
          >
            Tell us more about your wedding - event flow, venues *
          </label>
          <textarea
            cols={30}
            rows={5}
            type="text"
            name="Message about wedding"
            id="message"
            required
            placeholder="Please represent your interactive and peaceful message"
            autoComplete="off"
            className="w-full px-[1rem] py-[1rem] rounded-xl border-[1px] border-[#d2d2d2] text-[2rem] outline-none 
            max-md:text-[1.6rem] 
            text-[#414141] font-normal resize-none"
          />
        </div>
        <div className="flex flex-col gap-[2rem] w-full">
          <label
            htmlFor="Location"
            className="text-[2rem] font-normal text-[#414141] max-md:text-[1.6rem]"
          >
            Location of the wedding *
          </label>
          <input
            type="text"
            name="Wedding Location"
            id="wedding-location"
            required
            placeholder="Enter wedding location"
            autoComplete="off"
            className="w-full px-[1rem] py-[1rem] rounded-xl border-[1px] border-[#d2d2d2] text-[2rem] outline-none 
            max-md:text-[1.6rem] 
            text-[#414141] font-normal"
          />
        </div>
        <div className="flex flex-col gap-[2rem] w-full">
          <label
            htmlFor="Event Date"
            className="text-[2rem] font-normal text-[#414141] max-md:text-[1.6rem]"
          >
            Event Date *
          </label>
          <input
            type="date"
            name="Event Date"
            id="event-date"
            required
            placeholder="Event Date"
            autoComplete="off"
            className="w-full px-[1rem] py-[1rem] rounded-xl border-[1px] border-[#d2d2d2] text-[2rem] outline-none 
            max-md:text-[1.6rem] 
            text-[#414141] font-normal cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-[2rem] w-full">
          <label
            htmlFor="Event Date"
            className="text-[2rem] font-normal text-[#414141] max-md:text-[1.6rem]"
          >
            What services are you looking for ?
          </label>
          <div className="flex flex-col gap-[1rem] w-full">
            <div className="flex items-center gap-[1rem]">
              <input type="checkbox" className="cursor-pointer" />
              <label
                htmlFor="Photography"
                className="text-[2rem] font-normal text-[#414141] max-md:text-[1.6rem]"
              >
                Photography
              </label>
            </div>
            <div className="flex items-center gap-[1rem]">
              <input type="checkbox" className="cursor-pointer" />
              <label
                htmlFor="Films"
                className="text-[2rem] font-normal text-[#414141] max-md:text-[1.6rem]"
              >
                Films
              </label>
            </div>
            <div className="flex items-center gap-[1rem]">
              <input type="checkbox" className="cursor-pointer" />
              <label
                htmlFor="Both"
                className="text-[2rem] font-normal text-[#414141] max-md:text-[1.6rem]"
              >
                Both Photography and Films
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start w-auto mr-auto mt-[2rem] max-sm:mr-0">
          <FormBtn btnTitle={"Submit"} btnType={"submit"} />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
