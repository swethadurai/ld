"use client"
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from 'next/image';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center h-full flex flex-col rounded-2xl sm:p-4 p-0 hover:shadow-2xl shadow-xl transition-shadow duration-300 bg-gradient-to-bl from-[#FE701A]/10 to-transparent border border-gray-200"
  >
    <div className="text-[#ff4d00] mb-6 mx-auto mt-6">
      {icon}
    </div>
    <h3 className="text-md sm:text-xl font-semibold text-gray-500 sm:mb-4">{title}</h3>
    <p className="text-gray-500 sm:mb-6 leading-relaxed text-md sm:text-md flex-grow">{description}</p>
    <div className="text-[#0D7377] mt-auto pb-6">
      <ArrowRight className="w-5 h-5 m-auto" />
    </div>
  </motion.div>
);

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Image 
              src="/images/Group 24.png" 
              alt="Market Growth" 
              width={64} 
              height={56} 
              className="sm:w-16 sm:h-14 m-auto w-10 h-8"
            />,
      title: "Market Growth",
      description: "AI agents are projected to add $15.7 trillion to the global economy by 2030, driving efficiency and innovation.",
    },
    {
      icon: <Image 
              src="/images/Group 25.png" 
              alt="Industry Adoption" 
              width={64} 
              height={64} 
              className="sm:w-16 sm:h-16 m-auto w-10 h-10"
            />,
      title: "Industry Adoption",
      description: "By 2025, over 75% of businesses will use AI agents to improve decision-making and streamline operations.",
    },
    {
      icon: <Image 
              src="/images/Group 26.png" 
              alt="Productivity & Efficiency" 
              width={64} 
              height={56} 
              className="sm:w-16 sm:h-14 m-auto w-10 h-8"
            />,
      title: "Productivity & Efficiency",
      description: "Companies leveraging AI-driven automation see up to 85% improvement in efficiency and 38% higher profitability",
    },
    {
      icon: <Image 
              src="/images/Group 27.png" 
              alt="Customer Experience Revolution" 
              width={64} 
              height={64} 
              className="sm:w-16 sm:h-16 m-auto w-10 h-10"
            />,
      title: "Customer Experience Revolution",
      description: "By 2025, 80% of customer interactions in healthcare, retail, and finance will be managed by AI agents, reducing wait times and improving satisfaction.",
    },
  ];

  return (
    <section className="py-20 px-1 sm:px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-[#0D7377] font-semibold mb-4">AI Agents</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mb-6">
            The Future of Work
          </h2>
          <p className="text-md sm:text-xl text-gray-600 max-w-3xl">
            Why settle for basic automation when AI agents can think, learn, and enhance operations across industries?
          </p>
        </motion.div>

        <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
