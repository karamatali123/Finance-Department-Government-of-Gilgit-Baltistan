import React from "react";
import Image from "next/image";

const MediaCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col  height-[500] gap-[100px] transform transition duration-300 hover:scale-105 hover:shadow-2xl ">
      <div className="w-full h-36 relative mb-4">
        <Image
          src={imageUrl}
          alt={title}
          height={250}
          // Ensure the image fills the container
          // Maintain aspect ratio and cover the container
          className="rounded-t-lg m-auto"
        />
      </div>
      <div className="flex-col flex items-start">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-green-500 text-white self-start font-semibold py-2 px-4 rounded-[30px] hover:bg-green-600 transition-all">
          Read More
        </button>
      </div>
    </div>
  );
};

export default MediaCard;
