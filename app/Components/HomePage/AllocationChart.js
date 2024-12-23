// components/AllocationChart.js
import React from "react";

const allocations = [
  {
    area: "Agriculture & Livestock",
    amount: 78.6,
    color: "bg-green-600",
  },
  {
    area: "Rural Economy",
    amount: 96.8,
    color: "bg-blue-400",
  },
  {
    area: "Infrastructure",
    amount: 173.8,
    color: "bg-yellow-400",
  },
  {
    area: "Health",
    amount: 369.3,
    color: "bg-red-500",
  },
  {
    area: "Education",
    amount: 422.1,
    color: "bg-purple-500",
  },
];

const AllocationChart = () => {
  const maxAmount = Math.max(
    ...allocations.map((allocation) => allocation.amount)
  );

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto text-center px-2 md:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary">
          Allocation For Priority Areas
        </h2>
        <p className="mt-2 text-base md:text-lg text-gray-600">
          for the fiscal year 2022 - 2023
        </p>

        <div className="mt-6 md:mt-10 space-y-3 md:space-y-4">
          {allocations.map((allocation, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center"
            >
              <div className="w-full sm:w-40 text-left sm:text-right text-sm md:text-base text-gray-700 mb-1 sm:mb-0 sm:order-2 sm:ml-4">
                {allocation.area}
              </div>
              <div className="w-full sm:flex-1 sm:order-1">
                <div
                  className={`h-8 md:h-10 ${allocation.color} flex items-center justify-end pr-2 md:pr-3 text-white text-sm md:text-base font-semibold`}
                  style={{ width: `${(allocation.amount / maxAmount) * 100}%` }}
                >
                  {allocation.amount.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllocationChart;
