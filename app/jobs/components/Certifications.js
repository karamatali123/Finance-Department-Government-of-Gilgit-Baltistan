import { useState } from "react";

const Certifications = ({ onClose, handleAddCertification }) => {
  const [certification, setCertification] = useState({
    certification: "",
    certificationProvider: "",
    certificationDate: "",
    duration: "",
  });

  const handleChange = (e) => {
    setCertification({ ...certification, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Qualifications</h2>
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
                Certification
              </label>
            </div>
            <input
              type="text"
              id="certification"
              name={`certification`}
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
              Institution
            </label>
            <input
              type="text"
              id="certificationProvider"
              name={`certificationProvider`}
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
              type="month"
              id="certificationDate"
              name={`certificationDate`}
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
              name={`duration`}
              value={certification.duration}
              placeholder="eg: 1 year"
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <button
          type="button"
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
          onClick={() => handleAddCertification(certification)}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Certifications;
