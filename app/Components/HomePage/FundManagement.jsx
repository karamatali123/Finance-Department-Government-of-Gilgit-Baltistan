"use client";
import budget from "../../../public/images/budget.png";
import image2 from "../../../public/images/finance.png";
import image3 from "../../../public/images/aunnalBudget.png";
import Link from "next/link";
import { motion } from "framer-motion";

const FundManagement = () => {
  const sections = [
    {
      number: "01",
      title: "Budget Resources",
      description:
        "Management of funds, allocation of resources, Scrutiny of demands and preparation financial proposals",
      image: budget.src,
    },
    {
      number: "02",
      title: "Revenue and expenditure",
      description:
        "Enhance revenues and control expenditure through implementation of financial rules.",
      image: image2.src,
    },
    {
      number: "03",
      title: "Admin and SAP Cell",
      description:
        "Comprehensive documents for communication and reflection of revenue and expenditure on various formats under legal obligation of Gilgit Baltistan Order 2018",
      image: image3.src,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="container mx-auto py-12 px-5"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4">
          Sections
        </h2>
      </motion.div>

      {/* Timeline Sections */}
      <div className="relative">
        <div className="relative border-primary border-dashed h-5 w-[50.5%] rounded-br-lg hidden md:block float-end justify-self-end top-[0px] bg-white">
          <div className="w-5 h-5 bg-primary rounded-[50%] absolute top-[-10px] left-[-10px]"></div>
        </div>
        <div className="w-full">
          {sections.map((section, index) => (
            <div
              key={section.number}
              className={` ${
                index % 2 === 0
                  ? "md:border-2 md:rounded-tl-lg"
                  : "md:border-r-2"
              }  py-8 md:px-8 md:border-primary md:border-separate md:rounded-lg mr-[10px]
              ${
                index % 2 === 0
                  ? "md:rounded-tr-none md:rounded-br-none"
                  : "md:rounded-tl-none md:rounded-bl-none"
              }  ${
                index === 0
                  ? " md:border-r-0"
                  : index % 2 === 0
                  ? "md:border-r-0"
                  : "md:border-l-0"
              } md:border-dashed`}
            >
              <Link href={`about/sections`} className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 1.2 }}
                  className={`
                    flex 
                    flex-col 
                    ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} 
                    items-center 
                    justify-start
                    relative
                    gap-4
                    md:gap-8
                  `}
                >
                  {/* Image Section */}
                  <div className={`w-full`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: false }}
                      className="flex justify-self-end relative bg-white"
                    >
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <motion.div
                    className="w-full"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: false }}
                  >
                    <div className="text-7xl font-bold text-white hidden md:block relative">
                      <span className="text-stroke">{section.number}</span>
                    </div>
                    <h3
                      whileHover={{ scale: 1.02 }}
                      className="text-2xl font-semibold text-primary"
                    >
                      {section.title}
                    </h3>
                    <p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 text-lg"
                    >
                      {section.description}
                    </p>
                  </motion.div>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
        <div className="relative border-primary border-dashed h-5 w-[50.5%] float-end rounded-br-lg hidden md:block justify-self-end bottom-[10px] bg-white"></div>
      </div>
    </motion.div>
  );
};

export default FundManagement;
