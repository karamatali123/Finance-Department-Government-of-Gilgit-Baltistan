"use client";
import { useState } from "react";
// import { renderFileTable } from "./renderFiles";
// import booksJson from "./downloadsBooks.json";
import { renderFileTable } from "../../annual-budget/renderFiles";
import { useDownloads } from "../../hooks/useDownloads";
import Accordion from "../../Components/Common/Accordion";

const DownloadsTable = () => {
  const [openMainFolder, setOpenMainFolder] = useState(0);
  const [openSubFolder, setOpenSubFolder] = useState(0);

  const { downloads, loading } = useDownloads();
  const toggleMainFolder = (index) => {
    setOpenMainFolder(openMainFolder === index ? -1 : index);
  };
  const toggleSubFolder = (index) => {
    setOpenSubFolder(openSubFolder === index ? -1 : index);
  };
  console.log(downloads, "downloads");

  const sortedDocuments = (documents) => {
    return documents.sort((a, b) => {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-24">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div>
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto text-center">
              <div className="max-w-6xl mx-auto">
                <div className="space-y-2">
                  <div className="container mx-auto">
                    <div className="max-w-full mx-auto">
                      {downloads.map((category, mainIndex) => (
                        <Accordion
                          key={category.categoryId}
                          title={category.categoryName}
                          isOpen={openMainFolder === mainIndex}
                          onClick={() => toggleMainFolder(mainIndex)}
                          className="text-gray-900"
                        >
                          {category?.documents?.length > 0 && (
                            <div className="border rounded-lg divide-y">
                              {renderFileTable(
                                sortedDocuments(category.documents) || []
                              )}
                            </div>
                          )}

                          {/* Display subcategories */}
                          {category.subCategories?.map(
                            (subCategory, subIndex) => (
                              <div
                                key={subCategory.categoryId}
                                className="mt-4 "
                              >
                                <Accordion
                                  title={subCategory.categoryName}
                                  isOpen={
                                    openSubFolder === `${mainIndex}-${subIndex}`
                                  }
                                  onClick={() =>
                                    toggleSubFolder(`${mainIndex}-${subIndex}`)
                                  }
                                  className="text-gray-900"
                                  showDelete={true}
                                  onDelete={() =>
                                    handleDeleteDownloadFolder(
                                      subCategory.categoryId
                                    )
                                  }
                                >
                                  <div className="border rounded-lg divide-y">
                                    {subCategory?.documents?.length > 0 &&
                                      renderFileTable(
                                        sortedDocuments(
                                          subCategory.documents
                                        ) || []
                                      )}
                                    {subCategory?.documents?.length === 0 && (
                                      <div className="p-4 text-center text-gray-500">
                                        No documents in this subcategory
                                      </div>
                                    )}
                                  </div>
                                </Accordion>
                              </div>
                            )
                          )}
                        </Accordion>
                      ))}
                    </div>
                  </div>
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
