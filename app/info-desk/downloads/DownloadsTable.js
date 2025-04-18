"use client";
import { useState } from "react";
// import { renderFileTable } from "./renderFiles";
import booksJson from "./downloadsBooks.json";
import { renderFileTable } from "../../annual-budget/renderFiles";

const DownloadsTable = () => {
  const [isLoading, setIsLoading] = useState(false);

  console.log(booksJson, "booksJson");

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen w-full flex items-center justify-center">
          <h1 className="text-primary mt-10">Loading...</h1>
        </div>
      ) : (
        <div>
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto text-center">
              <div className="max-w-6xl mx-auto">
                <div className="space-y-2">
                  {/* {booksJson.map((file, index) => (
                    <Accordion
                      key={index}
                      title={file.title}
                      isOpen={true}
                      onClick={() => {}}
                      className="text-gray-900"
                    > */}
                  {renderFileTable(booksJson)}
                  {/* </Accordion> */}
                  {/* ))} */}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default DownloadsTable;
