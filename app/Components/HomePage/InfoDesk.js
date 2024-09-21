// components/InfoDesk.js
import React from "react";

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
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary">Info Desk</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-left"
            >
              <div className="flex items-center space-x-4">
                <span className="text-primary text-2xl font-bold">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
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
