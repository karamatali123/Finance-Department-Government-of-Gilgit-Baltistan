"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { ADMIN_EMAILS } from "../../constants";

const VerifyRequest = () => {
  const router = useRouter();

  const { data: session } = useSession();
  console.log(session, "dataaa");

  useEffect(() => {
    if (session?.user) {
      const route =
        ADMIN_EMAILS.includes(session.user.email) ? "/admin/dashboard" : "/jobs";
      router.push(route);
    }
  }, [session]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg text-center space-y-8">
        {/* Purple Email Icon */}
        <div className="mx-auto w-24 h-24 bg-primary rounded-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900">
          Verify your email address
        </h1>

        {/* Message */}
        <div className="space-y-4">
          <p className="text-lg text-gray-600">
            We have sent a verification link to your email address.
          </p>
          <p className="text-lg text-gray-600">
            Click on the link to complete the verification process.
          </p>
          <p className="text-lg text-gray-600">
            You might need to check your spam folder.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            href="/"
            className="mt-4 w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
          >
            Return to Site
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-gray-500 pt-8">
          You can reach us at if you have any questions.{" "}
          <a href="mailto:admin@gbfinance.gov.pk" className="text-primary">
            admin@gbfinance.gov.pk
          </a>
        </p>
      </div>
    </div>
  );
};

export default VerifyRequest;
