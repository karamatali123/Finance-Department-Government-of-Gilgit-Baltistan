"use client";
import React from "react";
import cardImage1 from "../../../../public/images/admin.webp";
import cardImage2 from "../../../../public/images/budget.jpeg";
import cardImage3 from "../../../../public/images/development.jpg";
import cardImage4 from "../../../../public/images/regulation.png";
import cardImage5 from "../../../../public/images/audit.jpg";
import cardImage6 from "../../../../public/images/sap.jpg";
import RecoursesCard from "./RecoursesCard";
import { motion } from "framer-motion";

const resourceData = [
  {
    title: "Admin section",
    description:
      "The Admin Section manages the day-to-day operations of the Finance Department, handling internal coordination, documentation, correspondence, and administrative support. It oversees office management, maintains departmental records, facilitates interdepartmental communication, and ensures smooth workflow across all wings of the department.",
    imageUrl: cardImage1.src,
  },
  {
    title: "Budget section",
    description:
      "The Budget Section is responsible for preparing, managing, and monitoring the government's annual budget. This includes budget formulation, allocation of resources, expenditure tracking, financial planning, and providing budgetary guidelines to various departments. The section also analyzes budget proposals, ensures fiscal discipline, and maintains transparency in budget execution.",
    imageUrl: cardImage2.src,
  },

  {
    title: "Development section",
    description:
      "The Development Section oversees and coordinates public development projects and initiatives. It evaluates project proposals, monitors implementation progress, ensures efficient resource utilization, and maintains alignment with government development goals. The section also conducts feasibility studies, prepares development schemes, and coordinates with various stakeholders to facilitate successful project execution and delivery.",
    imageUrl: cardImage3.src,
  },
  {
    title: "Regulation section",
    description:
      "The Regulation Section establishes and enforces financial policies, rules, and regulatory frameworks to ensure compliance and sound financial management across government departments. It develops standard operating procedures, reviews financial regulations, provides regulatory guidance, and monitors adherence to financial laws and policies. The section also coordinates with other regulatory bodies and recommends policy improvements to strengthen financial governance.",
    imageUrl: cardImage4.src,
  },
  {
    title: "Audit and accounts section",
    description:
      "The Audit and Accounts Section is responsible for conducting financial audits of the department's financial transactions and records. It ensures compliance with financial regulations, verifies the accuracy of financial statements, and provides recommendations for improving financial management and control. The section also reviews internal controls, identifies areas for improvement, and reports on financial performance and compliance.",
    imageUrl: cardImage5.src,
  },
  {
    title: "SAP cell",
    description:
      "The SAP Cell is responsible for implementing and managing the government's financial management system, including the SAP ERP system. It ensures the effective use of technology for financial reporting, budgeting, and resource allocation. The cell also provides training and support to departmental staff on SAP functionalities, monitors system performance, and develops and implements improvements to enhance financial efficiency and transparency.",
    imageUrl: cardImage6.src,
  },
];

const BudgetRecourses = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-9"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {resourceData.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <RecoursesCard
              title={resource.title}
              description={resource.description}
              imageUrl={resource.imageUrl}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BudgetRecourses;
