"use client";
import { TextGenerateEffect } from "../../animations/textGenreate";
import { motion } from "framer-motion";

const OverviewSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-8 bg-white px-[20px]"
    >
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-5"
        >
          <TextGenerateEffect
            className="text-lg text-justify text-gray-900 font-normal"
            speed={2}
            words={`Provincial financial management involves overseeing and controlling
            public finances, preparing the annual budget, and addressing
            additional financial needs through supplementary estimates and
            excess grant demands. It also includes managing cash flow and
            financial strategies under ways and means to ensure fiscal
            discipline and support sustainable economic development`}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OverviewSection;
