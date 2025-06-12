import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { ADMIN_EMAIL } from "../../../constants";
import prisma from "../../../../lib/prisma";

// GET /api/downloads/categories - Get all categories with subcategories
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const categories = await prisma.downloadCategory.findMany({
      where: {
        parentId: null,
      },
      include: {
        DownloadCategory: {
          include: {
            downloads: true,
          },
        },
        downloads: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    // Sort subcategories after fetching
    const sortedCategories = categories.map((category) => ({
      ...category,
      DownloadCategory: category.DownloadCategory.sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
    }));

    return NextResponse.json(
      sortedCategories.map((category) => ({
        id: category.id,
        name: category.name,
        parentId: category.parentId,
        downloads: category.downloads,
        subCategories: category.DownloadCategory.map((subCategory) => ({
          id: subCategory.id,
          name: subCategory.name,
          parentId: subCategory.parentId,
          downloads: subCategory.downloads,
        })),
      }))
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST /api/downloads/categories - Create a new category or subcategory
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name, parentId } = await request.json();
    if (!name?.trim()) {
      return NextResponse.json(
        { error: "Category name is required" },
        { status: 400 }
      );
    }
    console.log(parentId, "parentId 456");
    // If parentId is provided, verify it exists
    if (parentId) {
      const parent = await prisma.downloadCategory.findUnique({
        where: { id: parentId },
      });
      if (!parent) {
        return NextResponse.json(
          { error: "Parent category not found" },
          { status: 400 }
        );
      }
    }

    const category = await prisma.downloadCategory.create({
      data: {
        name: name.trim(),
        parentId: parentId || null,
      },
      include: {
        parent: true,
        subCategories: true,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
