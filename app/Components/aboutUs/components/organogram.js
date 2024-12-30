import Image from "next/image";
import React from "react";

const Organogram = ({ organogram }) => {
  return (
    <div className="pt-2 ">
      <img
        src={organogram.image.src}
        height={960}
        width={1200}
        className="mx-auto"
      />
    </div>
  );
};

export default Organogram;
