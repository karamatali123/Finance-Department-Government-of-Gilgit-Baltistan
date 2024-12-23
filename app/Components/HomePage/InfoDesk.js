// components/InfoDesk.js
import React from "react";
import Divider from "../Common/Divider";

const infoItems = [
  {
    number: "01",
    title: "Debt Publications",
    description:
      "Detailed information regarding debt publications for all the years is available here",
  },
  {
    number: "02",
    title: "Transfers and Postings",
    description:
      "Stay updated regarding all the recent transfers and postings of the department",
  },
  {
    number: "03",
    title: "Trainings",
    description:
      "Details of the training conducted over the years are available here",
  },
  {
    number: "04",
    title: "Civil Accounts",
    description:
      "Citizens can review civil accounts for the previous and current years",
  },
  {
    number: "05",
    title: "Market Rates",
    description:
      "Different market rates reports are made available for citizens",
  },
  {
    number: "06",
    title: "Notifications",
    description:
      "Formal notification and announcement released over the years are made available",
  },
];

const InfoDesk = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto text-center px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary">
          Info Desk
        </h2>
        <Divider />
        <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 md:p-6 text-left transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-start md:items-center space-x-3 md:space-x-4">
                <span className="text-primary text-xl md:text-2xl font-bold">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoDesk;
