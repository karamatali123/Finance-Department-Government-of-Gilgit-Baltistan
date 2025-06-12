"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export function useBudgets() {
  const { data: session } = useSession();
  const [documents, setDocuments] = useState([]);
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch documents
  const fetchDocuments = async (folderId = null) => {
    try {
      setLoading(true);
      const url = folderId
        ? `/api/budgets/documents?folderId=${folderId}`
        : "/api/budgets/documents";
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch documents");
      const data = await res.json();
      setDocuments(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch folders
  const fetchFolders = async () => {
    try {
      const res = await fetch("/api/budgets/folders");
      if (!res.ok) throw new Error("Failed to fetch folders");
      const data = await res.json();
      setFolders(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Upload document
  const uploadDocument = async (formData) => {
    try {
      const res = await fetch("/api/budgets/documents", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to upload document");
      const data = await res.json();
      setDocuments((prev) => [data, ...prev]);
      fetchDocuments();
      fetchFolders();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Delete document
  const deleteDocument = async (id) => {
    try {
      const res = await fetch(`/api/budgets/documents/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete document");
      setDocuments((prev) => prev.filter((d) => d.id !== id));
      fetchFolders();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Add folder
  const addFolder = async (name, parentId) => {
    try {
      const res = await fetch("/api/budgets/folders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, parentId }),
      });
      if (!res.ok) throw new Error("Failed to add folder");
      const data = await res.json();
      setFolders((prev) => [...prev, data]);
      fetchDocuments();
      fetchFolders();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Delete folder
  const deleteFolder = async (id) => {
    try {
      const res = await fetch(`/api/budgets/folders/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchDocuments();
        fetchFolders();
      }
      if (!res.ok) throw new Error("Failed to delete folder");
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchDocuments();
    fetchFolders();
  }, [session]);

  return {
    documents,
    folders,
    loading,
    error,
    fetchDocuments,
    uploadDocument,
    deleteDocument,
    addFolder,
    deleteFolder,
  };
}
