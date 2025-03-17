"use client"
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-br relative overflow-hidden">
      {/* Top left gradient */}
      <div className="absolute -top-0 -left-40 w-80 h-96 bg-gradient-to-br from-primary/10 to-secondary/30 rounded-full blur-3xl" />
      
      {/* Bottom right gradient */}
      <div className="absolute bottom-20 -right-10 w-80 h-80 bg-gradient-to-br from-secondary/30 to-primary/10 rounded-full blur-3xl z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        <div className="text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-normal text-gray-900 tracking-tight mt-4"
          >
            Automate, Scale, and Save Time with 
            <span className="block text-secondary sm:mt-6 mt-2 font-bold">with AI Agents</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-md sm:text-xl text-gray-600"
          >
            AI-powered agents handle tasks, answer queries, and streamline your workflow—so you can focus on what matters. Reduce costs, boost efficiency, and provide seamless 24/7 support, all without extra overhead.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact" className="inline-block">
              <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-primary-hover transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl">
                BOOK A FREE CONSULTATION
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <Image 
              src="/images/Ai 1.png"
              alt="AI Agent Illustration"
              width={1000}
              height={600}
              className="max-w-3xl mx-auto w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
