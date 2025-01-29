"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Organogram = ({ organogram }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img
        src={organogram.image.src}
        height={960}
        width={1200}
        className="mx-auto"
      />
    </motion.div>
  );
};

export default Organogram;
