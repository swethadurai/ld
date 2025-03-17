"use client"
import { motion } from "framer-motion";

interface CoreValue {
  title: string;
  description: string;
}

const coreValues: CoreValue[] = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible with AI technology."
  },
  {
    title: "Reliability",
    description: "Our solutions are built to perform consistently and securely."
  },
  {
    title: "Customer Success",
    description: "Your success is our success. We're committed to delivering results."
  }
];

const Aboutvalue = () => {
  return (
    <div className="bg-gradient-to-br from-[#0F766E] to-[#134E4A] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl md:text-5xl text-center mb-12">
          Our Core Values
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-4 md:pl-8 justify-center items-center">
          {coreValues.map((value, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-6 md:pl-10"
            >
              <motion.div 
                initial={{ height: 0, width: 0 }} 
                whileInView={{ height: "100%", width: "2px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="absolute left-0 top-0 w-[2px] bg-[#FF6B2C]"
              />
              <h3 className="text-2xl font-semibold mt-0">
                {value.title}
              </h3>
              <p className="text-gray-100 text-sm sm:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutvalue;
