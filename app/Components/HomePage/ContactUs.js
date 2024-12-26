// components/ContactUs.js
import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaFax } from "react-icons/fa";
// import { IoFax } from "react-icons/io5";
const ContactUs = () => {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary">
          Contact Us
        </h2>
        <p className="mt-2 text-base md:text-lg text-gray-600">
          Finance Department, Government of Gilgit Baltistan
        </p>

        <div className="md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {/* Address */}
          <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <div className="text-primary mb-3 md:mb-4">
              <IoLocation className="text-4xl" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-black">
              Address
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              Finance department, civil secretariat Government of
              Gilgit-Baltistan, Gilgit
            </p>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <div className="text-primary mb-3 md:mb-4">
              <IoCall className="text-4xl" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-black">
              Phone Number
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              (05811) 920501
            </p>
          </div>

          <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <div className="text-primary mb-3 md:mb-4">
              <FaFax className="text-4xl" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-black">Fax</h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              (05811) 922382
            </p>
          </div>
          {/* Email */}
          <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <div className="text-primary mb-3 md:mb-4">
              <IoMdMail className="text-4xl" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-black">
              Email
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              info@gbfinance.gov.pk
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
