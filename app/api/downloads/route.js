import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { ADMIN_EMAIL } from "../../constants";

// GET /api/downloads - Get all downloads with optional category filter
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");

    // Get all categories first
    const categories = await prisma.downloadCategory.findMany({
      orderBy: { name: "asc" },
    });

    // Get downloads for each category
    const downloadsByCategory = await Promise.all(
      categories.map(async (category) => {
        const downloads = await prisma.download.findMany({
          where: categoryId ? { categoryId } : { categoryId: category.id },
          orderBy: { createdAt: "desc" },
          select: {
            id: true,
            title: true,
            description: true,
            fileName: true,
            filePath: true,
            fileSize: true,
            fileType: true,
            createdAt: true,
            updatedAt: true,
          },
        });

        return {
          categoryName: category.name,
          categoryId: category.id,
          documents: downloads,
        };
      })
    );

    // If a specific category is requested, filter the results
    const filteredResults = categoryId
      ? downloadsByCategory.filter((cat) => cat.categoryId === categoryId)
      : downloadsByCategory;

    return NextResponse.json(filteredResults);
  } catch (error) {
    console.error("Error fetching downloads:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST /api/downloads - Upload a new file
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const formData = await request.formData();
    const file = formData.get("file");
    const title = formData.get("title");
    const description = formData.get("description");
    const categoryId = formData.get("categoryId");

    if (!file || !title) {
      return NextResponse.json(
        { error: "File and title are required" },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [".pdf", ".doc", ".docx"];
    const fileType = path.extname(file.name).toLowerCase();
    if (!allowedTypes.includes(fileType)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    // Generate unique filename
    const uniqueId = uuidv4();
    const fileName = `${uniqueId}${fileType}`;
    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      "downloads"
    );
    const filePath = path.join(uploadDir, fileName);

    // Convert file to buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // Create download record
    const download = await prisma.download.create({
      data: {
        title: title.trim(),
        description: description?.trim(),
        fileName: file.name,
        filePath: `/uploads/downloads/${fileName}`,
        fileSize: buffer.length,
        fileType: fileType,
        categoryId: categoryId || null,
        createdBy: user.id,
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json(download);
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
