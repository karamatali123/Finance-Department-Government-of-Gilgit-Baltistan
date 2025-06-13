import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { ADMIN_EMAIL } from "../../../../constants";
import { rm } from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

// DELETE /api/downloads/categories/[id] - Delete a category
export async function DELETE(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { error: "Category ID is required" },
        { status: 400 }
      );
    }

    // Get all downloads in the category
    const downloads = await prisma.download.findMany({
      where: { categoryId: id },
    });

    // Delete physical files
    for (const download of downloads) {
      const filePath = path.join(process.cwd(), "public", download.filePath);
      try {
        await rm(filePath, { recursive: true, force: true });
      } catch (error) {
        console.error("Error deleting file:", error);
        // Continue with database deletion even if file deletion fails
      }
    }

    // Delete all downloads in the category
    await prisma.download.deleteMany({
      where: { categoryId: id },
    });

    // Delete the category
    await prisma.downloadCategory.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
