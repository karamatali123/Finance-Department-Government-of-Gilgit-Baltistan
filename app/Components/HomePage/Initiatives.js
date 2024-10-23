// components/Initiatives.js
import React from "react";
import Divider from "../Common/Divider";

const initiatives = [
  {
    title: "Specialized Units",
    description:
      "Different specialized units are formed to oversee risk & debit management, tax reforms and corporate finance.",
    icon: "/icons/specialized-units.svg", // Placeholder for icon
  },
  {
    title: "Citizens' Budget",
    description:
      "The Citizens' Budget of Government of the Punjab with respect to fiscal year are available here.",
    icon: "/icons/citizens-budget-icon.svg",
  },
  {
    title: "Pension Reforms",
    description:
      "Government of the Punjab, as one of its reform initiatives, has simplified the process for the grant of pension.",
    icon: "/icons/pension-reform.svg",
  },
  {
    title: "PFM Reforms Strategy",
    description:
      "In Punjab, there has always been a considerable focus on Public Financial Management (PFM) reforms.",
    icon: "/icons/pfm-reforms-icon.svg",
  },
  {
    title: "PRIDE Program",
    description:
      "The department is working on Environmental and Social Commitment Plan, Stakeholders Engagement Plan etc under this program.",
    icon: "/icons/pride-program.svg",
  },
  {
    title: "Read More",
    description:
      "For further information regarding initiatives taken by the department, please click here.",
    icon: "/icons/read-more.svg",
  },
];

const Initiatives = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary">Initiatives</h2>
        <Divider />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {initiatives.map((initiative, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md mb-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  src={initiative.icon}
                  alt={initiative.title}
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-primary">
                {initiative.title}
              </h3>
              <p className="mt-2 text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
