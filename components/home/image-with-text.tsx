"use client"
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Image from 'next/image';

const AgentServiceSection = () => {
  const benefits = [
    "24/7 Automation – AI agents handle enquiries and tasks round the clock, so your business never stops.",
    "Seamless Integration – Works effortlessly with your current tools and systems, with no disruption.",
    "Increased Efficiency – Automate repetitive work, reduce costs, and free up time for what truly matters.",
  ];

  // const stats = [
  //   {
  //     number: "25k",
  //     label: "SUCCESSFUL DEPLOYMENTS",
  //     description: "Powering businesses worldwide",
  //   },
  //   {
  //     number: "100",
  //     label: "ENTERPRISE CLIENTS",
  //     description: "Trust our solutions",
  //   },
  //   {
  //     number: "50k",
  //     label: "HOURS SAVED",
  //     description: "Through automation",
  //   },
  // ];

  return (
    <div className="mx-auto px-4 md:py-24 bg-[#FAFAFA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto">
        <div className="relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/ai.png"
              alt="AI Agents Illustration"
              width={600}
              height={400}
              className="w-full h-auto max-w-[600px] mx-auto"
              priority
            />
          </motion.div>
        </div>

        <div className="space-y-8 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* <h2 className="text-lg font-semibold text-[#ff4d00] mb-4">
              AGENCY SWARM FRAMEWORK
            </h2> */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6 text-gray-900 pt-3 !leading-[1.2]">
              AI Agents Built for Your Business
            </h2>
            <p className="text-gray-600 text-md sm:text-xl mb-8 leading-relaxed mt-8">
              We create intelligent AI agents tailored to your needs—whether it's handling customer enquiries, automating repetitive tasks, or improving workflow efficiency. Our solutions integrate seamlessly with your existing systems, boosting productivity and cutting operational costs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-6 h-6 border-2 border-emerald-700 rounded-sm flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#0D7377]" strokeWidth={3} />
                </div>
                <span className="text-gray-700 text-md sm:text-xl">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {/* <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-lg font-semibold text-[#ff4d00] mb-4">
            WHY CHOOSE US
          </h2>
          <h3 className="text-4xl font-bold mb-6 text-gray-900">
            Trusted by Leading Enterprises
          </h3>
          <p className="text-gray-600 text-lg">
            We've helped hundreds of businesses achieve their automation goals through our advanced AI agent solutions and dedicated support team.
          </p>
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            // <motion.div
            //   key={index}
            //   initial={{ opacity: 0, y: 20 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
            //   className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            // >
            //   <div className="text-5xl font-bold text-[#ff4d00] mb-3">
            //     {stat.number}<span className="text-3xl">+</span>
            //   </div>
            //   <div className="text-sm font-bold text-gray-800 mb-3 tracking-wider">
            //     {stat.label}
            //   </div>
            //   <p className="text-gray-600">
            //     {stat.description}
            //   </p>
            // </motion.div>
          ))}
        </div> */}
      </motion.div>
    </div>
  );
};

export default AgentServiceSection;
