const WorkExperience = ({
  handleChange,
  values,
  handleAddWorkExperience,
  handleDeleteWorkExperience,
}) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 my-4">Work Experience</h3>
      {values.workExperience.map((workExperience, index) => (
        <div className="my-4 flex flex-col gap-2">
          <div>
            <div className="flex items-center justify-between gap-2">
              <label
                htmlFor="degree"
                className="block text-sm font-medium text-gray-700"
              >
                Job Title
              </label>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => handleDeleteWorkExperience(index)}
                  className="mt-1 block w-fit rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  Delete
                </button>
              )}
            </div>
            <input
              type="text"
              id="jobTitle"
              name={`workExperience[${index}].jobTitle`}
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
              name={`workExperience[${index}].organization`}
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
              name={`workExperience[${index}].fromDate`}
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
              name={`workExperience[${index}].toDate`}
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
              Duration
            </label>
            <input
              type="text"
              id="duration"
              name={`workExperience[${index}].duration`}
              value={workExperience.duration}
              placeholder="eg: 1 year"
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
              name={`workExperience[${index}].responsibilities`}
              value={workExperience.responsibilities}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
        onClick={handleAddWorkExperience}
      >
        Add Work Experience
      </button>
    </div>
  );
};

export default WorkExperience;
