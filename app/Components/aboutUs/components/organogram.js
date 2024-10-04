import Image from "next/image";
import React from "react";

const Organogram = ({ organogram }) => {
  return (
    <div className="pt-6 ">
      <h2 className="text-4xl font-bold text-primary text-start my-10">
        {organogram.title}
      </h2>
      <Image
        src={organogram.image}
        height={860}
        width={1000}
        className="mx-auto"
      />
    </div>
  );
};

export default Organogram;
