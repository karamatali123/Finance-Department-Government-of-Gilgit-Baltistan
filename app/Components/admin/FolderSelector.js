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
  const [selectedParentId, setSelectedParentId] = useState(null);

  const handleAddSubcategory = (parentId) => {
    setSelectedParentId(parentId);
    setIsModalOpen(true);
  };

  const handleAddCategory = () => {
    setSelectedParentId(null);
    setIsModalOpen(true);
  };

  const handleAddFolder = async (name) => {
    await onAddFolder(name, selectedParentId);
    setSelectedParentId(null);
  };

  const renderCategory = (category) => (
    <div key={category.id} className="space-y-2">
      <div className="flex items-center gap-2">
        <select
          value={selectedFolder?.id === category.id ? category.id : ""}
          onChange={(e) => onSelect(category)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">{category.name}</option>
        </select>
        <button
          type="button"
          onClick={() => handleAddSubcategory(category.id)}
          className="text-sm text-blue-600 hover:text-blue-700"
          title="Add subcategory"
        >
          + Sub
        </button>
      </div>
      {category.subCategories?.length > 0 && (
        <div className="ml-6 space-y-2">
          {category.subCategories.map((subCategory) => (
            <div key={subCategory.id} className="flex items-center gap-2">
              <select
                value={
                  selectedFolder?.id === subCategory.id ? subCategory.id : ""
                }
                onChange={(e) => onSelect(subCategory)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">{subCategory.name}</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">Category</label>
        <button
          type="button"
          onClick={handleAddCategory}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          + Add Category
        </button>
      </div>
      <div className="space-y-4">{folders.map(renderCategory)}</div>

      <AddFolderModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedParentId(null);
        }}
        onAddFolder={handleAddFolder}
        parentId={selectedParentId}
      />
    </div>
  );
}
