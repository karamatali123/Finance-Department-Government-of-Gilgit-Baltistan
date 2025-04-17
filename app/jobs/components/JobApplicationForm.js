"use client";

import { useFormik } from "formik";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import Qualifications from "./Qualifications";
import Certifications from "./Certifications";
import WorkExperience from "./WorkExperience";

const JobApplicationForm = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      personalInformation: {
        fullName: "",
        fatherName: "",
        domicile: "",
        email: "",
        phone: "",
        cnic: "",
        photo: null,
      },
      qualifications: [
        {
          degree: "",
          institution: "",
          yearOfPassing: "",
          marks: "",
        },
      ],
      certifications: [
        {
          certification: "",
          certificationProvider: "",
          certificationDate: "",
          duration: "",
        },
      ],
      workExperience: [
        {
          jobTitle: "",
          organization: "",
          fromDate: "",
          toDate: "",
          duration: "",
          responsibilities: "",
        },
      ],
    },
    onSubmit: async (values) => {
      setError("");
      setSuccess(false);
      setIsSubmitting(true);

      try {
        if (!jobId) {
          throw new Error("No job selected");
        }

        const formData = new FormData();

        // Validate and add photo file
        const photo = values.personalInformation.photo;

        if (!photo) {
          throw new Error("Please select a photo");
        }

        // Handle both File objects and base64 strings
        if (photo instanceof File) {
          formData.append("photo", photo);
        } else if (
          typeof photo === "string" &&
          photo.startsWith("data:image")
        ) {
          // Convert base64 to File object
          const response = await fetch(photo);
          const blob = await response.blob();
          const file = new File([blob], "photo.jpg", { type: "image/jpeg" });
          formData.append("photo", file);
        } else {
          throw new Error("Invalid photo format");
        }

        // Add jobId
        formData.append("jobId", jobId);

        // Create a copy of personalInformation without the photo
        const personalInfoCopy = { ...values.personalInformation };
        delete personalInfoCopy.photo;

        // Add JSON data
        formData.append(
          "personalInformation",
          JSON.stringify(personalInfoCopy)
        );
        formData.append(
          "qualifications",
          JSON.stringify(values.qualifications)
        );
        formData.append(
          "certifications",
          JSON.stringify(values.certifications)
        );
        formData.append(
          "workExperience",
          JSON.stringify(values.workExperience)
        );

        console.log("Submitting form data:", {
          jobId,
          hasPhoto: !!photo,
          personalInfo: personalInfoCopy,
        });

        const response = await fetch("/api/apply", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        console.log("Server response:", data);

        if (!response.ok) {
          throw new Error(
            data.error || data.details || "Application submission failed"
          );
        }

        setSuccess(true);
        formik.resetForm();
      } catch (error) {
        console.error("Error:", error);
        setError(error.message || "Error submitting application");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  console.log(formik.values.personalInformation.photo, "jobId");
  // Handle file input
  const handleFileChange = (event) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      formik.setFieldValue("personalInformation.photo", file);
    }
  };

  console.log(formik.values, "jobId");
  return (
    <form onSubmit={formik.handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded">
          Application submitted successfully!
        </div>
      )}

      <PersonalInformation
        handleChange={formik.handleChange}
        values={formik.values}
        handleFileChange={handleFileChange}
      />
      <Qualifications
        handleChange={formik.handleChange}
        values={formik.values}
        handleAddQualification={() => {
          formik.setFieldValue("qualifications", [
            ...formik.values.qualifications,
            { degree: "", institution: "", yearOfPassing: "", marks: "" },
          ]);
        }}
        handleDeleteQualification={(index) => {
          formik.setFieldValue(
            "qualifications",
            formik.values.qualifications.filter((_, i) => i !== index)
          );
        }}
      />
      <Certifications
        handleChange={formik.handleChange}
        values={formik.values}
        handleAddCertification={() => {
          formik.setFieldValue("certifications", [
            ...formik.values.certifications,
            {
              certification: "",
              certificationProvider: "",
              certificationDate: "",
              duration: "",
            },
          ]);
        }}
        handleDeleteCertification={(index) => {
          formik.setFieldValue(
            "certifications",
            formik.values.certifications.filter((_, i) => i !== index)
          );
        }}
      />
      <WorkExperience
        handleChange={formik.handleChange}
        values={formik.values}
        handleAddWorkExperience={() => {
          formik.setFieldValue("workExperience", [
            ...formik.values.workExperience,
            {
              jobTitle: "",
              organization: "",
              fromDate: "",
              toDate: "",
              duration: "",
              responsibilities: "",
            },
          ]);
        }}
        handleDeleteWorkExperience={(index) => {
          formik.setFieldValue(
            "workExperience",
            formik.values.workExperience.filter((_, i) => i !== index)
          );
        }}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default JobApplicationForm;
