import CoreTeamList from "../../Components/aboutUs/components/CoreTeam";
import PageHeader from "../../Components/Common/PageHeader";
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
