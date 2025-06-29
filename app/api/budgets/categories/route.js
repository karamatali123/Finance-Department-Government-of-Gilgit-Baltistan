import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { ADMIN_EMAIL } from "../../../constants";

const prisma = new PrismaClient();

// GET /api/budgets/categories - Get all categories with subcategories
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    // if (!session || session.user.email !== ADMIN_EMAIL) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    const categories = await prisma.budgetCategory.findMany({
      where: {
        parentId: null, // Get only parent categories
      },
      include: {
        subCategories: {
          include: {
            budgets: true, // Include budgets for subcategories
          },
          orderBy: { name: "asc" },
        },
        budgets: true, // Include budgets for parent categories
      },
      orderBy: { name: "asc" },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching budget categories:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST /api/budgets/categories - Create a new category or subcategory
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

    // If parentId is provided, verify it exists
    if (parentId) {
      const parent = await prisma.budgetCategory.findUnique({
        where: { id: parentId },
      });
      if (!parent) {
        return NextResponse.json(
          { error: "Parent category not found" },
          { status: 400 }
        );
      }
    }

    const category = await prisma.budgetCategory.create({
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
    console.error("Error creating budget category:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
