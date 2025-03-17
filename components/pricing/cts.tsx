"use client"

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

function Cta() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div 
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-24 bg-gradient-to-r from-[#0F766E] to-[#0e5954] text-white rounded-2xl p-12 text-center max-w-7xl mx-auto mb-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -ml-32 -mb-32"></div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold mb-6 relative z-10"
      >
        Not sure which plan is right for you?
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto relative z-10"
      >
        Our team of experts can help you choose the perfect solution for your business needs and budget.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/contact"
          className="px-8 py-3 bg-white text-[#0F766E] rounded-md hover:bg-gray-100 transition-colors"
        >
          Schedule a Demo
        </Link>
        <Link
          to="/contact"
          className="px-8 py-3 border border-white text-white rounded-md hover:bg-white hover:text-[#0F766E] transition-colors"
        >
          Talk to Sales
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Cta;
