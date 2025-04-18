const Qualifications = ({
  handleChange,
  values,
  handleAddQualification,
  handleDeleteQualification,
}) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 my-4">Education</h3>
      {values.qualifications.map((qualification, index) => (
        <div className="my-4 flex flex-col gap-2" key={index}>
          <div>
            <div className="flex items-center justify-between gap-2">
              <label
                htmlFor="degree"
                className="block text-sm font-medium text-gray-700"
              >
                Degree
              </label>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => handleDeleteQualification(index)}
                  className="mt-1 block w-fit rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  Delete
                </button>
              )}
            </div>
            <select
              id="degree"
              name={`qualifications[${index}].degree`}
              value={qualification.degree}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
              name={`qualifications[${index}].institution`}
              value={qualification.institution}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label
              htmlFor="institution"
              className="block text-sm font-medium text-gray-700"
            >
              Year of Passing
            </label>
            <input
              type="number"
              id="yearOfPassing"
              name={`qualifications[${index}].yearOfPassing`}
              value={qualification.yearOfPassing}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label
              htmlFor="institution"
              className="block text-sm font-medium text-gray-700"
            >
              Marks Obtained (%)
            </label>
            <input
              type="number"
              id="marks"
              name={`qualifications[${index}].marks`}
              value={qualification.marks}
              max={100}
              min={0}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
        onClick={handleAddQualification}
      >
        Add Qualification
      </button>

      {/* Experience
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
      </div> */}
    </div>
  );
};

export default Qualifications;
