// components/AffiliatedOrganizations.js
"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
const organizations = [
  {
    name: "Directorate of Treasury & Accounts Services",
    logo: "/images/Gov.png",
    link: "/treasury",
  },
  {
    name: "GB Revenue Authority",
    logo: "/images/Gov.png",
    link: "/revenue-authority",
  },
  {
    name: "Public Procurement Regulatory Authority, Gilgit Baltistan",
    logo: "/images/ppra.jpeg",
    link: "https://gbppra.gov.pk/",
  },
  {
    name: "KCBL – Karakoram Cooperative Bank Limited",
    logo: "/images/kcbl.png",
    link: "https://kcb.com.pk/",
  },

  {
    name: "Northern Areas Transport Corporation",
    logo: "/images/natco.png",
    link: "https://natco.gov.pk/",
  },
];

const AffiliatedOrganizations = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="container mx-auto text-center  px-4 md:px-8">
          {/* Header Section */}
          <SectionHeader
            primaryText="Affiliated "
            secondaryText="Organizations"
            description="Partnering with trusted organizations to amplify impact and achieve shared goals."
          />
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {organizations.map((org, index) => (
              <Link
                href={org.link}
                target="_blank"
                key={index}
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliatedOrganizations;
