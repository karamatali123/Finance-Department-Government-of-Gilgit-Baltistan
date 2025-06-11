"use client";

import { useState } from "react";
import FileUploadForm from "../../Components/admin/FileUploadForm";
import FileList from "../../Components/admin/FileList";
import { useDownloads } from "../../hooks/useDownloads";
import { toast } from "react-hot-toast";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("downloads");
  const [selectedDownloadFolder, setSelectedDownloadFolder] = useState("");
  const [selectedBudgetFolder, setSelectedBudgetFolder] = useState("");

  const {
    downloads,
    categories: downloadCategories,
    loading: downloadsLoading,
    error: downloadsError,
    uploadFile,
    deleteFile,
    addCategory: addDownloadCategory,
    deleteCategory: deleteDownloadCategory,
    fetchDownloads: refetchDownloads,
  } = useDownloads();

  const handleBudgetBookSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement budget book upload
    console.log("Budget book form submitted");
  };

  const handleEdit = (file) => {
    // TODO: Implement edit logic
    console.log("Edit file:", file);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this file?")) {
      try {
        await deleteFile(id);
        toast.success("File deleted successfully");
        refetchDownloads();
      } catch (error) {
        toast.error(error.message || "Failed to delete file");
      }
    }
  };

  const budgetBookFields = [
    {
      id: "year",
      label: "Fiscal Year",
      placeholder: "Enter fiscal year",
    },
    {
      id: "title",
      label: "Title",
      placeholder: "Enter budget book title",
    },
    {
      id: "file",
      label: "Budget Book File",
      type: "file",
      props: { accept: ".pdf" },
    },
  ];

  if (downloadsError) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-red-600">Error: {downloadsError}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="space-y-4">
        <div className="flex space-x-2 border-b">
          <button
            onClick={() => setActiveTab("downloads")}
            className={`px-4 py-2 font-medium ${
              activeTab === "downloads"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Downloads
          </button>
          <button
            onClick={() => setActiveTab("budget-books")}
            className={`px-4 py-2 font-medium ${
              activeTab === "budget-books"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Budget Books
          </button>
        </div>

        {activeTab === "downloads" && (
          <div className="p-6">
            {downloadsLoading ? (
              <div className="text-center py-4">Loading...</div>
            ) : (
              <FileList
                title="Existing Downloads"
                documents={downloads}
                refetchDownloads={refetchDownloads}
                onEdit={handleEdit}
                onDelete={handleDelete}
                uploadFile={uploadFile}
                deleteFile={handleDelete}
                addDownloadCategory={addDownloadCategory}
                deleteDownloadCategory={deleteDownloadCategory}
                selectedDownloadFolder={selectedDownloadFolder}
                setSelectedDownloadFolder={setSelectedDownloadFolder}
                downloadCategories={downloadCategories}
              />
            )}
          </div>
        )}

        {activeTab === "budget-books" && (
          <div className="p-6">
            <FileUploadForm
              title="Manage Budget Books"
              onSubmit={handleBudgetBookSubmit}
              fields={budgetBookFields}
              submitText="Upload Budget Book"
              folders={[]}
              selectedFolder={selectedBudgetFolder}
              onFolderSelect={setSelectedBudgetFolder}
            />
            <FileList
              title="Existing Budget Books"
              files={[]}
              onEdit={handleEdit}
              onDelete={handleDelete}
              folders={[]}
            />
          </div>
        )}
      </div>
    </div>
  );
}
