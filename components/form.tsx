"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      // Show success message
      setShowSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

      // Clear form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: ''
      });

    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#F4EEEA] flex items-center justify-center px-4 py-16 relative">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-800 text-center mb-3">
          Let's get started
        </h1>
        <p className="text-gray-600 text-center mb-12 text-xl mt-10">
          Want to talk? Fill out the form below, we're here to help.
        </p>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-4 right-4 bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg z-50 flex items-center space-x-2"
            >
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-800">Message sent successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-lg text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full border-b-2 border-gray-300 py-2 px-1 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none focus:border-teal-600 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-lg text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              required
              className="w-full border-b-2 border-gray-300 py-2 px-1 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none focus:border-teal-600 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full border-b-2 border-gray-300 py-2 px-1 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none focus:border-teal-600 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-lg text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone"
              required
              className="w-full border-b-2 border-gray-300 py-2 px-1 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none focus:border-teal-600 transition-colors"
            />
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 text-center bg-red-50 p-3 rounded-lg"
            >
              {error}
            </motion.div>
          )}

          <div className="pt-4 flex items-center justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#0D7377] text-white py-4 px-16 rounded-full hover:bg-[#0D7377]/90 transition-colors text-lg font-thin disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  SENDING...
                </div>
              ) : (
                'SUBMIT'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;