import React from "react";

const TablePagination = ({ length }) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        className="text-gray-400 py-2 px-4 border rounded-md bg-gray-100"
        disabled
      >
        Previous
      </button>
      <div className="space-x-2">
        {Array.from({ length: 11 }, (_, index) => (
          <button
            key={index}
            className="py-2 px-4 border rounded-md text-gray-600"
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button className="text-gray-400 py-2 px-4 border rounded-md bg-gray-100">
        Next
      </button>
    </div>
  );
};

export default TablePagination;
