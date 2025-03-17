"use client"

import { useState, FormEvent } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import heroimg from '@/public/images/Ai 1.png'

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        subject: "",
        message: "",
    })
    
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus(null);
        setErrorMessage(null);
    
        try {
            const response = await fetch('/api/sendgrid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }
            
            setSubmitStatus('success');
            setIsSubmitted(true);
            
            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                jobTitle: "",
                subject: "",
                message: "",
            });
    
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    }

    return (
        <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        {/* Contact Form */}
        <motion.div 
          variants={itemVariants}
          className="lg:w-1/2 w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF6B2C] to-[#ff8f61]"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#FE701A] opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#0F766E] opacity-10"></div>
          
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
            {/* <Heart className="w-5 h-5 mr-2 text-[#FF6B2C]" /> */}
            Contact Us
          </h2>
          
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-green-800 mb-2">Message Sent!</h3>
              <p className="text-green-700">Thank you for reaching out. We'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="border-gray-300 focus:border-[#0F766E] focus:ring-[#0F766E] transition-all duration-300"
                    required 
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="border-gray-300 focus:border-[#0F766E] focus:ring-[#0F766E] transition-all duration-300"
                    required 
                  />
                </motion.div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                  <Input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="border-gray-300 focus:border-[#0F766E] focus:ring-[#0F766E] transition-all duration-300"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700">Company Name</Label>
                  <Input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    className="border-gray-300 focus:border-[#0F766E] focus:ring-[#0F766E] transition-all duration-300"
                  />
                </motion.div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="jobTitle" className="text-gray-700">Job Title</Label>
                  <Input 
                    type="text" 
                    id="jobTitle" 
                    name="jobTitle" 
                    value={formData.jobTitle} 
                    onChange={handleChange} 
                    className="border-gray-300 focus:border-[#0F766E] focus:ring-[#0F766E] transition-all duration-300"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0F766E] focus:border-[#0F766E] transition-all duration-300"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="AI Solutions Consultation">AI Solutions Consultation</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Technical Support">Technical Support</option>
                  </select>
                </motion.div>
              </div>
              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="border-gray-300 focus:border-[#0F766E] focus:ring-[#0F766E] transition-all duration-300"
                  required
                />
              </motion.div>
              {errorMessage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                >
                    <p className="text-sm">{errorMessage}</p>
                </motion.div>
              )}
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-center"
              >
                <Button 
                  type="submit" 
                  className="w-[200px]  bg-primary text-white px-6 py4 rounded-full hover:bg-primary-hover transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </motion.div>
            </form>
          )}
        </motion.div>
        
        {/* Image Section */}
        <motion.div 
          variants={itemVariants}
          className="lg:w-1/2 w-full"
        >
          <div className="relative w-full h-[500px]">
            <Image 
              src={heroimg}
              alt="AI Agent Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg -mt-20 mx-10 relative z-10 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-[#0F766E] mb-2">
              Looking for our Support Team?
            </h3>
            <p className="text-gray-600">
              For assistance, reach out to us at{" "}
              <a 
                href="mailto:support@leadbridge.co.uk" 
                className="text-[#0F766E] font-semibold hover:underline"
              >
                support@leadbridge.co.uk
              </a>{" "}
              – we&apos;re here to help!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    )}

    export default Form;
