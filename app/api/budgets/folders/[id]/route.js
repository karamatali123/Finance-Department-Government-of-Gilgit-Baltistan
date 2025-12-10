import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { ADMIN_EMAILS } from "../../../../constants";
import { rm } from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

async function deleteFolderRecursively(folderId) {
  // Get all subfolders
  const subFolders = await prisma.budgetFolder.findMany({
    where: { parentId: folderId },
  });

  // Recursively delete each subfolder
  for (const subFolder of subFolders) {
    await deleteFolderRecursively(subFolder.id);
  }

  // Delete all documents in this folder
  const documents = await prisma.budgetDocument.findMany({
    where: { folderId },
  });

  // Delete document files from filesystem
  for (const doc of documents) {
    if (doc.filePath) {
      const filePath = path.join(
        process.cwd(),
        "uploads",
        doc.filePath.replace("/api/uploads/", "")
      );
      try {
        await rm(filePath, { recursive: true, force: true });
      } catch (error) {
        console.error("Error deleting document file:", error);
      }
    }
  }

  // Delete all documents from database
  await prisma.budgetDocument.deleteMany({
    where: { folderId },
  });

  // Delete the folder itself
  await prisma.budgetFolder.delete({
    where: { id: folderId },
  });
}

// DELETE /api/budgets/folders/[id] - Delete a folder
export async function DELETE(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !ADMIN_EMAILS.includes(session.user.email)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { error: "Folder ID is required" },
        { status: 400 }
      );
    }

    // Verify folder exists
    const folder = await prisma.budgetFolder.findUnique({
      where: { id },
    });

    if (!folder) {
      return NextResponse.json({ error: "Folder not found" }, { status: 404 });
    }

    await deleteFolderRecursively(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting budget folder:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
