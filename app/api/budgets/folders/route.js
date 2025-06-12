import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import prisma from "../../../../lib/prisma";
import { ADMIN_EMAIL } from "../../../constants";

// GET /api/budgets/folders
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("Fetching budget folders...");
    const folders = await prisma.budgetFolder.findMany({
      where: {
        parentId: null, // Get only parent folders
      },
      include: {
        subFolders: {
          include: {
            documents: true,
          },
          orderBy: { name: "asc" },
        },
        documents: true,
      },
      orderBy: { name: "asc" },
    });

    console.log("Found folders:", folders.length);
    return NextResponse.json(
      folders.map((folder) => ({
        folderName: folder.name,
        folderId: folder.id,
        documents: folder.documents,
        subFolders: folder.subFolders.map((subFolder) => ({
          folderName: subFolder.name,
          folderId: subFolder.id,
          documents: subFolder.documents,
        })),
      }))
    );
  } catch (error) {
    console.error("Error fetching budget folders:", error);
    return NextResponse.json(
      { error: "Failed to fetch budget folders" },
      { status: 500 }
    );
  }
}

// POST /api/budgets/folders
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name, parentId } = await request.json();

    if (!name?.trim()) {
      return NextResponse.json(
        { error: "Folder name is required" },
        { status: 400 }
      );
    }

    // Verify parent folder exists if provided
    if (parentId) {
      const parentFolder = await prisma.budgetFolder.findUnique({
        where: { id: parentId },
      });
      if (!parentFolder) {
        return NextResponse.json(
          { error: "Parent folder not found" },
          { status: 400 }
        );
      }
    }

    const folder = await prisma.budgetFolder.create({
      data: {
        name: name.trim(),
        parentId: parentId || null,
      },
    });

    return NextResponse.json(folder);
  } catch (error) {
    console.error("Error creating budget folder:", error);
    return NextResponse.json(
      { error: "Failed to create folder" },
      { status: 500 }
    );
  }
}
