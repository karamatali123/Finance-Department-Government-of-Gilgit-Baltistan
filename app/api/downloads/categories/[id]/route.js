import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { ADMIN_EMAIL } from "../../../../constants";

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

    // Check if category has any downloads
    const downloadsCount = await prisma.download.count({
      where: { categoryId: id },
    });

    if (downloadsCount > 0) {
      return NextResponse.json(
        { error: "Cannot delete category with existing downloads" },
        { status: 400 }
      );
    }

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