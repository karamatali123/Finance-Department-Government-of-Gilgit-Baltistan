import React from "react";
import Divider from "../Common/Divider";
import img1 from "../../../public/images/leadership/leader1.png";
import img2 from "../../../public/images/leadership/leader2.png";
import img3 from "../../../public/images/leadership/leader3.png";
import img4 from "../../../public/images/leadership/leader4.png";
import MediaCard from "../Common/MediaCard";

const leadership = [
  {
    name: "Mr. Mujahid Sherdil",
    joinDate: "Dec 12 2022",
    toDate: "Dec 12 2026",
    image: img1,
  },
  {
    name: "Mr. Mujahid Sherdil",
    joinDate: "Dec 12 2022",
    toDate: "Dec 12 2026",
    image: img2,
  },
  {
    name: "Mr. Mujahid Sherdil",
    joinDate: "Dec 12 2022",
    toDate: "Dec 12 2026",
    image: img3,
  },
  {
    name: "Mr. Mujahid Sherdil",
    joinDate: "Dec 12 2022",
    toDate: "Dec 12 2026",
    image: img4,
  },
];

const LeaderShipList = () => {
  return (
    <div className="container mx-auto text-center py-12">
      <h2 className="text-3xl font-semibold text-primary ">Our Leadership</h2>
      <Divider />
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 pb-12">
        {leadership.map((member, index) => (
          <MediaCard
            key={index}
            imageUrl={member.image}
            title={member.name}
            description={`${member.joinDate} to ${member.toDate}`}
            cardAction=""
            bodyCls="flex-col flex items-center py-4 "
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderShipList;
