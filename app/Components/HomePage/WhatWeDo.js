// components/WhatWeDo.js
import React from "react";
import Divider from "../Common/Divider";

const WhatWeDo = () => {
  const services = [
    {
      title: "Resource Allocation",
      description:
        "The provincial resources consist of the major share from Federal Government under Federal Divisible Pool's share.",
      imageUrl: "images/resource-allocation.svg", // Placeholder image path
    },
    {
      title: "Resource Mobilization",
      description:
        "The provincial resources consist of the major share from Federal Government under Federal Divisible Pool's share.",
      imageUrl: "images/resource-mobilization.svg", // Placeholder image path
    },
    {
      title: "Revenue Collection",
      description:
        "The provincial resources consist of the major share from Federal Government under Federal Divisible Pool's share.",
      imageUrl: "images/revenue-collection.svg", // Placeholder image path
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary">
          What We Do
        </h2>
        <Divider />
        <p className="mt-4 text-base md:text-lg text-gray-600 px-2 md:px-0">
          The major services offered by Finance department can be categorized in
          the following heads:
        </p>
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl mx-2 md:mx-0"
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
