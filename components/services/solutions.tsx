"use client"
import { 
  Smartphone, 
  Landmark, 
  Building, 
  Layers, 
  Code, 
  Heart, 
  Gavel, 
  BookOpen, 
  Megaphone, 
  ShoppingCart, 
  Shield, 
  UserCheck, 
  Briefcase, 
  Building2, 
  Globe, 
  ArrowRight 
} from "lucide-react";
import Link from 'next/link';

interface IndustryItem {
  icon: React.ReactNode;
  description: string;
}

interface IndustryData {
  [key: string]: IndustryItem;
}

const Solution = () => {
  const industryData: IndustryData = {
    "Customer Service": {
        icon: <Smartphone className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Enhances customer interactions through automated responses and support."
    },
    "Sales & Lead Qualificatio": {
        icon: <Landmark className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Identifies potential customers and qualifies leads efficiently."
    },
    "Data Analytics ": {
        icon: <Building className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Processes and analyzes data to uncover valuable business insights."
    },
    "AI Scheduling Assistant": {
        icon: <Layers className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Automates appointment bookings and schedule management."
    },
    "Finance & Accounting": {
        icon: <Code className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Manages financial transactions, reports, and accounting tasks."
    },
    "Healthcare AI Assistant": {
        icon: <Heart className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Supports healthcare professionals with patient data and diagnostics."
    },
    "Legal AI Consultant": {
        icon: <Gavel className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Provides legal research and document automation services."
    },
    "Education & E-Learning": {
        icon: <BookOpen className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Assists in online learning, grading, and student engagement."
    },
    "Marketing & Advertising ": {
        icon: <Megaphone className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Optimizes marketing campaigns and customer targeting."
    },
    "E-Commerce AI Assistant": {
        icon: <ShoppingCart className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Enhances online shopping experiences with personalized recommendations."
    },
    "Cybersecurity": {
        icon: <Shield className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Detects and prevents cyber threats in real-time."
    },
    "Human Resources AI Recruiter": {
        icon: <UserCheck className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Automates candidate screening and recruitment processes."
    },
    "Professional Services": {
        icon: <Briefcase className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Provides AI-driven solutions for various business services."
    },
    "Government": {
        icon: <Building2 className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Enhances public sector efficiency with AI-powered solutions."
    },
    "Global Enterprises": {
        icon: <Globe className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1.5} />,
        description: "Supports large-scale business operations with AI automation."
    },
};


return (
  <div className="mt-32 px-4 sm:px-8">
    <div className="text-center mb-16">
      <h2 className="text-2xl sm:text-4xl md:text-5xl  text-gray-900 mb-6">
        What business challenge are you facing?
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Tailored AI solutions designed for the unique challenges of your industry.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {Object.entries(industryData).map(([industry, { icon, description }], index) => (
        <div
          key={index}
          className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center mb-3 sm:mb-4">
            {icon}
            <h3 className="text-sm sm:text-lg font-semibold ml-2 sm:ml-3">{industry}</h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">{description}</p>
          {/* <Link
            to={`/industries/${industry.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-flex items-center text-primary font-medium text-xs sm:text-sm mt-2"
          >
            Learn more <ArrowRight className="w-4 h-4 ml-1 mt-0.5" />
          </Link> */}
        </div>
      ))}
    </div>
  </div>
);

}

export default Solution;
