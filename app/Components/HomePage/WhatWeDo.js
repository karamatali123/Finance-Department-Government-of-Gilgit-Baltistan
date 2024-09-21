// components/WhatWeDo.js
import React from "react";

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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary">What We Do</h2>
        <p className="mt-4 text-lg text-gray-600">
          The major services offered by Finance department can be categorized in
          the following heads:
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
