// components/Hero.js
import Image from "next/image";
import React from "react";
import image from "../../../public/images/landingPageImg1.png";

const Hero = () => {
  return (
    <div className="shadow-bottom border-b mb-5">
      <div className="container mx-auto text-justify px-4 md:px-8 py-8 md:py-11 flex flex-col md:flex-row items-center justify-between min-h-[500px] md:h-[670px] gap-8">
        <div className="flex flex-col w-full md:w-[50%]">
          <h1 className="text-3xl md:text-4xl capitalize leading-[70px] font-[500]  text-[#525252] mb-3 md:mb-4 text-center md:text-left">
            Fund Management, Financial Planning, <br />
            <span className="text-primary font-bold text-4xl">
              Revenue Growth, &nbsp;
            </span>
            Expenditure Control, Pursuing the Financial Prosperity of the Region
          </h1>
          {/* <h2 className="text-3xl md:text-5xl font-[500] mb-3 md:mb-4 text-black text-center md:text-left">
            Fund Management, Financial Planning, Revenue Growth, Expenditure
            Control
          </h2> */}
          <a
            href="/about/overview"
            className="text-xl leading-[20px] capitalize mb-3 md:mb-4 text-primary  border-b-2 border-primary pb-1 w-fit text-center md:text-left"
          >
            Supervision and control of provincial finances
          </a>
          <button
            className="w-fit h-12 flex items-center px-4 py-2  text-white justify-center bg-[#EDF2F7] bg-primary rounded-lg hover:bg-[#E2E8F0] transition-all"
            aria-label="Previous slide"
          >
            Contact Us
          </button>
        </div>
        <img
          src={image.src}
          width={630}
          height={450}
          className="w-full md:max-w-[640px] h-auto"
          alt="Finance Department Hero Image"
        />
      </div>
    </div>
  );
};

export default Hero;
