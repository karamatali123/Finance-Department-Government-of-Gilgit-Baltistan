import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { join } from "path";
import { mkdir, writeFile } from "fs/promises";
import { existsSync } from "fs";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();

    // Log received data for debugging
    console.log("Received formData keys:", Array.from(formData.keys()));

    // Get files from form data
    const photo = formData.get("photo");
    const jobId = formData.get("jobId") as string;

    if (!jobId) {
      return NextResponse.json(
        { error: "Job ID is required" },
        { status: 400 }
      );
    }

    // Get personal information with error handling
    let personalInfo, qualifications, certifications, workExperience;
    try {
      personalInfo = JSON.parse(formData.get("personalInformation") as string);
      qualifications = formData.get("qualifications") as string;
      certifications = formData.get("certifications") as string;
      workExperience = formData.get("workExperience") as string;
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      return NextResponse.json(
        { error: "Invalid form data format" },
        { status: 400 }
      );
    }

    // Validate required files
    if (!photo || !(photo instanceof File)) {
      return NextResponse.json(
        { error: "Valid photo file is required" },
        { status: 400 }
      );
    }

    // Validate job exists using the string ID
    const job = await prisma.job.findUnique({
      where: {
        id: jobId, // Use the jobId directly as string
      },
    });

    if (!job) {
      return NextResponse.json(
        { error: "Job posting not found" },
        { status: 404 }
      );
    }

    // Create uploads directory if it doesn't exist
    const uploadDir = join(process.cwd(), "uploads");
    if (!existsSync(uploadDir)) {
      try {
        await mkdir(uploadDir, { recursive: true });
      } catch (error) {
        console.error("Error creating upload directory:", error);
        return NextResponse.json(
          { error: "Error creating upload directory" },
          { status: 500 }
        );
      }
    }

    // Generate safe filename
    const fileExtension = photo.name.split(".").pop() || "jpg";
    const photoFilename = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(7)}.${fileExtension}`;

    try {
      // Save photo file
      await writeFile(
        join(uploadDir, photoFilename),
        Buffer.from(await photo.arrayBuffer())
      );
    } catch (error) {
      console.error("Error saving photo:", error);
      return NextResponse.json(
        { error: "Error saving photo" },
        { status: 500 }
      );
    }

    try {
      // Save to database
      const application = await prisma.jobApplication.create({
        data: {
          // Personal Information
          fullName: personalInfo.fullName,
          fatherName: personalInfo.fatherName,
          domicile: personalInfo.domicile,
          email: session.user.email!,
          phone: personalInfo.phone || "",
          cnic: personalInfo.cnic,
          photoPath: join("uploads", photoFilename),

          // Convert arrays to JSON strings
          qualifications: qualifications,
          certifications: certifications,
          workExperience: workExperience,

          // Job relation
          jobId: jobId, // Use the jobId directly as string
        },
      });

      return NextResponse.json({
        success: true,
        applicationId: application.id,
      });
    } catch (error) {
      console.error("Error saving to database:", error);
      if (error instanceof Error) {
        console.error("Detailed error message:", error.message);
        console.error("Error stack:", error.stack);
        console.error("Data being sent:", {
          fullName: personalInfo.fullName,
          fatherName: personalInfo.fatherName,
          qualifications,
          certifications,
          workExperience,
        });
      }
      return NextResponse.json(
        {
          error: "Error saving application to database",
          details: error instanceof Error ? error.message : "Unknown error",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      {
        error: "Error submitting application",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
