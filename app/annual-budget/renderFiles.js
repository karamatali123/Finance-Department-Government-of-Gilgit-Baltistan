import { FaDownload } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

export const renderFileTable = (files, showDelete = false, deleteFile) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-400">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              SL No
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {files.map((file, index) => (
            <tr
              key={file.id || index}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
                {String(index + 1).padStart(2, "0")}
              </td>
              <td className="px-6 py-4 text-md text-start text-gray-900">
                {file.title || file.name}
              </td>
              <td className="px-6 py-4 text-md text-gray-500">
                {file.description || "-"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="flex flex-row gap-2 justify-center">
                  <button
                    onClick={() => {
                      const filePath = file.filePath || file.path;
                      if (filePath.startsWith("/")) {
                        window.open(filePath, "_blank");
                      } else {
                        window.open(`/${filePath}`, "_blank");
                      }
                    }}
                    // className="inline-flex items-center px-3 py-2 border border-transparent text-md leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                  >
                    <FaDownload className="w-4 h-4 mr-2 text-primary" />
                    {/* Download */}
                  </button>
                  {showDelete && (
                    <button
                      onClick={() => {
                        deleteFile(file.id);
                      }}
                      // className="inline-flex items-center px-3 py-2 border border-transparent text-md leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                    >
                      <FaTrash className="w-4 h-4 mr-2 text-primary" />
                      {/* Delete */}
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
