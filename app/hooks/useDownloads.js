"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export function useDownloads() {
  const { data: session } = useSession();
  const [downloads, setDownloads] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch downloads
  const fetchDownloads = async (categoryId = null) => {
    try {
      setLoading(true);
      const url = categoryId
        ? `/api/downloads?categoryId=${categoryId}`
        : "/api/downloads";
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch downloads");
      const data = await res.json();
      setDownloads(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/downloads/categories");
      if (!res.ok) throw new Error("Failed to fetch categories");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Upload file
  const uploadFile = async (formData) => {
    try {
      const res = await fetch("/api/downloads", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to upload file");
      const data = await res.json();
      setDownloads((prev) => [data, ...prev]);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Delete file
  const deleteFile = async (id) => {
    try {
      const res = await fetch(`/api/downloads/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete file");
      setDownloads((prev) => prev.filter((d) => d.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Add category
  const addCategory = async (name) => {
    console.log(name, "name");
    try {
      const res = await fetch("/api/downloads/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) throw new Error("Failed to add category");
      const data = await res.json();
      setCategories((prev) => [...prev, data]);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Delete category
  const deleteCategory = async (id) => {
    try {
      const res = await fetch(`/api/downloads/categories/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete category");
      fetchDownloads();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Initial fetch
  useEffect(() => {
    if (session) {
      fetchDownloads();
      fetchCategories();
    }
  }, [session]);

  return {
    downloads,
    categories,
    loading,
    error,
    fetchDownloads,
    uploadFile,
    deleteFile,
    addCategory,
    deleteCategory,
  };
}
