// components/Hero.js
"use client";
import Image from "next/image";
import React from "react";
import image from "../../../public/images/landingPageImg1.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="shadow-bottom border-b mb-5">
      <div className="container mx-auto text-justify px-4 md:px-8 py-8 md:py-11 flex flex-col md:flex-row items-center justify-between min-h-[500px] md:h-[670px] gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col w-full md:w-[50%]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl capitalize leading-[70px] font-[500] text-[#525252] mb-3 md:mb-4 text-center md:text-left"
          >
            Fund Management, Financial Planning, <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-primary font-bold text-4xl"
            >
              Revenue Growth, &nbsp;
            </motion.span>
            Expenditure Control, Pursuing the Financial Prosperity of the Region
          </motion.h1>
          {/* <h2 className="text-3xl md:text-5xl font-[500] mb-3 md:mb-4 text-black text-center md:text-left">
            Fund Management, Financial Planning, Revenue Growth, Expenditure
            Control
          </h2> */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            href="/about/overview"
            className="text-xl leading-[20px] capitalize mb-3 md:mb-4 text-primary border-b-2 border-primary pb-1 w-fit text-center md:text-left"
          >
            Supervision and control of provincial finances
          </motion.a>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
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
