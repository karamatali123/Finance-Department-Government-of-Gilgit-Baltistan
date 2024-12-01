import React from "react";

const PageHeader = ({ bgImg, name }) => {
  return (
    <>
      <div
        className={` relative w-full bg-full p-6   bg-no-repeat  flex items-center justify-center bg-opacity-60 ${bgImg}`}
        style={{ height: "350px" }}
      ></div>
      <h1>{name}</h1>
    </>
  );
};

export default PageHeader;
