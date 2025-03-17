"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: "What are AI agents, and how do they work",
    answer: "AI agents are intelligent systems that automate tasks, adapt to new challenges, and continuously improve through data-driven learning."
  },
  {
    question: "Will AI agents replace human employees?",
    answer: "AI agents enhance productivity by automating repetitive tasks, allowing employees to focus on strategic and creative work."
  },
  {
    question: "How long does it take to set up an AI agent?",
    answer: "Implementation time varies depending on complexity, but most AI agents can be set up and fine-tuned within weeks"
  },
  {
    question: "Is AI expensive?",
    answer: "AI agents provide a cost-effective solution, improving efficiency and reducing operational costs over time. "
  },
  {
    question: "Can AI agents integrate with my existing systems?",
    answer: "Yes, our AI solutions are designed for seamless integration with your current tools and workflows."
  },
  {
    question: "Is my data secure with AI agents?",
    answer: "Absolutely. We prioritise data security with advanced encryption and compliance with industry standards."
  },
  {
    question: "What industries benefit most from AI agents?",
    answer: "AI agents are transforming industries like healthcare, retail, finance, and customer service by enhancing efficiency and decision-making."
  },
  {
    question: "Do you offer support after implementation?",
    answer: "Yes, we provide comprehensive post-implementation support and regular check-ins to ensure optimal performance."
  },
  {
    question: "Can AI agents scale with my business?",
    answer: "Yes, AI agents can be scaled as your business grows, adapting to new challenges and opportunities."
  },
  {
    question: "How can I get started with AI agents?",
    answer: "Simply reach out to us for a consultation, and we'll assess your needs to design the best AI solution for your business."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FAF7F7] py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 justify-center items-center">
        {/* Left Column */}
        <div className="lg:w-1/3">
          <h2 className="text-xl sm:text-3xl font-medium text-gray-800 mb-4">
            Still have questions? Let&apos;s Talk!
          </h2>
          <p className="text-gray-600 mb-8 text-xl">
            Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.
          </p>
          <Link href="/contact">
            <button className="bg-[#0D7377] text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors">
              Contact us
            </button>
          </Link>
        </div>

        {/* Right Column - FAQs */}
        <div className="lg:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#F4EEEA]"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-800 text-xl">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 pt-5 text-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;