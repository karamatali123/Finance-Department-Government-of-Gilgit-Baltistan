// components/Initiatives.js
"use client";
import React from "react";
import gbpay from "../../../public/images/gbPay.png";
import stamp from "../../../public/images/stamp.png";
import digital from "../../../public/images/degital.png";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Link from "next/link";

const initiatives = [
  {
    title: "GB Pay",
    description: "Digitalization of  Government payments",
    icon: (
      <img
        src={gbpay.src}
        alt="GB Pay"
        width={100}
        height={100}
        className="w-[60px] md:w-[100px]"
      />
    ),
    link: "https://gbpay.gov.pk/",
  },
  {
    title: "E-Registration & E-Stamping",
    description:
      "Introduction of E-Stamps  & E-Registration in Gilgit-Baltistan",
    icon: (
      <img
        src={stamp.src}
        alt="GB Pay"
        width={100}
        height={100}
        className="w-[60px] md:w-[100px]"
      />
    ),
    link: "/initiatives",
  },
  {
    title: "Digitisation of Revenues",
    description: "Digitalization of  Government Revenues",
    icon: (
      <img
        src={digital.src}
        alt="GB Pay"
        width={100}
        height={100}
        className="w-[60px] md:w-[100px]"
      />
    ),
    link: "/initiatives",
  },
];

const Initiatives = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      className="py-8 md:py-16 bg-white"
    >
      <section className="py-6 md:py-16 bg-gray-50">
        <div className="container mx-auto text-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.6, delay: 0.2 }}
          >
            <SectionHeader
              title="Initiatives"
              description="Driving impactful change through innovation and collaboration."
            />
          </motion.div>

          <div className="mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.4 * index }}
              >
                <Link
                  href={initiative.link}
                  target="_blank"
                  className="flex flex-col sm:flex-row gap-4 items-center text-center p-4 md:p-7 min-h-[150px] rounded-lg bg-white shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex flex-col items-center sm:items-start justify-start flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-primary">
                      {initiative.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-gray-600 text-center sm:text-left">
                      {initiative.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">{initiative.icon}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Initiatives;
