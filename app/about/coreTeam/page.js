import CoreTeamList from "@/app/Components/aboutUs/components/CoreTeam";
import HeroSection from "@/app/Components/aboutUs/components/heroSection";
import PageHeader from "@/app/Components/Common/PageHeader";
import React from "react";

const CoreTeam = () => {
  return (
    <div>
      <PageHeader bgImg={"bg-team"} />
      <CoreTeamList />
    </div>
  );
};

export default CoreTeam;
