"use client";
import ContactUs from "./ContactUs";
import Intro from "./Intro";
import SocialLinks from "./SocialLinks";
import RelatedLinks from "./RelatedLinks";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
      viewport={{ once: false }}
    >
      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      />
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="flex flex-col md:flex-row items-start gap-8 md:gap-20 justify-start min-h-[400px] py-8 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <Intro />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <ContactUs />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <RelatedLinks />
          </motion.div>

          {/* <SocialLinks /> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
