"use client";
import React, { useState } from "react";
import { HiDownload } from "react-icons/hi"; // Using a download icon from react-icons
import TablePagination from "../Common/TablePagination";

const headers = ["SL No", "Article Title", "Views", "Download"];

const NotificationsTable = ({ data = [] }) => {
  return (
    <div className="w-full p-4">
      <table className="min-w-full  border-blue-500">
        <thead>
          <tr className=" text-gray-700  text-sm leading-normal border-none">
            {headers.map((header, index) => (
              <th key={index} className="py-5 px-6 text-left border-none">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-[16px] font-light">
          {data.map((item, index) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-5 px-6 text-left whitespace-nowrap ">
                {String(index + 1).padStart(2, "0")}.
              </td>
              <td className="py-5 px-6 text-left ">{item.title}</td>
              <td className="py-5 px-6 text-left ">{item.views}</td>
              <td className="py-5 px-6 text-center ">
                <DownloadButton fileUrl={item.url} fileName={item.fileName} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <TablePagination />
    </div>
  );
};

export default NotificationsTable;

export const DownloadButton = ({ fileUrl, fileName }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async (fileUrl, fileName) => {
    if (!fileUrl) {
      alert("No file available to download");
      return;
    }

    try {
      setDownloading(true);
      // Add https: if not present in the URL
      const fullUrl = fileUrl.startsWith("//") ? `https:${fileUrl}` : fileUrl;

      // Fetch the file
      const response = await fetch(fullUrl);
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const blobUrl = window.URL.createObjectURL(blob);

      // Force download by creating a temporary link
      const link = document.createElement("a");
      link.style.display = "none";
      link.href = blobUrl;
      // Ensure we have a filename
      link.download = fileName || "download";

      // Append to document, click, and cleanup
      document.body.appendChild(link);
      link.click();

      // Cleanup
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      }, 100);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download file");
    } finally {
      setDownloading(false);
    }
  };
  return (
    <button
      onClick={() => handleDownload(fileUrl, fileName)}
      disabled={downloading}
      className="text-green-500"
    >
      {downloading ? (
        "Downloading..."
      ) : (
        <HiDownload className="inline-block w-6 h-6 " />
      )}
    </button>
  );
};
