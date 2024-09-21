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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-600">
          Affiliated Organizations
        </h2>
        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {organizations.map((org, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={org.logo}
                  alt={org.name}
                  className="h-24 w-auto mx-auto"
                />
                <p className="mt-4 text-gray-700 text-center">{org.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliatedOrganizations;
