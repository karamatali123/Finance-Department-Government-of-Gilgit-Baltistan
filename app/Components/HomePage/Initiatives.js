// components/Initiatives.js
import React from "react";
import Divider from "../Common/Divider";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";
import { FaStamp } from "react-icons/fa";
import Image from "next/image";
import gbpay from "../../../public/images/gbPay.png";
const initiatives = [
  {
    title: "GB Pay",
    description: "Digitalization of  Government payments",
    icon: <img src={gbpay.src} alt="GB Pay" width={100} height={100} />, // Placeholder for icon
  },
  {
    title: "E-Registration & E-Stamping",
    description:
      "Introduction of E-Stamps  & E-Registration in Gilgit-Baltistan",
    icon: <MdAppRegistration className="text-primary text-4xl" />,
  },
  // {
  //   title: "E-Stamping",
  //   description: "Digitalization of  Government Stamping",
  //   icon: <FaStamp className="text-primary text-4xl" />,
  // },
];

const Initiatives = () => {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary">
          Initiatives
        </h2>
        <Divider />

        <div className="mt-8 md:mt-12 flex flex-wrap justify-center  gap-[100px] xs:gap-[40px]">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 md:p-0"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full shadow-md mb-3 md:mb-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                {initiative.icon}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-primary">
                {initiative.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-600">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
