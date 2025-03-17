"use client"
import { motion } from "framer-motion"
import Link from 'next/link';
import { Button } from "@/components/ui/button"

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
}

const Cta = () => {
  return (
    <motion.div 
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-16 bg-gradient-to-r from-[#0F766E] to-[#0e5954] text-white rounded-xl p-8 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -ml-32 -mb-32"></div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold mb-4 relative z-10"
      >
        Not Sure Which AI Agent You Need? Let&apos;s Find Out
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-xl mb-6 max-w-2xl mx-auto relative z-10"
      >
        Call for a free Consultation
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10"
      >
        <Link href="/contact">
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-white text-[#0F766E] hover:bg-gray-100"
          >
            Contact Us
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Cta;