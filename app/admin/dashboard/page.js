"use client";

import { useState } from "react";
import FileUploadForm from "../../Components/admin/FileUploadForm";
import FileList from "../../Components/admin/FileList";
import BudgetList from "../../Components/admin/BudgetList";
import { useDownloads } from "../../hooks/useDownloads";
import { useBudgets } from "../../hooks/useBudgets";
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

  const {
    folders: budgetFolders,
    loading: budgetsLoading,
    error: budgetsError,
    uploadDocument,
    deleteDocument,
    addFolder: addBudgetFolder,
    deleteFolder: deleteBudgetFolder,
    fetchDocuments: refetchBudgetDocuments,
  } = useBudgets();

  const sortedBudgetFolders = budgetFolders.sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt); 
  });

  const handleEdit = (file) => {
    // TODO: Implement edit logic
    console.log("Edit file:", file);
  };

  const handleDelete = async (id, type) => {
    if (confirm("Are you sure you want to delete this file?")) {
      try {
        if (type === "download") {
          await deleteFile(id);
          toast.success("File deleted successfully");
          refetchDownloads();
        } else {
          await deleteDocument(id);
          toast.success("Document deleted successfully");
          refetchBudgetDocuments();
        }
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

  // if (downloadsError || budgetsError) {
  //   return (
  //     <div className="container mx-auto p-6">
  //       <div className="text-red-600">
  //         Error: {downloadsError || budgetsError}
  //       </div>
  //     </div>
  //   );
  // }

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
            onClick={() => setActiveTab("budgets")}
            className={`px-4 py-2 font-medium ${
              activeTab === "budgets"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Budget Documents
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
                onDelete={(id) => handleDelete(id, "download")}
                uploadFile={uploadFile}
                deleteFile={(id) => handleDelete(id, "download")}
                addDownloadCategory={addDownloadCategory}
                deleteDownloadCategory={deleteDownloadCategory}
                selectedDownloadFolder={selectedDownloadFolder}
                setSelectedDownloadFolder={setSelectedDownloadFolder}
                downloadCategories={downloadCategories}
              />
            )}
          </div>
        )}

        {activeTab === "budgets" && (
          <div className="p-6">
            {budgetsLoading ? (
              <div className="text-center py-4">Loading...</div>
            ) : (
              <BudgetList
                title="Budget Documents"
                documents={sortedBudgetFolders}
                refetchDocuments={refetchBudgetDocuments}
                onDelete={(id) => handleDelete(id, "budget")}
                uploadDocument={uploadDocument}
                deleteDocument={(id) => handleDelete(id, "budget")}
                addFolder={addBudgetFolder}
                deleteFolder={deleteBudgetFolder}
                selectedFolder={selectedBudgetFolder}
                setSelectedFolder={setSelectedBudgetFolder}
                budgetFolders={budgetFolders}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
