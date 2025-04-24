"use client";

import { useFormik } from "formik";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import PersonalInformation from "./PersonalInformation";
import Qualifications from "./Qualifications";
import Certifications from "./Certifications";
import WorkExperience from "./WorkExperience";
import QualificationsTable from "./QualificationsTable";
import CertificationsTable from "./CertificationsTable";
import WorkExperienceTable from "./WorkExperienceTable";
import { processDocumentForUpload } from "../../utils/documentUtils";
import { useRouter } from "next/navigation";

const JobApplicationForm = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showQualifications, setShowQualifications] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showWorkExperience, setShowWorkExperience] = useState(false);
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    personalInformation: Yup.object().shape({
      fullName: Yup.string().required("Full Name is required"),
      fatherName: Yup.string().required("Father's Name is required"),
      domicile: Yup.string().required("Domicile is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),

      cnic: Yup.string()
        .matches(
          /^\d{5}-\d{7}-\d{1}$/,
          "Invalid CNIC format (e.g. 12345-1234567-1)"
        )
        .required("CNIC is required"),
      photo: Yup.mixed().required("Photo is required"),
      cv: Yup.mixed().required("CV is required"),
    }),
    qualifications: Yup.array().min(
      1,
      "At least one qualification is required"
    ),
    certifications: Yup.array(),
    workExperience: Yup.array(),
  });

  const formik = useFormik({
    initialValues: {
      personalInformation: {
        fullName: "",
        fatherName: "",
        domicile: "Gilgit",
        email: "",
        phone: "",
        cnic: "",
        photo: null,
        noc: null,
        cv: null,
      },
      qualifications: [],
      certifications: [],
      workExperience: [],
    },
    validationSchema,
    onSubmit: async (values) => {
      setError("");
      setSuccess(false);
      setIsSubmitting(true);

      try {
        if (!jobId) {
          throw new Error("No job selected");
        }

        const formData = new FormData();
        formData.append("jobId", jobId);
        await formatImage(formData);
        await formatNOC(formData);
        await formatCV(formData);

        const personalInfoCopy = { ...values.personalInformation };
        delete personalInfoCopy.photo;
        delete personalInfoCopy.noc;
        delete personalInfoCopy.cv;

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

        const response = await fetch("/api/apply", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

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

  useEffect(() => {
    if (success) {
      formik.resetForm();
      router.push("/jobs/jobsList");
    }
  }, [success]);

  const isApplicationValid = () => {
    return formik.isValid && formik.dirty;
  };

  const formatImage = async (formData) => {
    const photo = formik.values.personalInformation.photo;
    if (!photo) throw new Error("Please select a photo");
    if (photo instanceof File) {
      formData.append("photo", photo);
    } else if (typeof photo === "string" && photo.startsWith("data:image")) {
      const response = await fetch(photo);
      const blob = await response.blob();
      const file = new File([blob], "photo.jpg", { type: "image/jpeg" });
      formData.append("photo", file);
    } else {
      throw new Error("Invalid photo format");
    }
  };

  const formatNOC = async (formData) => {
    try {
      const nocDocument = formik.values.personalInformation.noc;
      const processedNOC = await processDocumentForUpload(nocDocument, "noc");
      formData.append("nocDocument", processedNOC);
    } catch (error) {
      throw new Error("NOC Document Error: " + error.message);
    }
  };

  const formatCV = async (formData) => {
    try {
      const cvDocument = formik.values.personalInformation.cv;
      const processedCV = await processDocumentForUpload(cvDocument, "cv");
      formData.append("cvDocument", processedCV);
    } catch (error) {
      throw new Error("CV Document Error: " + error.message);
    }
  };

  const handleFileChange = (event) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      formik.setFieldValue("personalInformation.photo", file);
    }
  };

  const showQualificationsError = () => {
    console.log(formik.errors, "errors");
    return formik.errors.qualifications && !formik.errors.personalInformation;
  };

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
        errors={formik.errors.personalInformation}
        touched={formik.touched.personalInformation}
        handleBlur={formik.handleBlur}
      />

      <QualificationsTable
        qualifications={formik.values.qualifications}
        handleDeleteQualification={(index) => {
          formik.setFieldValue(
            "qualifications",
            formik.values.qualifications.filter((_, i) => i !== index)
          );
        }}
      />
      {showQualificationsError() && (
        <div className="text-red-500">{formik.errors.qualifications}</div>
      )}

      <button
        type="button"
        onClick={() => setShowQualifications(true)}
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
      >
        Add Qualification
      </button>

      <CertificationsTable
        certifications={formik.values.certifications}
        handleDeleteCertification={(index) => {
          formik.setFieldValue(
            "certifications",
            formik.values.certifications.filter((_, i) => i !== index)
          );
        }}
      />

      <button
        type="button"
        onClick={() => setShowCertifications(true)}
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
      >
        Add Certification
      </button>

      {showQualifications && (
        <Qualifications
          handleChange={formik.handleChange}
          values={formik.values}
          handleAddQualification={(qualification) => {
            formik.setFieldValue("qualifications", [
              ...formik.values.qualifications,
              qualification,
            ]);
            setShowQualifications(false);
          }}
          onClose={() => setShowQualifications(false)}
        />
      )}

      {showCertifications && (
        <Certifications
          onClose={() => setShowCertifications(false)}
          handleChange={formik.handleChange}
          values={formik.values}
          handleAddCertification={(certification) => {
            formik.setFieldValue("certifications", [
              ...formik.values.certifications,
              certification,
            ]);
            setShowCertifications(false);
          }}
        />
      )}

      <WorkExperienceTable
        workExperience={formik.values.workExperience}
        handleDeleteWorkExperience={(index) => {
          formik.setFieldValue(
            "workExperience",
            formik.values.workExperience.filter((_, i) => i !== index)
          );
        }}
      />

      <button
        type="button"
        onClick={() => setShowWorkExperience(true)}
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
      >
        Add Work Experience
      </button>

      {showWorkExperience && (
        <WorkExperience
          values={formik.values}
          handleAddWorkExperience={(workExperience) => {
            formik.setFieldValue("workExperience", [
              ...formik.values.workExperience,
              workExperience,
            ]);
            setShowWorkExperience(false);
          }}
          onClose={() => setShowWorkExperience(false)}
        />
      )}

      <button
        type="submit"
        disabled={isSubmitting || !formik.isValid}
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default JobApplicationForm;
