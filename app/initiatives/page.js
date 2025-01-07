import React from "react";
import PageHeader from "../Components/Common/PageHeader";
import Divider from "../Components/Common/Divider";
import Initiatives from "../Components/HomePage/Initiatives";
import HeroSection from "../Components/aboutUs/components/heroSection";

const Initiative = () => {
  return (
    <div>
      <HeroSection
        title={"Initiatives"}
        subTitle={``}
        bdImage={"bg-initiative"}
        description="Driving impactful change through innovation and collaboration."
      />
      <section className="">
        <Initiatives />
      </section>
    </div>
  );
};

export default Initiative;
