import React from "react";
import { HiDocumentAdd, HiDownload } from "react-icons/hi"; // Using a download icon from react-icons
import TablePagination from "../Common/TablePagination";

const jobs = [
  {
    id: 1,
    title: "Software Engineer at Tech Innovators.",
    applications: 50,
    postedDate: "2023-09-10",
    closingDate: "2023-10-12",
  },
  {
    id: 2,
    title: "Marine Biologist at Ocean Research Institute.",
    applications: 20,
    postedDate: "2023-08-05",
    closingDate: "2023-08-10",
  },
  {
    id: 3,
    title: "Investment Analyst at Financial Growth.",
    applications: 35,
    postedDate: "2023-06-20",
    closingDate: "2023-07-15",
  },
  {
    id: 4,
    title: "Blockchain Developer at FinTech Solutions.",
    applications: 40,
    postedDate: "2023-05-18",
    closingDate: "2023-06-01",
  },
  {
    id: 5,
    title: "Travel Guide at Global Adventures.",
    applications: 80,
    postedDate: "2023-07-01",
    closingDate: "2023-07-28",
  },
  {
    id: 6,
    title: "Agriculture Scientist at Green Future Farms.",
    applications: 45,
    postedDate: "2023-04-10",
    closingDate: "2023-05-05",
  },
  {
    id: 7,
    title: "Cybersecurity Specialist at SecureTech.",
    applications: 25,
    postedDate: "2023-09-20",
    closingDate: "2023-10-01",
  },
  {
    id: 8,
    title: "Autonomous Vehicle Engineer at DriveAI.",
    applications: 60,
    postedDate: "2023-03-15",
    closingDate: "2023-03-30",
  },
  {
    id: 9,
    title: "Quantum Computing Researcher at Quantum Labs.",
    applications: 70,
    postedDate: "2022-12-05",
    closingDate: "2023-01-15",
  },
  {
    id: 10,
    title: "Nutritionist at Healthy Living Clinic.",
    applications: 30,
    postedDate: "2023-07-22",
    closingDate: "2023-08-01",
  },
  {
    id: 11,
    title: "Renewable Energy Engineer at SolarTech.",
    applications: 85,
    postedDate: "2022-11-10",
    closingDate: "2023-03-05",
  },
  {
    id: 12,
    title: "Productivity Coach at Remote Workers Ltd.",
    applications: 90,
    postedDate: "2023-02-01",
    closingDate: "2023-03-01",
  },
  {
    id: 13,
    title: "Electric Vehicle Engineer at Green Mobility.",
    applications: 40,
    postedDate: "2023-01-12",
    closingDate: "2023-02-10",
  },
  {
    id: 14,
    title: "Mental Health Counselor at Workplace Wellness.",
    applications: 50,
    postedDate: "2023-05-22",
    closingDate: "2023-06-20",
  },
  {
    id: 15,
    title: "5G Network Engineer at FastNet Communications.",
    applications: 20,
    postedDate: "2023-08-15",
    closingDate: "2023-08-18",
  },
  {
    id: 16,
    title: "Meditation Instructor at Peaceful Minds.",
    applications: 35,
    postedDate: "2023-04-05",
    closingDate: "2023-05-02",
  },
  {
    id: 17,
    title: "Data Privacy Specialist at PrivacyGuard.",
    applications: 40,
    postedDate: "2023-06-10",
    closingDate: "2023-06-28",
  },
  {
    id: 18,
    title: "Social Media Analyst at BrandBuzz.",
    applications: 65,
    postedDate: "2023-03-05",
    closingDate: "2023-04-01",
  },
  {
    id: 19,
    title: "Content Marketing Strategist at WebWorks.",
    applications: 50,
    postedDate: "2022-12-10",
    closingDate: "2023-01-25",
  },
  {
    id: 20,
    title: "Sustainability Consultant at EcoSolutions.",
    applications: 30,
    postedDate: "2023-05-01",
    closingDate: "2023-05-20",
  },
  {
    id: 21,
    title: "Software Developer at CodeMasters.",
    applications: 75,
    postedDate: "2023-09-01",
    closingDate: "2023-09-15",
  },
  {
    id: 22,
    title: "Big Data Analyst at DataDynamics.",
    applications: 65,
    postedDate: "2023-03-22",
    closingDate: "2023-04-15",
  },
  {
    id: 23,
    title: "Environmental Engineer at GreenEarth.",
    applications: 35,
    postedDate: "2023-04-30",
    closingDate: "2023-05-25",
  },
  {
    id: 24,
    title: "Space Tourism Consultant at StarTour.",
    applications: 90,
    postedDate: "2022-10-20",
    closingDate: "2023-01-10",
  },
  {
    id: 25,
    title: "Remote Work Specialist at WorkFlex Solutions.",
    applications: 100,
    postedDate: "2023-02-15",
    closingDate: "2023-03-15",
  },
  {
    id: 26,
    title: "AI Learning Engineer at EduTech Innovations.",
    applications: 55,
    postedDate: "2022-11-05",
    closingDate: "2023-02-05",
  },
];

const headers = [
  "SL No",
  "Job Title",
  "Published",
  "Last Date",
  "Applications",
  "Apply",
];

const JobsTable = () => {
  return (
    <div className="w-full p-4">
      <table className="min-w-full  border-blue-500">
        <thead>
          <tr className=" text-gray-700  text-sm leading-normal border-none">
            {headers.map((header, index) => (
              <th key={index} className="py-5 px-6 text-left border-none">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-[16px] font-light">
          {jobs.map((item, index) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-5 px-6 text-left whitespace-nowrap ">
                {String(index + 1).padStart(2, "0")}.
              </td>
              <td className="py-5 px-6 text-left ">{item.title}</td>
              <td className="py-5 px-6 text-left ">{item.postedDate}</td>
              <td className="py-5 px-6 text-left ">{item.closingDate}</td>

              <td className="py-5 px-6 text-left ">{item.applications}</td>
              <td className="py-5 px-6 text-left ">
                <button className="text-green-500">
                  <HiDocumentAdd className="inline-block w-8 h-8" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <TablePagination />
    </div>
  );
};

export default JobsTable;
