"use client";

import { useState } from "react";
import Accordion from "../Common/Accordion";
import { renderFileTable } from "../../annual-budget/renderFiles";
import FileUploadForm from "./FileUploadForm";
import { useDownloads } from "../../hooks/useDownloads";
import AddFolderModal from "./AddFolderModal";
import { toast } from "react-hot-toast";

export default function FileList({
  title,
  documents = [],
  className = "",
  uploadFile,
  addDownloadCategory,
  deleteDownloadCategory,
  selectedDownloadFolder,
  setSelectedDownloadFolder,
  downloadCategories,
  refetchDownloads,
  deleteFile,
}) {
  const [openMainFolder, setOpenMainFolder] = useState(0);

  const [isAddDocumentOpen, setIsAddDocumentOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addingDocument, setAddingDocument] = useState(false);

  const handleDownloadSubmit = async (e) => {
    setAddingDocument(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("categoryId", selectedDownloadFolder.categoryId);

    try {
      await uploadFile(formData);
      toast.success("File uploaded successfully");
      e.target.reset();
      setSelectedDownloadFolder("");
      setAddingDocument(false);
      setIsAddDocumentOpen(false);
      refetchDownloads();
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(error.message || "Failed to upload file");
      setAddingDocument(false);
      setIsAddDocumentOpen(false);
    }
  };

  const toggleMainFolder = (index) => {
    setOpenMainFolder(openMainFolder === index ? -1 : index);
  };

  const downloadFields = [
    {
      id: "title",
      label: "Title",
      placeholder: "Enter download title",
      required: true,
    },
    {
      id: "description",
      label: "Description",
      placeholder: "Enter description",
    },
    {
      id: "file",
      label: "File",
      type: "file",
      props: {
        accept: ".pdf,.doc,.docx",
        required: true,
      },
    },
  ];

  const handleAddDownloadFolder = async (name) => {
    try {
      await addDownloadCategory(name);
      toast.success("Category added successfully");
    } catch (error) {
      toast.error(error.message || "Failed to add category");
    }
  };

  const handleDeleteDownloadFolder = async (id) => {
    try {
      await deleteDownloadCategory(id);
      toast.success("Category deleted successfully");
    } catch (error) {
      toast.error(error.message || "Failed to delete category");
    }
  };
  return (
    <div className={`mt-8 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="container mx-auto">
        <div className="max-w-full mx-auto">
          {documents.map((category, mainIndex) => (
            <Accordion
              key={category.categoryId}
              title={category.categoryName}
              isOpen={openMainFolder === mainIndex}
              onClick={() => toggleMainFolder(mainIndex)}
              className="text-gray-900"
              showDelete={true}
              onDelete={() => handleDeleteDownloadFolder(category.categoryId)}
            >
              <div className="border rounded-lg divide-y">
                {renderFileTable(category.documents || [], true, deleteFile)}
                {category?.documents?.length === 0 && (
                  <div className="p-4 text-center text-gray-500">
                    No documents in this category
                  </div>
                )}
              </div>
              <div className="flex flex-row justify-end">
                <button
                  onClick={() => {
                    setIsAddDocumentOpen(true);
                    setSelectedDownloadFolder(category);
                  }}
                  className="bg-primary text-white px-4 py-2 rounded-md m-2"
                >
                  Add document
                </button>
              </div>
            </Accordion>
          ))}
          <div className="flex flex-row justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-white px-4 py-2 rounded-md m-2"
            >
              Add category
            </button>
            <AddFolderModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onAddFolder={handleAddDownloadFolder}
            />
          </div>
          {document?.length === 0 && (
            <div className="border rounded-lg p-4 text-center text-gray-500">
              No documents uploaded yet
            </div>
          )}
        </div>
      </div>
      <FileUploadForm
        title="Manage Downloads"
        subTitle={`Add document to ${selectedDownloadFolder.categoryName}`}
        onSubmit={handleDownloadSubmit}
        fields={downloadFields}
        submitText="Upload File"
        folders={downloadCategories}
        isOpen={isAddDocumentOpen}
        onClose={() => setIsAddDocumentOpen(false)}
        isSubmitting={addingDocument}
      />
    </div>
  );
}
