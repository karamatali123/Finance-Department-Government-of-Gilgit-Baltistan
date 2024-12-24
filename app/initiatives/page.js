import React from "react";
import PageHeader from "../Components/Common/PageHeader";
import Divider from "../Components/Common/Divider";
import Initiatives from "../Components/HomePage/Initiatives";

const Initiative = () => {
  return (
    <div>
      <PageHeader bgImg={"bg-initiative"} />
      <section className="py-12">
        <Initiatives />
      </section>
    </div>
  );
};

export default Initiative;
