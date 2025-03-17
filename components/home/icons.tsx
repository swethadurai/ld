"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const companies = [
  { name: "Grand World Elder Care", logo: "/images/GWEC logo 1.png" },
  { name: "Andrology Center", logo: "/images/Andrology-Center-Logo 1.png" },
  { name: "Northwood", logo: "/images/Nottingham Logo 1.png" },
  { name: "Aviva Quality", logo: "/images/aviva-logo 2.png" },
  { name: "Karmic", logo: "/images/karmic 1.png" },
];

const Icons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 bg-[#F4EEEA]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal text-gray-800 max-w-4xl mb-20" style={{lineHeight:"48px"}}>
          AI agents empower businesses of all sizes, and we&apos;re here to drive this revolution in efficiency.
        </h2>
        
        {/* Desktop View */}
        <div className="hidden sm:flex flex-wrap justify-between items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="w-32 md:w-40 lg:w-48 opacity-50 hover:opacity-75 transition-opacity duration-300 relative h-16 md:h-20 lg:h-24"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
              />
            </div>
          ))}
        </div>
        
        {/* Mobile View - Auto Slider */}
        <div className="sm:hidden flex justify-center items-center overflow-hidden h-24 relative">
          <AnimatePresence>
            <motion.div
              key={companies[currentIndex].name}
              className="relative w-[250px] h-24"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={companies[currentIndex].logo}
                alt={companies[currentIndex].name}
                fill
                className="object-contain"
                sizes="250px"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Icons;
