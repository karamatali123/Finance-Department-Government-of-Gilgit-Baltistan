import React from "react";
import cardImage from "../../../../public/images/budget/Picture.png";
import cardImage1 from "../../../../public/images/budget/Picture-1.png";
import cardImage2 from "../../../../public/images/budget/Picture-2.png";
import cardImage3 from "../../../../public/images/budget/Picture-3.png";
import cardImage4 from "../../../../public/images/budget/Picture-4.png";
import cardImage5 from "../../../../public/images/budget/Picture-5.png";
import cardImage6 from "../../../../public/images/budget/Picture-6.png";
import MediaCard from "../../Common/MediaCard";
const resourceData = [
  {
    title: "Budget Wings",
    description:
      "This wing is responsible for financial administration of the province. The major functions of this wing are as under.",
    imageUrl: cardImage,
  },
  {
    title: "Resource Wings",
    description: "The Resource Wing performs the following functions.",
    imageUrl: cardImage1,
  },
  {
    title: "Establishment Wings",
    description:
      "The Establishment Wing is responsible for the following main activities.",
    imageUrl: cardImage2,
  },
  {
    title: "Regulation Wings",
    description:
      "The Regulations Wing is responsible for making the general principles of personnel administration.",
    imageUrl: cardImage3,
  },
  {
    title: "Policy And Development Wings",
    description:
      "The Policy and Development Wing was established to perform the following functions.",
    imageUrl: cardImage4,
  },
  {
    title: "Debt Management unit",
    description:
      "Government of the Punjab established a Debt Management Unit during fiscal year 2015 - 2016 for developing.",
    imageUrl: cardImage5,
  },
  {
    title: "Tax Reforms Unit",
    description:
      "Tax Reform Unit is the key contributor to the policy-making process relating to tax policy and analysis.",
    imageUrl: cardImage6,
  },
];

const BudgetRecourses = () => {
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

export default BudgetRecourses;
