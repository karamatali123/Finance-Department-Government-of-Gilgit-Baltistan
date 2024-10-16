import React from "react";
import { HiDownload } from "react-icons/hi"; // Using a download icon from react-icons
import TablePagination from "../Common/TablePagination";

const data = [
  {
    id: 1,
    title: "The future of AI in healthcare: Opportunities and challenges.",
    views: 7,
    publishedDate: "2023-09-10",
    lastDate: "2023-10-12",
  },
  {
    id: 2,
    title:
      "Exploring the depths of the ocean: New discoveries in marine biology.",
    views: 2,
    publishedDate: "2023-08-05",
    lastDate: "2023-08-10",
  },
  {
    id: 3,
    title: "A beginner’s guide to investing in the stock market.",
    views: 5,
    publishedDate: "2023-06-20",
    lastDate: "2023-07-15",
  },
  {
    id: 4,
    title: "How blockchain is reshaping the financial industry.",
    views: 6,
    publishedDate: "2023-05-18",
    lastDate: "2023-06-01",
  },
  {
    id: 5,
    title: "Top 10 travel destinations for 2024: What’s trending?",
    views: 8,
    publishedDate: "2023-07-01",
    lastDate: "2023-07-28",
  },
  {
    id: 6,
    title: "The impact of climate change on global agriculture.",
    views: 9,
    publishedDate: "2023-04-10",
    lastDate: "2023-05-05",
  },
  {
    id: 7,
    title: "Cybersecurity tips for small businesses in 2024.",
    views: 2,
    publishedDate: "2023-09-20",
    lastDate: "2023-10-01",
  },
  {
    id: 8,
    title: "Artificial intelligence and its role in autonomous vehicles.",
    views: 12,
    publishedDate: "2023-03-15",
    lastDate: "2023-03-30",
  },
  {
    id: 9,
    title: "Understanding quantum computing: A beginner’s guide.",
    views: 14,
    publishedDate: "2022-12-05",
    lastDate: "2023-01-15",
  },
  {
    id: 10,
    title: "Healthy eating habits for a better lifestyle.",
    views: 5,
    publishedDate: "2023-07-22",
    lastDate: "2023-08-01",
  },
  {
    id: 11,
    title: "Advancements in renewable energy technologies.",
    views: 16,
    publishedDate: "2022-11-10",
    lastDate: "2023-03-05",
  },
  {
    id: 12,
    title: "How to improve productivity while working from home.",
    views: 17,
    publishedDate: "2023-02-01",
    lastDate: "2023-03-01",
  },
  {
    id: 13,
    title: "The rise of electric vehicles: What the future holds.",
    views: 9,
    publishedDate: "2023-01-12",
    lastDate: "2023-02-10",
  },
  {
    id: 14,
    title: "The importance of mental health awareness in the workplace.",
    views: 7,
    publishedDate: "2023-05-22",
    lastDate: "2023-06-20",
  },
  {
    id: 15,
    title: "What is 5G technology, and how will it change communication?",
    views: 2,
    publishedDate: "2023-08-15",
    lastDate: "2023-08-18",
  },
  {
    id: 16,
    title: "Exploring the benefits of meditation for mental well-being.",
    views: 5,
    publishedDate: "2023-04-05",
    lastDate: "2023-05-02",
  },
  {
    id: 17,
    title: "Data privacy in the digital age: Challenges and solutions.",
    views: 6,
    publishedDate: "2023-06-10",
    lastDate: "2023-06-28",
  },
  {
    id: 18,
    title: "The influence of social media on consumer behavior.",
    views: 8,
    publishedDate: "2023-03-05",
    lastDate: "2023-04-01",
  },
  {
    id: 19,
    title: "How to create a successful content marketing strategy.",
    views: 9,
    publishedDate: "2022-12-10",
    lastDate: "2023-01-25",
  },
  {
    id: 20,
    title: "Sustainable fashion: Reducing waste in the clothing industry.",
    views: 2,
    publishedDate: "2023-05-01",
    lastDate: "2023-05-20",
  },
  {
    id: 21,
    title: "Top programming languages to learn in 2024.",
    views: 12,
    publishedDate: "2023-09-01",
    lastDate: "2023-09-15",
  },
  {
    id: 22,
    title: "The role of big data in modern business decision-making.",
    views: 14,
    publishedDate: "2023-03-22",
    lastDate: "2023-04-15",
  },
  {
    id: 23,
    title: "How to reduce your carbon footprint with everyday actions.",
    views: 5,
    publishedDate: "2023-04-30",
    lastDate: "2023-05-25",
  },
  {
    id: 24,
    title: "Exploring the potential of space tourism.",
    views: 16,
    publishedDate: "2022-10-20",
    lastDate: "2023-01-10",
  },
  {
    id: 25,
    title: "The future of work: Remote, hybrid, or in-office?",
    views: 17,
    publishedDate: "2023-02-15",
    lastDate: "2023-03-15",
  },
  {
    id: 26,
    title: "How AI is revolutionizing personalized learning.",
    views: 9,
    publishedDate: "2022-11-05",
    lastDate: "2023-02-05",
  },
];

const headers = ["SL No", "Article Title", "Views", "Download"];

const NotificationsTable = () => {
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
          {data.map((item, index) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-5 px-6 text-left whitespace-nowrap ">
                {String(index + 1).padStart(2, "0")}.
              </td>
              <td className="py-5 px-6 text-left ">{item.title}</td>
              <td className="py-5 px-6 text-left ">{item.views}</td>
              <td className="py-5 px-6 text-left ">
                <button className="text-green-500">
                  <HiDownload className="inline-block w-6 h-6" />
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

export default NotificationsTable;
