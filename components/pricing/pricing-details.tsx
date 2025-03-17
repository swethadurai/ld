"use client"

import { useState } from "react";
import { Link } from "react-router-dom"

import React from "react";
import { motion } from "framer-motion";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react"

function PriceDetails() {
      const [isAnnual, setIsAnnual] = useState(false)
  return ( 
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 pt-36">
          <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>

          {/* Plan Toggle */}
          <div className="flex items-center justify-center mt-6 ">
            <span className={`mr-3 ${!isAnnual ? "font-semibold text-gray-900" : "text-gray-500"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isAnnual ? "translate-x-6" : "translate-x-1"}`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? "font-semibold text-gray-900" : "text-gray-500"}`}>
              Annual <span className="text-[#0F766E] text-sm font-medium">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="hover:bg-gradient-to-bl from-[#FE701A]/10 to-transparent hover:shadow-2xl p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">${isAnnual ? "79" : "99"}</span>
              <span className="text-gray-600">/{isAnnual ? "month, billed annually" : "month"}</span>
            </div>
            <p className="text-gray-600 mb-6">Perfect for small businesses starting with AI</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>Basic AI Chatbot</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>5,000 Monthly Interactions</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>Email Support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>Basic Analytics</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="block w-full text-center px-6 py-3 border border-[#0F766E] text-[#0F766E] rounded-full hover:bg-[#0F766E] hover:text-white transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-[#0F766E] p-8 rounded-xl shadow-lg transform scale-105 hover:shadow-2xl ">
            <h3 className="text-xl font-semibold mb-4  text-[#FE701A]">Professional</h3>
            <div className="mb-6 text-white">
              <span className="text-4xl  text-[#FE701A] font-bold">${isAnnual ? "239" : "299"}</span>
              <span className="  text-[#FE701A]">/{isAnnual ? "month, billed annually" : "month"}</span>
            </div>
            <p className="text-gray-100 mb-6">Ideal for growing companies</p>
            <ul className="space-y-4 mb-8 text-white">
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2  text-[#FE701A]" />
                <span>Advanced AI Chatbot</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2  text-[#FE701A]" />
                <span>25,000 Monthly Interactions</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2  text-[#FE701A]" />
                <span>Priority Support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2  text-[#FE701A]" />
                <span>Advanced Analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2  text-[#FE701A]" />
                <span>Custom Integration</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="block w-full text-center px-6 py-3  bg-[#FE701A]/90 text-white rounded-full hover:bg-[#FE701A] transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="hover:bg-gradient-to-bl from-[#FE701A]/10 to-transparent hover:shadow-2xl  p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <p className="text-gray-600 mb-6">For large organizations with specific needs</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>Custom AI Solutions</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>Unlimited Interactions</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>24/7 Dedicated Support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>Custom Analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>SLA Guarantee</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="block w-full text-center px-6 py-3 border border-[#0F766E] text-[#0F766E] rounded-full hover:bg-[#0F766E] hover:text-white transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
    </div>

  );
}

export default PriceDetails;
