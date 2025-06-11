"use client";

import { FaTrash } from "react-icons/fa6";

const Accordion = ({
  title,
  children,
  isOpen,
  onClick,
  showDelete,
  onDelete,
}) => {
  return (
    <div className="mb-4 border rounded-lg shadow-lg ">
      <button
        className={`w-full p-4 text-left ${
          !isOpen ? "hover:bg-gray-200" : ""
        } flex justify-between items-center ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        } ${isOpen ? "bg-primary" : "bg-white"}`}
        onClick={onClick}
      >
        <span
          className={`font-medium ${isOpen ? "text-white" : "text-gray-900"}`}
        >
          {title}
        </span>
        <div className="flex flex-row gap-2">
          {showDelete && (
            <button
              onClick={() => {
                if (confirm("Are you sure you want to delete this category?")) {
                  onDelete();
                }
              }}
              className="text-red-500"
            >
              <FaTrash className="w-4 h-4" />
            </button>
          )}
          <svg
            className={`w-6 h-6 transition-transform text-gray-900  ${
              isOpen ? "text-white" : ""
            } ${isOpen ? "transform rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="py-4 px-4 bg-white rounded-lg">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
