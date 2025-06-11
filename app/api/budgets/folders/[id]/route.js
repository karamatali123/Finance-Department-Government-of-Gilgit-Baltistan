import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { ADMIN_EMAIL } from "../../../../constants";

const prisma = new PrismaClient();

// DELETE /api/budgets/folders/[id] - Delete a folder
export async function DELETE(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { error: "Folder ID is required" },
        { status: 400 }
      );
    }

    // Check if folder has any documents
    const documentsCount = await prisma.budgetDocument.count({
      where: { folderId: id },
    });

    if (documentsCount > 0) {
      return NextResponse.json(
        { error: "Cannot delete folder with existing documents" },
        { status: 400 }
      );
    }

    // Check if folder has any subfolders
    const subFoldersCount = await prisma.budgetFolder.count({
      where: { parentId: id },
    });

    if (subFoldersCount > 0) {
      return NextResponse.json(
        { error: "Cannot delete folder with existing subfolders" },
        { status: 400 }
      );
    }

    await prisma.budgetFolder.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting budget folder:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
