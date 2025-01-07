"use client";
import React, { useState, useEffect } from "react";
import booksJson from "./booksJson.json";
import HeroSection from "../Components/aboutUs/components/heroSection";

const Accordion = ({ title, children, isOpen, onClick }) => {
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
      </button>
      {isOpen && (
        <div className="py-4 px-4 bg-white rounded-lg">{children}</div>
      )}
    </div>
  );
};

const AnnualBudget = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [openMainFolder, setOpenMainFolder] = useState(0);
  const [openSubFolders, setOpenSubFolders] = useState({
    "0-0": true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading === null) {
    return null;
  }

  console.log(openSubFolders, "openSubFolders");

  const toggleMainFolder = (index) => {
    setOpenMainFolder(openMainFolder === index ? -1 : index);
  };

  const toggleSubFolder = (mainIndex, subIndex) => {
    setOpenSubFolders((prev) => {
      const key = `${mainIndex}-${subIndex}`;
      return { ...prev, [key]: !prev[key] };
    });
  };

  const renderFileTable = (files) => {
    return (
      <div className="overflow-x-auto bg-white rounded-lg border-2">
        <table className="min-w-full divide-y divide-gray-400 ">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SL No
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Download
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {files.map((file, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 text-start">
                  {file.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.gbfinance.gov.pk/${file.path}`,
                        "_blank"
                      )
                    }
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen w-full flex items-center justify-center">
          <h1 className="text-primary mt-10">Loading...</h1>
        </div>
      ) : (
        // </div>
        <div>
          <HeroSection
            title={"Annual Budget Documents"}
            bdImage={"bg-annualBudget"}
            subTitle={``}
            description="Access comprehensive budget documents and financial reports"
          />
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto text-center px-4 md:px-8">
              <div className="max-w-6xl mx-auto">
                {booksJson.map((mainFolder, mainIndex) => (
                  <Accordion
                    key={mainIndex}
                    title={mainFolder.title}
                    isOpen={openMainFolder === mainIndex}
                    onClick={() => toggleMainFolder(mainIndex)}
                    className="text-gray-900"
                  >
                    <div className="space-y-2">
                      {mainFolder?.subFolders?.map((subFolder, subIndex) => (
                        <Accordion
                          key={subIndex}
                          title={subFolder.title}
                          isOpen={openSubFolders[`${mainIndex}-${subIndex}`]}
                          onClick={() => toggleSubFolder(mainIndex, subIndex)}
                          className="text-gray-900"
                        >
                          {renderFileTable(subFolder.files)}
                        </Accordion>
                      ))}
                    </div>
                  </Accordion>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default AnnualBudget;
