import { HiTrash } from "react-icons/hi";

const QualificationsTable = ({ qualifications, handleDeleteQualification }) => {
  const headers = [
    "Degree",
    "Institution",
    "Year of Passing",
    "Obtained Marks",
    "Actions",
  ];
  return (
    <div className="w-full p-4">
      <h3 className="text-2xl font-bold text-gray-900 my-4">Qualifications</h3>
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
          {qualifications.length > 0 ? (
            qualifications.map((item, index) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-5 px-6 text-left ">{item.degree}</td>
                <td className="py-5 px-6 text-left ">{item.institution}</td>
                <td className="py-5 px-6 text-left ">{item.yearOfPassing}</td>
                <td className="py-5 px-6 text-left ">{item.marks}</td>
                <td className="py-5 px-6 text-left ">
                  <button
                    type="button"
                    className="text-red-500"
                    onClick={() => handleDeleteQualification(index)}
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

export default QualificationsTable;
