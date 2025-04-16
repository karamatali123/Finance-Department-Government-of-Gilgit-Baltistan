"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const DUMMY_JOBS = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "IT Department",
    location: "Gilgit",
    type: "Full-time",
    salary: "Rs. 150,000 - 200,000",
    postedDate: "2024-03-20",
    deadline: "2024-04-20",
    description:
      "We are looking for an experienced software engineer to join our team...",
    requirements:
      "5+ years of experience in web development, Bachelor's degree in Computer Science",
  },
  {
    id: 2,
    title: "Finance Manager",
    department: "Finance Department",
    location: "Skardu",
    type: "Full-time",
    salary: "Rs. 120,000 - 180,000",
    postedDate: "2024-03-19",
    deadline: "2024-04-15",
    description:
      "Seeking a qualified finance manager to oversee financial operations...",
    requirements:
      "MBA in Finance, 4+ years of experience in financial management",
  },
  {
    id: 3,
    title: "Administrative Assistant",
    department: "Administration",
    location: "Hunza",
    type: "Part-time",
    salary: "Rs. 50,000 - 70,000",
    postedDate: "2024-03-18",
    deadline: "2024-04-10",
    description:
      "Looking for an organized and efficient administrative assistant...",
    requirements: "Bachelor's degree, 2+ years of administrative experience",
  },
];

const JobsList = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleApply = (jobId) => {
    if (session) {
      router.push(`/jobs`);
    } else {
      router.push("/auth/signin");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Available Positions</h2>
      <div className="grid gap-6">
        {DUMMY_JOBS.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:border-primary transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {job.title}
                </h3>
                <p className="text-gray-600">{job.department}</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {job.type}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-600">
                  <span className="font-medium">Location:</span> {job.location}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Salary:</span> {job.salary}
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-medium">Posted:</span>{" "}
                  {new Date(job.postedDate).toLocaleDateString()}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Deadline:</span>{" "}
                  {new Date(job.deadline).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">{job.description}</p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">
                <span className="font-medium">Requirements:</span>{" "}
                {job.requirements}
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => handleApply(job.id)}
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {session ? "Apply Now" : "Sign in to Apply"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsList;
