"use client";

import { useState } from "react";
import Accordion from "../Common/Accordion";
import { renderFileTable } from "../../annual-budget/renderFiles";
import FileUploadForm from "./FileUploadForm";
import { useBudgets } from "../../hooks/useBudgets";
import AddFolderModal from "./AddFolderModal";
import { toast } from "react-hot-toast";

export default function BudgetList({
  title,
  documents = [],
  className = "",
  uploadDocument,
  addFolder,
  deleteFolder,
  selectedFolder,
  setSelectedFolder,
  budgetFolders,
  refetchDocuments,
  deleteDocument,
}) {
  const [openMainFolder, setOpenMainFolder] = useState(0);
  const [openSubFolder, setOpenSubFolder] = useState(0);
  const [isAddDocumentOpen, setIsAddDocumentOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addingDocument, setAddingDocument] = useState(false);
  const [parentId, setParentId] = useState(null);

  const handleDocumentSubmit = async (e) => {
    setAddingDocument(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("folderId", selectedFolder.folderId);

    try {
      await uploadDocument(formData);
      toast.success("Document uploaded successfully");
      e.target.reset();
      setSelectedFolder("");
      setAddingDocument(false);
      setIsAddDocumentOpen(false);
      refetchDocuments();
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(error.message || "Failed to upload document");
      setAddingDocument(false);
      setIsAddDocumentOpen(false);
    }
  };

  const toggleMainFolder = (index) => {
    setOpenMainFolder(openMainFolder === index ? -1 : index);
  };

  const toggleSubFolder = (index) => {
    setOpenSubFolder(openSubFolder === index ? -1 : index);
  };

  const documentFields = [
    {
      id: "title",
      label: "Title",
      placeholder: "Enter document title",
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
        accept: ".pdf,.doc,.docx,.xls,.xlsx",
        required: true,
      },
    },
  ];

  const handleAddFolder = async (name, parentId) => {
    try {
      await addFolder(name, parentId);
      toast.success("Folder added successfully");
    } catch (error) {
      toast.error(error.message || "Failed to add folder");
    }
  };

  const handleDeleteFolder = async (id) => {
    try {
      await deleteFolder(id);
      toast.success("Folder deleted successfully");
    } catch (error) {
      toast.error(error.message || "Failed to delete folder");
    }
  };

  return (
    <div className={`mt-8 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="container mx-auto">
        <div className="max-w-full mx-auto">
          {documents.map((folder, mainIndex) => (
            <Accordion
              key={folder.folderId}
              title={folder.folderName}
              isOpen={openMainFolder === mainIndex}
              onClick={() => toggleMainFolder(mainIndex)}
              className="text-gray-900"
              showDelete={true}
              onDelete={() => handleDeleteFolder(folder.folderId)}
            >
              {folder?.documents?.length > 0 && (
                <div className="border rounded-lg divide-y">
                  {renderFileTable(
                    folder.documents || [],
                    true,
                    deleteDocument
                  )}
                </div>
              )}

              {/* Display subfolders */}
              {folder.subFolders?.map((subFolder, subIndex) => (
                <div key={subFolder.folderId} className="mt-4">
                  <Accordion
                    title={subFolder.folderName}
                    isOpen={openSubFolder === `${mainIndex}-${subIndex}`}
                    onClick={() => toggleSubFolder(`${mainIndex}-${subIndex}`)}
                    className="text-gray-900"
                    showDelete={true}
                    onDelete={() => handleDeleteFolder(subFolder.folderId)}
                  >
                    <div className="border rounded-lg divide-y">
                      {subFolder?.documents?.length > 0 &&
                        renderFileTable(
                          subFolder.documents || [],
                          true,
                          deleteDocument
                        )}
                    </div>
                    <div className="flex flex-row justify-end">
                      <button
                        onClick={() => {
                          setSelectedFolder(subFolder);
                          setIsAddDocumentOpen(true);
                        }}
                        className="bg-primary text-white px-4 py-2 rounded-md m-2"
                      >
                        Add document
                      </button>
                    </div>
                  </Accordion>
                </div>
              ))}

              <div className="flex flex-row justify-end">
                <button
                  onClick={() => {
                    setParentId(folder.folderId);
                    setIsModalOpen(true);
                  }}
                  className="bg-primary text-white px-4 py-2 rounded-md m-2"
                >
                  Add subfolder
                </button>
                <button
                  onClick={() => {
                    setSelectedFolder(folder);
                    setIsAddDocumentOpen(true);
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
              Add folder
            </button>
            <AddFolderModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onAddFolder={handleAddFolder}
              parentId={parentId}
            />
          </div>
          {documents?.length === 0 && (
            <div className="border rounded-lg p-4 text-center text-gray-500">
              No documents uploaded yet
            </div>
          )}
        </div>
      </div>
      <FileUploadForm
        title="Manage Budget Documents"
        subTitle={`Add document to ${selectedFolder.folderName}`}
        onSubmit={handleDocumentSubmit}
        fields={documentFields}
        submitText="Upload Document"
        folders={budgetFolders}
        isOpen={isAddDocumentOpen}
        onClose={() => setIsAddDocumentOpen(false)}
        isSubmitting={addingDocument}
      />
    </div>
  );
}
