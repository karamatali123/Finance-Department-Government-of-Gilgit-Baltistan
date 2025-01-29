"use client";
import SectionHeader from "../../HomePage/SectionHeader";
import { motion } from "framer-motion";

const Functions = () => {
  const financeDepartmentFunctions = [
    "Financial policies, rules",
    "Advice to Provincial Govt on Financial Matters",
    "Budget proposals",
    "Supplementary Grants, Re-appropriation and Releases",
    "Consolidation of Expenditure Statements",
    "Creation & Continuation of Posts",
    "Internal Audit, DAC & PAC",
    "Appropriation Accounts",
    "Revenue Receipts",
    "Management of Treasuries",
    "Representation in Various Forums and Committees",
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 pt-0 px-[20px] bg-white"
    >
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionHeader
            primaryText={"Mandates "}
            secondaryText={"Functions &"}
            containerClass={"text-start mb-0"}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-1"
        >
          <p className="text-lg text-justify text-gray-900">
            The major functions of the department are mentioned below:
          </p>
          <ul className="list-disc pl-8 mt-3 text-start">
            {financeDepartmentFunctions.map((func, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-lg mt-2 text-gray-900"
              >
                {func}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Functions;
