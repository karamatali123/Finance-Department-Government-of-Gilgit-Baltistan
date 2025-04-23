import { HiTrash } from "react-icons/hi";

const WorkExperienceTable = ({
  workExperience,
  handleDeleteWorkExperience,
}) => {
  console.log(workExperience);
  const headers = [
    "Job Title",
    "Organization",
    "From Date",
    "To Date",
    "Duration",
    "Responsibilities",
    "Actions",
  ];
  return (
    <div className="w-full p-4">
      <h3 className="text-2xl font-bold text-gray-900 my-4">Work Experience</h3>
      <table className="min-w-full  border-blue-500">
        <thead className="border-b border-gray-200 bg-gray-100">
          <tr className=" text-gray-700  text-sm leading-normal border-none">
            {headers.map((header, index) => (
              <th key={index} className="py-5 px-6 text-left border-none">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-[16px] font-light">
          {workExperience.length > 0 ? (
            workExperience.map((item, index) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-5 px-6 text-left ">{item.jobTitle}</td>
                <td className="py-5 px-6 text-left ">{item.organization}</td>
                <td className="py-5 px-6 text-left ">{item.fromDate}</td>
                <td className="py-5 px-6 text-left ">{item.toDate}</td>
                <td className="py-5 px-6 text-left ">{item.duration}</td>
                <td className="py-5 px-6 text-left ">
                  {item.responsibilities}
                </td>
                <td className="py-5 px-6 text-left ">
                  <button
                    type="button"
                    className="text-red-500"
                    onClick={() => handleDeleteWorkExperience(index)}
                  >
                    <HiTrash className="inline-block w-8 h-8" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="text-center">
                No qualifications found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* <TablePagination /> */}
    </div>
  );
};

export default WorkExperienceTable;
