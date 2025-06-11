"use client";

import { useState } from "react";
import AddFolderModal from "./AddFolderModal";

export default function FolderSelector({
  folders = [],
  selectedFolder,
  onSelect,
  onAddFolder,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">Category</label>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          + Add Category
        </button>
      </div>
      <select
        value={selectedFolder?.id || ""}
        onChange={(e) =>
          onSelect(folders.find((f) => f.id === e.target.value) || null)
        }
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select a category</option>
        {folders.map((folder) => (
          <option key={folder.id} value={folder.id}>
            {folder.name}
          </option>
        ))}
      </select>

      <AddFolderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddFolder={onAddFolder}
      />
    </div>
  );
}
