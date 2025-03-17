"use client"
import { Check, Phone, ChartLine, ChartBarBig, Factory } from "lucide-react";

interface TimelineItem {
  title: string;
  icon: React.ReactNode;
  problem: string;
  solution: string[];
}

const timelineData: TimelineItem[] = [
  {
    title: "AcmeTech struggles with",
    icon: <Phone className="ml-auto" />,
    problem: "High customer service wait times",
    solution: ["A Customer Service AI Agent handles FAQs, reducing response time by 80%."]
  },
  {
    title: "AcmeTech struggles with",
    icon: <ChartLine className="ml-auto" />,
    problem: "Sales leads slipping through the cracks",
    solution: ["A Sales AI Agent nurtures leads, sending follow-ups and booking meetings"]
  },
  {
    title: "AcmeTech struggles with",
    icon: <ChartBarBig className="ml-auto" />,
    problem: "Manual data reporting slowing decisions",
    solution: ["A Data AI Agent generates real-time insights for better decision-making."]
  },
  {
    title: "AcmeTech struggles with",
    icon: <Factory className="ml-auto" />,
    problem: "Complex workflows causing inefficiency",
    solution: ["A Process Automation Agent streamlines repetitive tasks, saving hours of manual effort."]
  }
];

const Servicestimeline = () => {
  return (
    <div className="mt-16 md:mt-32 px-4 sm:px-8">
      <div className="text-center mb-12 md:mb-16">
        <h3 className="text-[#0D7377] font-semibold mb-4">Creative Mock Scenario</h3>
        <h2 className="text-2xl sm:text-4xl md:text-5xl text-gray-900 mb-4 sm:mb-6">
          Meet AcmeTech: A Business in Need of AI Agents
        </h2>
        <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Instead of listing benefits traditionally, show a mock company (AcmeTech) facing real business challenges and how AI agents can solve them.
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />
        <div className="space-y-16 md:space-y-24 relative">
          {timelineData.map((item, index) => (
            <div className="relative" key={index}>
              {/* Timeline Indicator */}
              <div className="hidden md:flex items-center justify-center absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 border-[#0F766E] bg-[#FF6B2C] text-white font-bold">
                {index + 1}
              </div>

              {/* Grid Layout - Alternates Left-Right */}
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center text-left">
                <div className="text-right">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 sm:text-lg text-right flex justify-end gap-3">
                    {item.problem}
                    {item.icon}
                  </p>
                </div>

                <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                    <h2 className="text-xl sm:text-2xl text-primary font-bold mb-3">
                      How AI Agents Help AcmeTech:
                    </h2>
                    <ul className="space-y-3 text-sm sm:text-base">
                      {item.solution.map((solution, i) => (
                        <li className="flex items-start" key={i}>
                          <Check className="w-5 h-5 text-[#0F766E] mt-0.5 mr-2 flex-shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicestimeline;
