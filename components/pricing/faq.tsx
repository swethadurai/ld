"use client"

import { useState } from "react";
import { Link } from "react-router-dom"

import React from "react";
import { motion } from "framer-motion";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react"

function Faq() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
      setOpenFaqIndex(openFaqIndex === index ? null : index)
    }
   
    const faqs = [
      {
        question: "How does the monthly interaction limit work?",
        answer:
          "An interaction is counted each time a user sends a message to your AI chatbot. Our system tracks these interactions and resets the count at the beginning of each billing cycle.",
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer:
          "Yes, you can change your plan at any time. When upgrading, we'll prorate the difference. When downgrading, the new rate will apply at the start of your next billing cycle.",
      },
      {
        question: "Do you offer a free trial?",
        answer:
          "Yes, we offer a 14-day free trial on our Starter and Professional plans so you can test our platform before committing.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, PayPal, and for Enterprise customers, we can arrange invoicing with net-30 terms.",
      },
      {
        question: "Is there a setup fee?",
        answer:
          "No, there are no setup fees for any of our plans. You only pay the advertised monthly or annual subscription price.",
      },
    ]
      return ( 
    <div className="mt-24">
    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <button
            className="flex justify-between items-center w-full text-left font-medium text-gray-900 py-2"
            onClick={() => toggleFaq(index)}
          >
            <span>{faq.question}</span>
            {openFaqIndex === index ? (
              <ChevronUp className="w-5 h-5 text-[#0F766E]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#0F766E]" />
            )}
          </button>
          {openFaqIndex === index && <div className="mt-2 text-gray-600 pb-2">{faq.answer}</div>}
        </div>
      ))}
    </div>
  </div>
);
}

export default Faq;