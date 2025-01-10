import React from "react";

const FinancialRecords = () => {
  const records = [
    { date: "2024-01-01", category: "Revenue", amount: "PKR50,000" },
    { date: "2024-01-05", category: "Expenditure", amount: "PKR20,000" },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold text-primary mb-4">
        Financial Records
      </h2>
      <table className="w-full border-1 bg-white rounded-lg ">
        <thead>
          <tr className="bg-primary  text-white">
            <th className="p-3 text-left rounded-tl-lg">Date</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left rounded-tr-lg">Amount</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className={"bg-gray-100"}>
              <td className="p-3 border-t">{record.date}</td>
              <td className="p-3 border-t">{record.category}</td>
              <td className="p-3 border-t">{record.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialRecords;
