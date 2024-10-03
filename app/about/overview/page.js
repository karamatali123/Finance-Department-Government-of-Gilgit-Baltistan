import Functions from "@/app/Components/aboutUs/components/Fundtions";
import HeroSection from "@/app/Components/aboutUs/components/heroSection";
import OverviewSection from "@/app/Components/aboutUs/components/OverviewSection";
import React from "react";

const Overview = () => {
  return (
    <>
      <HeroSection
        title={"Overview"}
        description={`Welcome to the overview of the Finance Department of the Government of
      Gilgit Baltistan. This page provides general information about our
      department's purpose and vision.`}
        bdImage={"bg-overview"}
      />

      <OverviewSection />
      <Functions />
    </>
  );
};

export default Overview;
