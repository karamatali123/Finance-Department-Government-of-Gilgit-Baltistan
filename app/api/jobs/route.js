import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    // Check if user is authenticated
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();

    // Validate required fields
    const requiredFields = ["title", "location", "type"];
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Create new job posting
    const job = await prisma.job.create({
      data: {
        title: data.title,
        company: data.company,
        location: data.location,
        type: data.type,
        salary: data.salary,
        description: data.description,
        requirements: data.requirements,
        benefits: data.benefits,
        noOfVacancies: Number(data.noOfVacancies),
        lastDate: new Date(data.lastDate),
      },
    });

    return NextResponse.json({ success: true, job });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    // Get search parameters from URL
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const location = searchParams.get("location");

    // Build where clause based on filters
    const where = {
      isActive: true,
      ...(type && { type }),
      ...(location && { location }),
    };

    const jobs = await prisma.job.findMany({
      where,
      orderBy: {
        postedDate: "desc",
      },
      include: {
        _count: {
          select: { applications: true },
        },
      },
    });

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Error fetching jobs" }, { status: 500 });
  }
}
