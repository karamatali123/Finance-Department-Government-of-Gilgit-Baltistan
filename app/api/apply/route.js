import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { join } from "path";
import { mkdir, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { authOptions } from "../auth/[...nextauth]/options";

const prisma = new PrismaClient();

export async function POST(request) {
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
    const jobId = formData.get("jobId");

    if (!jobId) {
      return NextResponse.json(
        { error: "Job ID is required" },
        { status: 400 }
      );
    }

    // Get personal information with error handling
    let personalInfo, qualifications, certifications, workExperience;
    try {
      personalInfo = JSON.parse(formData.get("personalInformation"));
      qualifications = formData.get("qualifications");
      certifications = formData.get("certifications");
      workExperience = formData.get("workExperience");
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

    // Validate job exists
    const job = await prisma.job.findUnique({
      where: {
        id: jobId,
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
          email: session.user.email,
          phone: personalInfo.phone || "",
          cnic: personalInfo.cnic,
          photoPath: join("uploads", photoFilename),

          // Convert arrays to JSON strings
          qualifications: qualifications,
          certifications: certifications,
          workExperience: workExperience,

          // Job relation
          jobId: jobId,
        },
      });

      return NextResponse.json({
        success: true,
        applicationId: application.id,
      });
    } catch (error) {
      console.error("Error saving to database:", error);
      console.error("Detailed error message:", error.message);
      console.error("Error stack:", error.stack);
      console.error("Data being sent:", {
        fullName: personalInfo.fullName,
        fatherName: personalInfo.fatherName,
        qualifications,
        certifications,
        workExperience,
      });

      return NextResponse.json(
        {
          error: "Error saving application to database",
          details: error.message || "Unknown error",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      {
        error: "Error submitting application",
        details: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Job application API endpoint" },
    { status: 200 }
  );
}
