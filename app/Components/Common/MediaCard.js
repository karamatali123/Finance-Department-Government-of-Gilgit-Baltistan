"use client";
import React from "react";

const MediaCard = ({
  title,
  description,
  imageUrl,
  bodyCls = "flex-col flex items-start py-4 ",
  designation,
  cardAction = (
    <button className="bg-green-500 text-white self-start font-semibold py-2 px-4 rounded-[30px] hover:bg-green-600 transition-all">
      Read More
    </button>
  ),
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col  height-[500]  transform transition duration-300 hover:scale-105 hover:shadow-2xl ">
      <div className="w-full h-[250px]">
        <img
          src={imageUrl.src}
          alt={title}
          height={250}
          className="rounded-t-lg m-auto h-[100%] "
        />
      </div>
      <div className={`${bodyCls}`}>
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <h2 className="text-sm font-bold text-primary mb-2">{designation}</h2>
        <p className="text-gray-600 mb-4 text-justify">{description}</p>
        {cardAction}
      </div>
    </div>
  );
};

export default MediaCard;
