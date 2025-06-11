import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { ADMIN_EMAIL } from "../../../constants";

const prisma = new PrismaClient();

// GET /api/downloads/categories - Get all categories
export async function GET() {
  try {
    console.log(prisma, "prisma");

    const session = await getServerSession(authOptions);
    if (!session || session.user.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const categories = await prisma.downloadCategory.findMany({
      orderBy: { name: "asc" },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST /api/downloads/categories - Create a new category
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name } = await request.json();
    if (!name?.trim()) {
      return NextResponse.json(
        { error: "Category name is required" },
        { status: 400 }
      );
    }

    const category = await prisma.downloadCategory.create({
      data: { name: name.trim() },
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
