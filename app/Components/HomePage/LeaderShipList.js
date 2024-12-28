import React from "react";
import Divider from "../Common/Divider";
import img1 from "../../../public/images/leadership/cmGb.jpeg";
import img2 from "../../../public/images/leadership/ministerFinance.jpeg";
import img3 from "../../../public/images/leadership/CS.png";
import img4 from "../../../public/images/leadership/Sf.jpeg";

import MediaCard from "../Common/MediaCard";

const leadership = [
  {
    name: "Mr. Gulbar Khan",
    // joinDate: "Nov 25 2020",
    toDate: "incumbent",
    designation: "Chief Minister",
    image: img1,
  },
  {
    name: "Abrar Ahmad Mirza",
    // joinDate: "October 26, 2023",
    toDate: "incumbent",
    image: img3,
    designation: "Chief Secretary",
  },
  {
    name: "Eng. Muhammad Ismail",
    // joinDate: "July 18 2023",
    toDate: "incumbent",
    designation: "Senior Finance Minister",
    image: img2,
  },

  {
    name: "Mr. Aziz Ahmad Jamali",
    // joinDate: "Aug 2023",
    toDate: "incumbent",
    designation: "Secretary Finance",
    image: img4,
  },
];

const LeaderShipList = () => {
  return (
    <div className="container mx-auto text-center py-8 md:py-12 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-primary">
        Our Leadership
      </h2>
      <Divider />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pb-8 md:pb-12">
        {leadership.map((member, index) => (
          <MediaCard
            key={index}
            imageUrl={member.image}
            title={member.name}
            // description={`${member.joinDate} to ${member.toDate}`}
            cardAction=""
            bodyCls="flex-col flex items-center py-3 md:py-4"
            designation={member.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderShipList;
