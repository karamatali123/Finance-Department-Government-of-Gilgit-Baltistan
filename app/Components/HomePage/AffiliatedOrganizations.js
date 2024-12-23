// components/AffiliatedOrganizations.js
import React from "react";

const organizations = [
  {
    name: "Punjab Revenue Authority",
    logo: "/logos/logo-pra.svg", // Add the actual path to the logo
  },
  {
    name: "Inspectorate of Treasuries & Accounts",
    logo: "/logos/logo-ita.svg",
  },
  {
    name: "The Bank of Punjab",
    logo: "/logos/logo-bop.svg",
  },
  {
    name: "Punjab Pension Funds",
    logo: "/logos/logo-ppf.svg",
  },
];

const AffiliatedOrganizations = () => {
  return (
    <section className="py-8 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-600">
          Affiliated Organizations
        </h2>
        <div className="mt-6 sm:mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {organizations.map((org, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4"
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
