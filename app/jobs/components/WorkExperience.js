import { useState } from "react";

const WorkExperience = ({ handleAddWorkExperience, onClose }) => {
  const [workExperience, setWorkExperience] = useState({
    jobTitle: "",
    organization: "",
    fromDate: "",
    toDate: "",
    responsibilities: "",
  });
  const handleChange = (e) => {
    setWorkExperience({ ...workExperience, [e.target.name]: e.target.value });
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Work Experience</h2>
          <button
            onClick={onClose}
            type="button"
            className="text-gray-500 hover:text-gray-700"
          >
            <span className="text-2xl">×</span>
          </button>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <div>
            <div className="flex items-center justify-between gap-2">
              <label
                htmlFor="degree"
                className="block text-sm font-medium text-gray-700"
              >
                Job Title
              </label>
            </div>
            <input
              type="text"
              id="jobTitle"
              name={`jobTitle`}
              value={workExperience.jobTitle}
              placeholder="eg: Software Engineer"
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="institution"
              className="block text-sm font-medium text-gray-700"
            >
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name={`organization`}
              value={workExperience.organization}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="institution"
              className="block text-sm font-medium text-gray-700"
            >
              From Date
            </label>
            <input
              type="date"
              id="fromDate"
              name={`fromDate`}
              value={workExperience.fromDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="institution"
              className="block text-sm font-medium text-gray-700"
            >
              To Date
            </label>
            <input
              type="date"
              id="toDate"
              name={`toDate`}
              value={workExperience.toDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="institution"
              className="block text-sm font-medium text-gray-700"
            >
              Responsibilities
            </label>
            <textarea
              id="responsibilities"
              name={`responsibilities`}
              value={workExperience.responsibilities}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="button"
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
          onClick={() => handleAddWorkExperience(workExperience)}
        >
          Add Work Experience
        </button>
      </div>
    </div>
  );
};

export default WorkExperience;
