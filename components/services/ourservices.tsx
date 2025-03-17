"use client"
import { motion } from "framer-motion";
import { Stethoscope,Repeat,Package,Target,Bot, MessageSquare, BarChart, Shield, Zap, Users, Phone, Mail, ShoppingCart, Briefcase, Calendar, FileText, Truck, Cpu, CreditCard, ShieldCheck, Search, Heart, Banknote, Car, Landmark } from "lucide-react";

interface ServiceDescription {
  icon: React.ElementType;
  title: string;
  description: string[];
}

interface ServiceCategory {
  title: string;
  data: ServiceDescription[];
}

const servicesList: ServiceCategory[] = [
  {
    title: "Customer-Facing AI Agents",
    data: [
      {
        icon: Users,
        title: "Customer Service AI Agent",
        description: [
          "Handles FAQs, live chat, and support tickets.",
          "Reduces wait times and improves response efficiency.",
          "Example: AI-powered chatbots in e-commerce answering product queries."
        ],
      },
      {
        icon: Phone,
        title: "AI Call Centre Agent",
        description: [
          "Automates phone-based customer support.",
          "Uses Natural Language Processing (NLP) to resolve issues.",
          "Example: A telecom company using AI for account troubleshooting."
        ],
      },
      {
        icon: MessageSquare,
        title: "Social Media AI Agent",
        description: [
          "Auto-responds to messages and comments.",
          "Manages reputation and customer engagement.",
          "Example: A brand using AI to reply to Twitter (X) DMs instantly."
        ],
      },
      {
        icon: Mail,
        title: "Email Response AI Agent",
        description: [
          "Reads, categorises, and drafts email responses.",
          "Speeds up customer and internal communications.",
          "Example: An insurance company using AI to process claims-related emails."
        ],
      },
      {
        icon: Target,
        title: "Sales & Lead Qualification AI Agent",
        description: [
          "Engages leads, qualifies them based on responses.",
          "Automates follow-ups and schedules meetings.",
          "Example: A real estate company using AI to nurture leads before passing them to agents."
        ],
      },
      {
        icon: ShoppingCart,
        title: "E-commerce Shopping Assistant AI Agent",
        description: [
          "Provides personalised product recommendations.",
          "Guides customers through purchases.",
          "Example: AI suggesting outfits based on past purchases."
        ],
      },
    ],
  },
  {
    title: "Internal Business Operations AI Agents",
    data: [
      {
        icon: BarChart,
        title: "Data Analytics AI Agent",
        description: [
          "Collects, analyses, and visualises business data.",
          "Helps with market trends, forecasting, and decision-making.",
          "Example: AI tracking customer behaviour in an online store."
        ],
      },
      {
        icon: Briefcase,
        title: "HR & Recruitment AI Agent",
        description: [
          "Screens CVs, shortlists candidates, and schedules interviews.",
          "Helps with employee engagement and internal queries.",
          "Example: AI scanning thousands of CVs to find the best hires for a tech startup."
        ],
      },
      {
        icon: Calendar,
        title: "AI Scheduling Assistant",
        description: [
          "Automates appointment booking and calendar management.",
          "Reduces back-and-forth scheduling issues.",
          "Example: AI handling client bookings for a legal consultancy."
        ],
      },
      {
        icon: FileText,
        title: "Contract & Document AI Agent",
        description: [
          "Reads and extracts key details from contracts.",
          "Helps in compliance and legal document automation.",
          "Example: A law firm using AI to summarise contracts in minutes."
        ],
      },
      {
        icon: Package,
        title: "Supply Chain & Logistics AI Agent",
        description: [
          "Predicts demand, manages inventory, and optimises delivery routes.",
          "Reduces waste and improves efficiency.",
          "Example: AI ensuring supermarkets stock the right products based on seasonal demand."
        ],
      },
    ],
  },
  {
    title: "Process Automation AI Agents",
    data: [
      {
        icon: Repeat,
        title: "AI Workflow Automation Agent",
        description: [
          "Automates repetitive business tasks.",
          "Integrates multiple systems for efficiency.",
          "Example: AI handling employee expense approvals automatically."
        ],
      },
      {
        icon: CreditCard,
        title: "AI Finance & Accounting Agent",
        description: [
          "Automates invoice processing and financial reporting.",
          "Detects fraud and anomalies in transactions.",
          "Example: AI reconciling accounts for an accounting firm."
        ],
      },
      {
        icon: Shield,
        title: "Cybersecurity AI Agent",
        description: [
          "Monitors networks for security threats and fraud.",
          "Detects unusual behaviour to prevent cyberattacks.",
          "Example: AI blocking phishing emails in corporate inboxes."
        ],
      },
      {
        icon: Search,
        title: "AI Compliance & Risk Management Agent",
        description: [
          "Ensures businesses meet regulatory requirements.",
          "Detects policy violations before they become an issue.",
          "Example: AI checking GDPR compliance for a tech company."
        ],
      },
    ],
  },
  {
    title: "Industry-Specific AI Agents",
    data: [
      {
        icon: Stethoscope,
        title: "Healthcare AI Agent",
        description: [
          "Automates patient appointment booking and reminders.",
          "Provides preliminary diagnoses based on symptoms.",
          "Example: AI helping hospitals manage patient queries."
        ],
      },
      {
        icon: Landmark,
        title: "Government & Public Services AI Agent",
        description: [
          "Automates citizen queries and service requests.",
          "Manages public complaints and document processing.",
          "Example: AI answering tax-related questions on a government website."
        ],
      },
      {
        icon: Landmark,
        title: "Banking & Financial Services AI Agent",
        description: [
          "Detects fraudulent transactions.",
          "Assists customers with account-related queries.",
          "Example: AI-powered chatbot helping customers reset passwords."
        ],
      },
      {
        icon: Car,
        title: "Automotive AI Agent",
        description: [
          "Automates vehicle diagnostics and maintenance alerts.",
          "Enhances driver assistance systems.",
          "Example: AI notifying drivers when car servicing is due."
        ],
      },
    ],
  },
];

const OurServices = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h3 className="text-[#0D7377] font-semibold mb-4">AI Agents</h3>
        <h2 className="text-2xl sm:text-4xl md:text-5xl text-gray-900 mb-6 sm:!leading-[4rem]">
          What They Are, How They Work, <br /> and Why Your Business Needs Them
        </h2>
        <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover how AI-powered agents can streamline operations, improve customer experience, and drive business growth. From chatbots to intelligent process automation, we provide cutting-edge AI solutions tailored to your needs.
        </p>
      </div>

      <div className="space-y-12">
        {servicesList.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-3xl font-semibold text-[#0D7377] mb-10 mt-14 text-center">{category.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.data.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative group perspective"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative w-full h-full bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group-hover:bg-gradient-to-bl from-[#FE701A]/10 to-transparent">
                      <Icon className="w-12 h-12 text-[#FF6B2C] mb-6" strokeWidth={1} />
                      <h3 className="text-xl sm:text-2xl font-semibold mb-4">{service.title}</h3>
                      <ul className="text-gray-600 space-y-2 mb-4 list-disc list-outside ml-3">
                        {service.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
