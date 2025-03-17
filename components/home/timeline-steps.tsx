"use client"
import { motion } from "framer-motion";

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  isLeft?: boolean;
}

const ProcessStep = ({ stepNumber, title, description, isLeft }: ProcessStepProps) => (
  <div className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"} mb-16 w-full`}>
    {/* Timeline Connector */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-300" />
    
    {/* Step Content */}
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`w-[45%] p-2 top-0 -mt-10 ${isLeft ? "text-right" : "text-left"}`}
    >
      <span className="text-[#FE701A] text-xs md:text-sm font-semibold -mt-10">STEP {stepNumber}</span>
      <h3 className="text-lg md:text-2xl font-bold text-teal-600 mb-2">{title}</h3>
      <p className="text-xs md:text-base text-gray-600 mb-7">{description}</p>
    </motion.div>

    {/* Step Indicator */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[#FE701A] -top-8"></div>
  </div>
);

const ProcessSection = () => {
  const steps = [
    {
      title: "Business Needs Assessment",
      description: "Understanding key challenges, workflows, and objectives to define the AI agent's role and functionalities."
    },
    {
      title: "Knowledge & Data Integration",
      description: "Connecting the AI agent to relevant data sources, documents, APIs, and business systems for accurate responses and actions."
    },
    {
      title: "Agent Design & Development",
      description: "Defining the agent's capabilities, conversation flow, and decision-making logic to ensure effective interaction and automation."
    },
    {
      title: "Testing & Fine-Tuning",
      description: "Running simulations and real-world tests to refine responses, accuracy, and overall performance. "
    },
    {
      title: "Deployment & System Integration",
      description: "Seamlessly embedding the AI agent into business tools like CRMs, websites, and communication platforms."
    },
    {
      title: "Monitoring & Continuous Optimisation",
      description: "Tracking usage, gathering feedback, and improving the AI agent's capabilities for better efficiency and user experience."
    },
    {
      title: "Ongoing Updates & Adaptation",
      description: "Regular enhancements, security updates, and feature expansions to keep the AI agent aligned with evolving business needs."
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#F4EEEA]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            How AI Agents Work: A Structured Approach
          </h1>
          <p className="text-md sm:text-xl text-gray-400 mt-10 mb-10">
            A Proven Framework for Transforming Your Business with Custom AI Agent Solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative w-full">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
              isLeft={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
