import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaFax } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-2 max-w-[400px] mt-12">
      <h2 className="text-primary text-xl font-semibold">Contact us</h2>

      <div className="mt-5 flex flex-col gap-2">
        <div className="flex  flex-row items-center gap-3">
          <IoCall className="text-primary " size={18} />
          <p className="text-gray-700 text-base">(05811) 920501</p>
        </div>

        <div className="flex flex-row items-center gap-3">
          <FaLocationDot className="text-primary" size={22} />
          <p className="text-gray-700 text-base">
            Finance department, civil secretariat Government of
            Gilgit-Baltistan, Gilgit
          </p>
        </div>

        <div className="flex flex-row items-center gap-3">
          <FaFax className="text-primary" size={18} />
          <p className="text-gray-700  text-base">(05811) 922382</p>
        </div>

        <Link
          href="mailto:info@gbfinance.gov.pk"
          className="flex flex-row items-center gap-3 cursor-pointer "
        >
          <IoMdMail size={18} className="text-primary" />
          <p className="text-[#0066FF] text-base cursor-pointer">
            info@gbfinance.gov.pk
          </p>
        </Link>
        <Link
          href="https://www.facebook.com/p/Finance-Department-Government-of-Gilgit-Baltistan-61551044097798/"
          target="_blank"
          className="flex flex-row items-center gap-3 cursor-pointer"
        >
          <FaFacebook size={18} className="text-primary" />
          <p className="text-gray-700 text-base cursor-pointer">Facebook</p>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
