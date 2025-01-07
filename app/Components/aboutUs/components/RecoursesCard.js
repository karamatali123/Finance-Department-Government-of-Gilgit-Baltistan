"use client";
import React, { useState } from "react";
import Image from "next/image"; // Assuming you're using Next.js

const RecoursesCard = ({ title = "Admin Section", description, imageUrl }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="bg-white  text-start rounded-lg shadow-md max-w-sm max-h-fit">
      {/* Title using image */}
      <div className="mb-4 h-[200px]">
        <Image
          src={imageUrl} // Update this path to your actual image path
          alt="Admin wooden blocks"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-semibold text-start text-primary mb-3 max-h-[200px] overflow-y-auto">
          {title}
        </h3>
        <p
          className={`text-gray-600 mb-4 text-justify text-md ${
            !showMore ? "line-clamp-5" : ""
          }`}
        >
          {description}
        </p>
        <button
          className="text-white hover:text-white bg-primary py-2 rounded-full w-[100px] "
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default RecoursesCard;
