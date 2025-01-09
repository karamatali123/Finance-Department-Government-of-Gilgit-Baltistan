"use client";

import React, { useState, useEffect } from "react";
import booksJson from "./booksJson.json";
import HeroSection from "../Components/aboutUs/components/heroSection";
import Accordion from "../Components/Common/Accordion";
import { renderFileTable } from "./renderFiles";

const AnnualBudget = () => {
  const [bookNo, setBookNo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [openMainFolder, setOpenMainFolder] = useState(0);
  const [openSubFolders, setOpenSubFolders] = useState({ "0-0": true });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safely access searchParams in client-side rendering
      const urlParams = new URLSearchParams(window.location.search);
      const bookNoParam = urlParams.get("bookNo");
      if (bookNoParam) {
        const parsedBookNo = Number(bookNoParam);
        setBookNo(parsedBookNo);

        // Set initial state for folders based on `bookNo`
        setOpenMainFolder(parsedBookNo - 1 || 0);
        setOpenSubFolders({ [`${parsedBookNo - 1}-0`]: true });
      }
    }
  }, []);

  useEffect(() => {
    if (bookNo) {
      setOpenMainFolder(bookNo - 1 || 0);
      setOpenSubFolders({ [`${bookNo - 1}-0`]: true });
    }
  }, [bookNo]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <h1 className="text-primary mt-10">Loading...</h1>
      </div>
    );
  }

  const toggleMainFolder = (index) => {
    setOpenMainFolder(openMainFolder === index ? -1 : index);
  };

  const toggleSubFolder = (mainIndex, subIndex) => {
    setOpenSubFolders((prev) => {
      const key = `${mainIndex}-${subIndex}`;
      return { ...prev, [key]: !prev[key] };
    });
  };

  return (
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
  );
};

export default AnnualBudget;
