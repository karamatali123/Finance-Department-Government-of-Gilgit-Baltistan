import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { unlink } from "fs/promises";
import path from "path";
import { ADMIN_EMAILS } from "../../../../constants";
import { rm } from "fs/promises";

const prisma = new PrismaClient();

// DELETE /api/budgets/documents/[id] - Delete a document
export async function DELETE(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !ADMIN_EMAILS.includes(session.user.email)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { error: "Document ID is required" },
        { status: 400 }
      );
    }

    // Get the document to find its file path
    const document = await prisma.budgetDocument.findUnique({
      where: { id },
    });

    if (!document) {
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      );
    }

    // Delete file from filesystem
    const filePath = path.join(
      process.cwd(),
      "uploads",
      document.filePath.replace("/api/uploads/", "")
    );
    try {
      await rm(filePath, { recursive: true, force: true });
    } catch (error) {
      console.error("Error deleting file:", error);
      // Continue with database deletion even if file deletion fails
    }

    // Delete the document from the database
    await prisma.budgetDocument.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting budget document:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
