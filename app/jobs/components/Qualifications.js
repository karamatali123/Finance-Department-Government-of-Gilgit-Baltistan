import { useState, useEffect } from "react";

const Qualifications = ({ handleAddQualification, onClose }) => {
  const [qualification, setQualification] = useState({
    degree: "",
    institution: "",
    yearOfPassing: "",
    marks: "",
    marksType: "percentage",
  });
  const [marksConfig, setMarksConfig] = useState({
    max: 100,
    min: 1,
  });
  const handleChange = (e) => {
    setQualification({ ...qualification, [e.target.name]: e.target.value });
  };

  const isValidMarks = () => {
    if (qualification.marksType === "percentage") {
      return qualification.marks <= 100;
    }
    return qualification.marks <= 4;
  };

  const isFormValid = () => {
    return (
      qualification.degree !== "" &&
      qualification.institution !== "" &&
      qualification.yearOfPassing !== "" &&
      isValidMarks()
    );
  };

  useEffect(() => {
    console.log(qualification.marksType, "qualification");
    if (qualification.marksType === "percentage") {
      setMarksConfig({ max: 100, min: 1 });
    } else {
      setMarksConfig({ max: 4, min: 1 });
    }
  }, [qualification.marksType]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Qualifications</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <span className="text-2xl">×</span>
          </button>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 my-4">Education</h3>
          <div className="my-4 flex flex-col gap-2">
            <div>
              <div className="flex items-center justify-between gap-2">
                <label
                  htmlFor="degree"
                  className="block text-sm font-medium text-gray-700"
                >
                  Degree
                </label>
              </div>
              <select
                id="degree"
                value={qualification.degree}
                name="degree"
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Select Degree</option>
                <option value="Matriculation">Matriculation</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Bachelors">Bachelor&apos;s Degree</option>
                <option value="Masters">Master&apos;s Degree</option>
                <option value="PhD">Ph.D.</option>
                <option value="Other">Other</option>
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
                type="month"
                id="yearOfPassing"
                name="yearOfPassing"
                value={qualification.yearOfPassing}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
            <div>
              <div className="flex items-center justify-between gap-2">
                <label
                  htmlFor="institution"
                  className="block text-sm font-medium text-gray-700"
                >
                  Marks Obtained (%/CGPA)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="markstype"
                    checked={qualification.marksType === "percentage"}
                    value="percentage"
                    onChange={() => {
                      setQualification({
                        ...qualification,
                        marksType: "percentage",
                      });
                    }}
                    className="w-4 h-4"
                  />
                  <span>Percentage</span>
                  <input
                    type="radio"
                    name="markstype"
                    value="CGPA"
                    onChange={() => {
                      setQualification({
                        ...qualification,
                        marksType: "CGPA",
                      });
                    }}
                    className="w-4 h-4"
                  />
                  <span>CGPA</span>
                </div>
              </div>
              <input
                type="number"
                id="marks"
                name="marks"
                value={qualification.marks}
                max={marksConfig.max}
                min={marksConfig.min}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value > marksConfig.max) {
                    e.target.value = marksConfig.max.toString();
                    handleChange(e);
                  } else if (value < marksConfig.min) {
                    e.target.value = marksConfig.min.toString();
                    handleChange(e);
                  }
                  handleChange(e);
                }}
                onKeyDown={(e) => {
                  // Prevent typing of invalid characters
                  if (
                    !/[0-9]|\./g.test(e.key) &&
                    ![
                      "Backspace",
                      "Delete",
                      "ArrowLeft",
                      "ArrowRight",
                      "Tab",
                    ].includes(e.key)
                  ) {
                    e.preventDefault();
                  }
                }}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
          </div>
          {/* ))} */}
        </div>

        <div className="flex justify-end mt-6 gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 "
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => handleAddQualification(qualification)}
            className="px-4 py-2 bg-primary text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isFormValid()}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
