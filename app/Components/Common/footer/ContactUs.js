import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaFax } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-2 max-w-[400px] mt-16">
      <h2 className="text-primary text-2xl font-semibold">Contact us</h2>

      <div className="mt-5">
        <div className="flex  flex-row items-center gap-2">
          <IoCall className="text-primary text-xl" />
          <p className="text-gray-700 text-lg">(05811) 920501</p>
        </div>

        <div className="flex flex-row items-start gap-2">
          <IoLocation className="text-primary text-4xl" />
          <p className="text-gray-700 text-lg">
            Finance department, civil secretariat Government of
            Gilgit-Baltistan, Gilgit
          </p>
        </div>

        <div className="flex flex-row items-center gap-2">
          <FaFax className="text-primary text-xl" />
          <p className="text-gray-700  text-lg">(05811) 922382</p>
        </div>

        <div className="flex flex-row items-center gap-2">
          <IoMdMail className="text-primary text-xl" />
          <p className="text-[#0066FF] text-lg">info@gbfinance.gov.pk</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
