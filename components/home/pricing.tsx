
import { MessageSquare, Handshake, Building } from "lucide-react";
import { motion } from "framer-motion";
import img1 from '@/components/images/business.svg.png'
import img2 from '@/components/images/ic-consulting.svg.png'
import img3 from '@/components/images/ic-enterprise.svg.png'

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  title: string;
  icon: React.ReactNode;
  price: string;
  features: PricingFeature[];
  buttonText: string;
  isHighlighted?: boolean;
}

const PricingPlan = ({ title, icon, price, features, buttonText, isHighlighted }: PricingPlanProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`rounded-3xl sm:p-8 p-2 ${isHighlighted ? 'bg-[#0D7377] text-white' : 'bg-white'} bg-gradient-to-bl from-[#FE701A]/15 to-transparent border border-gray-200`}
  >
    <div className="text-center sm:mb-8 mb-2">
      <h3 className={`text-sm font-semibold sm:mb-6 mb-1 ${isHighlighted ? 'text-white' : 'text-teal-600'}`}>
        {title}
      </h3>
      <div className={`inline-block ${isHighlighted ? 'text-white' : 'text-[#ff4d00]'} sm:mb-6  mb-2`}>
        {icon}
      </div>
      <div className="sm:mb-6 mb-2">
        <span className="sm:text-4xl text-xl font-bold">£{price}</span>
        <span className="text-sm">/mo</span>
      </div>
    </div>

    <div className="space-y-4 sm:mb-8 mb-1 text-center">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`text-sm ${
            feature.included
              ? ''
              : `line-through ${isHighlighted ? 'text-white/60' : 'text-gray-400'}`
          }`}
        >
          {feature.text}
        </div>
      ))}
    </div>

    <button
      className={`w-full mt-3 py-3 px-6 rounded-full text-sm font-medium transition-colors ${
        isHighlighted
          ? 'bg-[#ff4d00] text-white hover:bg-[#ff4d00]/90'
          : 'border-2 border-teal-600 text-teal-600 hover:bg-teal-50'
      }`}
    >
      {buttonText}
    </button>
  </motion.div>
);

export const PricingSection = () => {
  const commonFeatures = [
    { text: "AI chatbot for customer service", included: true },
    { text: "Basic task automation", included: true },
    { text: "Monthly performance reports", included: true },
    { text: "AI-powered sales & lead generation", included: false },
    { text: "Workflow automation across platforms", included: false },
    { text: "Advanced analytics dashboard", included: false },
    { text: "AI agents built for your unique needs", included: false },
  ];

  return (
    <section className="sm:py-20 sm:px-4 px-1 py-10">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mb-4 ">
            Simple Month-to-Month Pricing
          </h2>
          <p className="text-md sm:text-lg text-gray-500 mt-8">
            No contracts. No hidden fees. Just results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <PricingPlan
            title="STARTER PLAN"
            icon = {<img src={img2} width="90px" ></img>}
            price="1299"
            features={commonFeatures}
            buttonText="Get Expert Advice"
          />
          <PricingPlan
            title="GROWTH PLAN"
            icon= {<img src={img1} width="90px"/>}
            price="2899"
            features={commonFeatures.map(f => ({ ...f, included: true }))}
            buttonText="Book Your AI Consultation"
            isHighlighted={true}
          />
          <PricingPlan
            title="CUSTOM PLAN"
            icon={<img src={img3} width="90px"/>}
            price="Custom Pricing"
            features={commonFeatures.map(f => ({ ...f, included: true }))}
            buttonText="Get Quote"
          />
        </div>

        <div className="text-center">
          <button className="text-gray-500 hover:text-gray-700 text-sm">
            Pause or cancel anytime
          </button>
        </div>
      </div>
    </section>
  );
};
