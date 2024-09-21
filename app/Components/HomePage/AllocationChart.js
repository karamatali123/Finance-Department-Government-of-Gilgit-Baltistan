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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary">
          Allocation For Priority Areas
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          for the fiscal year 2022 - 2023
        </p>

        <div className="mt-10 space-y-4">
          {allocations.map((allocation, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`h-10 ${allocation.color} flex items-center justify-end pr-3 text-white font-semibold`}
                style={{ width: `${(allocation.amount / maxAmount) * 100}%` }}
              >
                {allocation.amount.toFixed(2)}
              </div>
              <div className="ml-4 w-40 text-right text-gray-700">
                {allocation.area}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllocationChart;
