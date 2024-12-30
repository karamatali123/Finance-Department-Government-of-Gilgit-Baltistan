// components/CoreTeam.js
import React from "react";
import MemberCard from "./teamMemberCard";
import profile from "../../../../public/images/CS.png";
import Divider from "../../Common/Divider";
const teamMembers = [
  {
    name: "Mr. Mujahid Sherdil",
    position: "Dec 22, 2022 - To Date",
    image: profile,
  },
  {
    name: "Dr. Wasif Khurshid",
    position: "Oct 2022 - Dec 2022",
    image: profile,
  },
  {
    name: "Iftikhar Ali Sahoo",
    position: "Feb 2021 - Nov 2021",
    image: profile,
  },
  {
    name: "Mr. Mujahid Sherdil",
    position: "Dec 22, 2022 - To Date",
    image: profile,
  },
  {
    name: "Dr. Wasif Khurshid",
    position: "Oct 2022 - Dec 2022",
    image: profile,
  },
  {
    name: "Iftikhar Ali Sahoo",
    position: "Feb 2021 - Nov 2021",
    image: profile,
  },
  {
    name: "Mr. Mujahid Sherdil",
    position: "Dec 22, 2022 - To Date",
    image: profile,
  },
  {
    name: "Dr. Wasif Khurshid",
    position: "Oct 2022 - Dec 2022",
    image: profile,
  },
  {
    name: "Iftikhar Ali Sahoo",
    position: "Feb 2021 - Nov 2021",
    image: profile,
  },
  // Add more team members here as needed
];

const CoreTeamList = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-600 ">Core Team</h2>
        <Divider />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeamList;
