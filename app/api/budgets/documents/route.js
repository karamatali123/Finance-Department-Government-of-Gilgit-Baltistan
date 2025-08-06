import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import prisma from "../../../../lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { ADMIN_EMAIL } from "../../../constants";

// Configure API route for larger file uploads
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// GET /api/budgets/documents
export async function GET(request) {
  try {
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
    console.log("Environment:", process.env.NODE_ENV);
    console.log("Database URL exists:", !!process.env.DATABASE_URL);

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

    // Check file size (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File size must be less than 10MB" },
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
    console.log("File size:", file.size, "bytes");

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    console.log("Buffer size:", buffer.length, "bytes");

    // Create uploads directory if it doesn't exist
    const uploadDir = join(process.cwd(), "uploads", "budgets");
    console.log("Upload directory path:", uploadDir);
    try {
      await mkdir(uploadDir, { recursive: true });
      console.log("Upload directory created/verified successfully");
    } catch (err) {
      console.error("Error creating upload directory:", err);
      if (err.code !== "EEXIST") {
        throw err;
      }
    }

    // Write the file
    const filePath = join(uploadDir, file.name);
    console.log("File path:", filePath);
    try {
      await writeFile(filePath, buffer);
      console.log("File written successfully");
    } catch (writeError) {
      console.error("Error writing file:", writeError);
      throw writeError;
    }

    // Get user from database to ensure we have a valid ID
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log("Creating database record...");
    const document = await prisma.budgetDocument.create({
      data: {
        title,
        description,
        fileName: file.name,
        filePath: `/api/uploads/budgets/${file.name}`,
        fileSize: buffer.length,
        fileType: file.type,
        folderId: folderId || null,
        createdBy: user.email,
      },
      include: {
        folder: true,
      },
    });
    console.log("Database record created successfully");

    return NextResponse.json(document);
  } catch (error) {
    console.error("Error uploading budget document:", error);
    console.error("Error details:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: "Failed to upload document", details: error.message },
      { status: 500 }
    );
  }
}
