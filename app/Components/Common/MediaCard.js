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
    <div className=" relative items-center rounded-lg  flex flex-col transform transition duration-300 hover:scale-105  ">
      <div className="w-fit h-[250px]">
        <img
          src={imageUrl.src}
          alt={title}
          height={250}
          className="rounded-lg  object-contain h-[100%] "
        />
      </div>
      <div className={`${bodyCls} absolute bottom-1`}>
        <h3 className="text-lg font-bold text-white mb-2  max-w-[200px]">{title}</h3>
        <h2 className="text-sm font-bold text-white mb-2">{designation}</h2>
        <p className="text-gray-600 mb-4 text-justify">{description}</p>
        {cardAction}
      </div>
    </div>
  );
};

export default MediaCard;
