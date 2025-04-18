const Certifications = ({
  handleChange,
  values,
  handleAddCertification,
  handleDeleteCertification,
}) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 my-4">Certifications</h3>
      {values.certifications.map((certification, index) => (
        <div className="my-4 flex flex-col gap-2" key={index}>
          <div>
            <div className="flex items-center justify-between gap-2">
              <label
                htmlFor="degree"
                className="block text-sm font-medium text-gray-700"
              >
                Certification
              </label>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => handleDeleteCertification(index)}
                  className="mt-1 block w-fit rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  Delete
                </button>
              )}
            </div>
            <input
              type="text"
              id="certification"
              name={`certifications[${index}].certification`}
              value={certification.certification}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="institution"
              className="block text-sm font-medium text-gray-700"
            >
              Certification Provider
            </label>
            <input
              type="text"
              id="certificationProvider"
              name={`certifications[${index}].certificationProvider`}
              value={certification.certificationProvider}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="institution"
              className="block text-sm font-medium text-gray-700"
            >
              Certification Date
            </label>
            <input
              type="date"
              id="certificationDate"
              name={`certifications[${index}].certificationDate`}
              value={certification.certificationDate}
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
              name={`certifications[${index}].duration`}
              value={certification.duration}
              placeholder="eg: 1 year"
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
        onClick={handleAddCertification}
      >
        Add Certification
      </button>
    </div>
  );
};

export default Certifications;
