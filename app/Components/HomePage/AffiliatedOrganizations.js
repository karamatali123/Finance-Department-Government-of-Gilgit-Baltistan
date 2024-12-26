// components/AffiliatedOrganizations.js
"use client";
import React from "react";

const organizations = [
  {
    name: "Treasury Offices",
    logo: "/images/Gov.svg",
    link: "#",
  },
  {
    name: "KCBL – Karakoram Cooperative Bank Limited",
    logo: "/images/kcbl.png",
    link: "https://kcb.com.pk/",
  },
  {
    name: "Public Procurement Regulatory Authority, Gilgit Baltistan",
    logo: "/images/ppra.jpeg",
    link: "https://gbppra.gov.pk/",
  },
  {
    name: "Northern Areas Transport Corporation",
    logo: "/images/natco.png",
    link: "https://natco.gov.pk/",
  },
];

const AffiliatedOrganizations = () => {
  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-600">
          Affiliated Organizations
        </h2>
        <div className="mt-6 sm:mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {organizations.map((org, index) => (
              <div
                key={index}
                onClick={() => window.open(org.link, "_blank")}
                className="flex flex-col items-center justify-center p-4 cursor-pointer"
              >
                <img
                  src={org.logo}
                  alt={org.name}
                  className="h-16 sm:h-20 md:h-24 w-auto mx-auto"
                />
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-700 text-center">
                  {org.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliatedOrganizations;
