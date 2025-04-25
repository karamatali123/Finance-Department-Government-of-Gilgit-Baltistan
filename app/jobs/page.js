"use client";
import { ADMIN_EMAIL } from "../constants";
import PageHeader from "../Components/Common/PageHeader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { formatDate } from "../utils/dates";
const JobsList = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isAdmin = session?.user?.email === ADMIN_EMAIL;

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs");
      if (!response.ok) {
        console.log(response);
      }
      const data = await response.json();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = (jobId) => {
    if (session) {
      router.push(`/jobs/apply?jobId=${jobId}`);
    } else {
      router.push("/auth/signin");
    }
  };

  const handlePostNewJob = () => {
    router.push("/jobs/postNewJob");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  console.log(jobs, "jobs");

  return (
    <div>
      <PageHeader bgImg={"bg-jobs"} />
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Available Positions</h2>

          <div className="flex-row  flex gap-2">
            {isAdmin && (
              <button
                onClick={handlePostNewJob}
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Post New Job
              </button>
            )}

            <button
              onClick={() => {
                window.open("https://jobs.gbfinance.gov.pk/", "_blank");
              }}
              className="bg-primary flex items-center flex-row gap-2 text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Apply Now
            </button>
            <button
              onClick={() => {
                window.open("/JobDetails.pdf", "_blank");
              }}
              className="bg-primary flex items-center flex-row gap-2 text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <FaRegEye className="w-5 h-5" /> View requirements
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          {jobs.length > 0 && (
            <>
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title/Position
                    </th>

                    {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th> */}
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Project Pay Scale (PPS)
                    </th>

                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      No of Posts
                    </th>

                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {jobs?.map((job) => (
                    <tr
                      key={job.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {job.title}
                          </div>
                          <div className="text-sm text-gray-500 mt-1 line-clamp-2">
                            {job.description}
                          </div>
                        </div>
                      </td>

                      {/* <td className="px-6 py-4 text-sm text-gray-500">
                        {job.location}
                      </td> */}
                      <td className="px-6 py-4">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {job.type}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-500">
                        {job.noOfVacancies}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {job.lastDate ? formatDate(job.lastDate) : "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {!jobs.length && (
            <div className="text-center py-8 text-gray-500">
              No jobs available at the moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsList;

const JobActions = ({ jobId, isAdmin, session, handleApply }) => {
  return (
    <div>
      {false ? (
        <div className="flex gap-2">
          <button
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
            title="Edit"
          >
            <FiEdit2 className="w-5 h-5" />
          </button>
          <button
            className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
            title="Delete"
          >
            <FiTrash2 className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => handleApply(jobId)}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm"
        >
          {session ? "Apply" : "Sign in"}
        </button>
      )}
    </div>
  );
};
