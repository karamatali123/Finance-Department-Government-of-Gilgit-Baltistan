import Functions from "@/app/Components/aboutUs/components/Fundtions";
import HeroSection from "@/app/Components/aboutUs/components/heroSection";
import OverviewSection from "@/app/Components/aboutUs/components/OverviewSection";
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
