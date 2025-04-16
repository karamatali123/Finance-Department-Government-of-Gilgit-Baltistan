import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function JobsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Welcome, {session.user?.name}</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Job Application Form</h2>

        <form className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Education</h3>

            <div>
              <label
                htmlFor="degree"
                className="block text-sm font-medium text-gray-700"
              >
                Highest Degree
              </label>
              <select
                id="degree"
                name="degree"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              >
                <option value="">Select Degree</option>
                <option value="bachelors">Bachelor&apos;s Degree</option>
                <option value="masters">Master&apos;s Degree</option>
                <option value="phd">Ph.D.</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="institution"
                className="block text-sm font-medium text-gray-700"
              >
                Institution
              </label>
              <input
                type="text"
                id="institution"
                name="institution"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Experience</h3>

            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700"
              >
                Years of Experience
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                min="0"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="currentPosition"
                className="block text-sm font-medium text-gray-700"
              >
                Current/Last Position
              </label>
              <input
                type="text"
                id="currentPosition"
                name="currentPosition"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              Resume/CV
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
