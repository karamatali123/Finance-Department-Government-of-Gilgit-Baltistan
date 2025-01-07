import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-start justify-start max-w-[400px] mt-16">
      <h2 className="text-primary text-2xl font-semibold">Social Links</h2>

      <div className="mt-5 ">
        <a
          href="https://www.facebook.com/p/Finance-Department-Government-of-Gilgit-Baltistan-61551044097798/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          <FaFacebook size={25} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
