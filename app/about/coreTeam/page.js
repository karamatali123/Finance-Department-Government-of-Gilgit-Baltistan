import CoreTeamList from "@/app/Components/aboutUs/components/CoreTeam";
import HeroSection from "@/app/Components/aboutUs/components/heroSection";
import React from "react";

const CoreTeam = () => {
  return (
    <div>
      <div
        className={` relative w-full bg-cover p-6   bg-no-repeat  flex items-center justify-center bg-opacity-60 bg-team`}
        style={{ height: "350px" }}
      ></div>
      <CoreTeamList />
    </div>
  );
};

export default CoreTeam;
