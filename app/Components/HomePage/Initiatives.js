// components/Initiatives.js
"use client";
import React from "react";
import Divider from "../Common/Divider";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";
import { FaStamp, FaReceipt } from "react-icons/fa";
import Image from "next/image";
import gbpay from "../../../public/images/gbPay.png";
import gov from "../../../public/images/Gov.png";
import digital from "../../../public/images/degital.png";

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
        src={gov.src}
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
    <section className="py-6 md:py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4 md:px-8">
        <SectionHeader
          title="Initiatives"
          description="Driving impactful change through innovation and collaboration."
        />

        <div className="mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {initiatives.map((initiative, index) => (
            <Link
              key={index}
              href={initiative.link}
              target="_blank"
              className="flex flex-col sm:flex-row gap-4 items-center text-center p-4 md:p-7 rounded-lg bg-white shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
