import Functions from "../../Components/aboutUs/components/Fundtions";
import HeroSection from "../../Components/aboutUs/components/heroSection";
import OverviewSection from "../../Components/aboutUs/components/OverviewSection";
import React from "react";

const Overview = () => {
  return (
    <>
      <HeroSection
        title={"Overview"}
        bdImage={"bg-overview"}
        subTitle={`About us/<b>Overview</b>`}
      />

      <OverviewSection />
      <Functions />
    </>
  );
};

export default Overview;
