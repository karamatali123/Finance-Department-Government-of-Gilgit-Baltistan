import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import prisma from "../../../../lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { ADMIN_EMAIL } from "../../../constants";

// GET /api/budgets/documents
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const folderId = searchParams.get("folderId");

    const documents = await prisma.budgetDocument.findMany({
      where: {},
      include: {
        folder: {
          include: {
            parent: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      documents.map((doc) => ({
        id: doc.id,
        title: doc.title,
        description: doc.description,
        fileName: doc.fileName,
        filePath: doc.filePath,
        fileSize: doc.fileSize,
        fileType: doc.fileType,
        folderId: doc.folderId,
        folder: doc.folder
          ? {
              id: doc.folder.id,
              name: doc.folder.name,
              parentId: doc.folder.parentId,
              parent: doc.folder.parent
                ? {
                    id: doc.folder.parent.id,
                    name: doc.folder.parent.name,
                  }
                : null,
            }
          : null,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
        createdBy: doc.createdBy,
      }))
    );
  } catch (error) {
    console.error("Error fetching budget documents:", error);
    return NextResponse.json(
      { error: "Failed to fetch documents" },
      { status: 500 }
    );
  }
}

// POST /api/budgets/documents
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log(session, "session 123");

    const formData = await request.formData();
    const file = formData.get("file");
    const title = formData.get("title");
    const description = formData.get("description");
    const folderId = formData.get("folderId");

    if (!file || !title) {
      return NextResponse.json(
        { error: "File and title are required" },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        {
          error: "Only PDF and image files (JPEG, PNG, GIF, WEBP) are allowed",
        },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create uploads directory if it doesn't exist
    const uploadDir = join(process.cwd(), "public", "uploads", "budgets");
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (err) {
      if (err.code !== "EEXIST") {
        throw err;
      }
    }

    // Write the file
    const filePath = join(uploadDir, file.name);
    await writeFile(filePath, buffer);

    // Get user from database to ensure we have a valid ID
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const document = await prisma.budgetDocument.create({
      data: {
        title,
        description,
        fileName: file.name,
        filePath: `/uploads/budgets/${file.name}`,
        fileSize: buffer.length,
        fileType: file.type,
        folderId: folderId || null,
        createdBy: user.email,
      },
      include: {
        folder: true,
      },
    });

    return NextResponse.json(document);
  } catch (error) {
    console.error("Error uploading budget document:", error);
    return NextResponse.json(
      { error: "Failed to upload document" },
      { status: 500 }
    );
  }
}
