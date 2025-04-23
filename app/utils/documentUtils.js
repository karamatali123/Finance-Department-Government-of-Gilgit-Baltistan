/**
 * Processes a document (image or PDF) for upload
 * @param {File|string} document - The document input (either File object or base64 string)
 * @param {string} fileName - Name for the processed file
 * @returns {Promise<File>} - Returns a File object
 * @throws {Error} - Throws error if document is missing or invalid
 * im
 */
// import { writeFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export const processDocumentForUpload = async (
  document,
  fileName = "document"
) => {
  if (!document) {
    throw new Error("Please select a document");
  }

  // If already a File object, validate type and return
  if (document instanceof File) {
    if (!isValidFileType(document.type)) {
      throw new Error("Document must be an image or PDF");
    }
    return document;
  }

  // Handle base64 string
  if (
    typeof document === "string" &&
    (document.startsWith("data:image") ||
      document.startsWith("data:application/pdf"))
  ) {
    try {
      const response = await fetch(document);
      const blob = await response.blob();
      const fileExtension = getFileExtension(blob.type);
      return new File([blob], `${fileName}.${fileExtension}`, {
        type: blob.type,
      });
    } catch (error) {
      throw new Error("Failed to process document: " + error.message);
    }
  }

  throw new Error("Invalid document format");
};

/**
 * Validates if the file type is allowed (image or PDF)
 * @param {string} fileType - MIME type of the file
 * @returns {boolean}
 */
const isValidFileType = (fileType) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "application/pdf",
  ];
  return allowedTypes.includes(fileType);
};

/**
 * Gets file extension based on MIME type
 * @param {string} mimeType - MIME type of the file
 * @returns {string} - File extension without dot
 */
const getFileExtension = (mimeType) => {
  switch (mimeType) {
    case "image/jpeg":
      return "jpg";
    case "image/png":
      return "png";
    case "image/gif":
      return "gif";
    case "application/pdf":
      return "pdf";
    default:
      return "unknown";
  }
};

export const uploadDocument = async (uploadDir, fileName, file, writeFile) => {
  try {
    // Save photo file
    await writeFile(
      join(uploadDir, fileName),
      Buffer.from(await file.arrayBuffer())
    );
  } catch (error) {
    console.error("Error saving photo:", error);
    return NextResponse.json({ error: "Error saving photo" }, { status: 500 });
  }
};
