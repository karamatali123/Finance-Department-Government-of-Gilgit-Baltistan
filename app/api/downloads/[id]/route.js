import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { unlink } from "fs/promises";
import path from "path";
import { ADMIN_EMAIL } from "../../../constants";

const prisma = new PrismaClient();

export async function DELETE(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { error: "Download ID is required" },
        { status: 400 }
      );
    }

    // Get file info before deleting
    const download = await prisma.download.findUnique({
      where: { id },
    });

    if (!download) {
      return NextResponse.json(
        { error: "Download not found" },
        { status: 404 }
      );
    }

    // Delete file from filesystem
    const filePath = path.join(process.cwd(), "public", download.filePath);
    try {
      await unlink(filePath);
    } catch (error) {
      console.error("Error deleting file:", error);
      // Continue with database deletion even if file deletion fails
    }

    // Delete from database
    await prisma.download.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting download:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
