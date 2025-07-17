"use client";
import React from "react";
import Divider from "../Common/Divider";
import img1 from "../../../public/images/CM.png";
import img2 from "../../../public/images/ministerFinance.png";
import img3 from "../../../public/images/CS.png";
import img4 from "../../../public/images/sf.jpg";
import { motion } from "framer-motion";

import MediaCard from "../Common/MediaCard";
import SectionHeader from "./SectionHeader";

const leadership = [
  {
    name: "Mr. Gulbar Khan",
    // joinDate: "Nov 25 2020",
    toDate: "incumbent",
    designation: "Chief Minister",
    image: img1,
  },
  {
    name: "Eng. Muhammad Ismail",
    // joinDate: "July 18 2023",
    toDate: "incumbent",
    designation: "Senior Finance Minister",
    image: img2,
  },
  {
    name: "Mr. Abrar Ahmad Mirza",
    // joinDate: "October 26, 2023",
    toDate: "incumbent",
    image: img3,
    designation: "Chief Secretary",
  },

  {
    name: "Mr. Najeeb Alam",
    // joinDate: "Aug 2023",
    toDate: "incumbent",
    designation: "Secretary Finance",
    image: img4,
  },
];

const LeaderShipList = () => {
  return (
    <div className="container mx-auto text-center py-8 md:py-12 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 2, delay: 0.2 }}
      >
        <SectionHeader
          primaryText="Leadership"
          secondaryText="Our"
          description="At the heart of our success is a leadership team committed to innovation, integrity, and guiding us toward our goals."
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 mt-10">
        {leadership.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.1 * index }}
          >
            <MediaCard
              key={index}
              imageUrl={member.image}
              title={member.name}
              // description={`${member.joinDate} to ${member.toDate}`}
              cardAction=""
              bodyCls="flex-col flex items-start px-3 "
              designation={member.designation}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LeaderShipList;
