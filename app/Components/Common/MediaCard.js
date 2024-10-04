import React from "react";
import Image from "next/image";

const MediaCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-between">
      <div className="w-full h-36 relative mb-4">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill" // Ensure the image fills the container
          // Maintain aspect ratio and cover the container
          className="rounded-t-lg"
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition-all">
        Read More
      </button>
    </div>
  );
};

export default MediaCard;
