import React from "react";
import cardImage from "../../../../public/images/img5.png";
import cardImage1 from "../../../../public/images/img5.png";
import cardImage2 from "../../../../public/images/img.png";
import cardImage3 from "../../../../public/images/img5.png";
import cardImage4 from "../../../../public/images/img3.png";
import cardImage5 from "../../../../public/images/img2.png";

import MediaCard from "../../Common/MediaCard";
const resourceData = [
  {
    title: "Economic Services Wings",
    description: "The main functions of this wing are enlisted below.",
    imageUrl: cardImage,
  },
  {
    title: "Local Government Finance Wings",
    description: "The primary functions of this wing are.",
    imageUrl: cardImage1,
  },
  {
    title: "Social Services Wings",
    description: "This wing is responsible for the following core functions.",
    imageUrl: cardImage5,
  },
  {
    title: "Monitoring Wing",
    description: "The Monitoring Wing is mainly responsible for.",
    imageUrl: cardImage3,
  },
  {
    title: "Corporates Finance unit",
    description:
      "This unit has been established for expanding service delivery to citizens through a corporate style dispensation in order to ensure effectiveness ..",
    imageUrl: cardImage2,
  },
  {
    title: "Risk Management System",
    description:
      "Risk Management Unit (RMU) is the fiscal guardian for projects using Public Private Partnership (PPP) approach for procurement of infrastructure projects. ",
    imageUrl: cardImage4,
  },
];

const ExpenditureList = () => {
  return (
    <div className="py-9">
      <h2 className="text-4xl font-bold text-green-600  text-start mb-3">
        {" "}
        Budget & Resource
      </h2>

      <p className="text-black text-start text-lg">
        The main wings/units working under Budget and Resource Division are:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {resourceData.map((resource, index) => (
          <MediaCard
            key={index}
            title={resource.title}
            description={resource.description}
            imageUrl={resource.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenditureList;
