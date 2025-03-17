import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import logo from './images/Logo.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className=" bg-[#FAF7F7]">
      <footer className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                {/* <div className="w-8 h-8">
                  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                    <path d="M8 4L24 16L8 28V4Z" fill="#0D9488"/>
                  </svg>
                </div> */}
                <span className="text-2xl font-semibold">
                 <img src={logo} width="300px"/>
                </span>
              </div>
              <p className="text-gray-600 pr-4 text-md sm:text-lg">
              Revolutionise your workflow with AI-powered automation. Reduce costs, increase efficiency, and provide outstanding customer service—around the clock.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-4">
              <nav className="grid grid-cols-2 gap-4">
                <div>
                   <Link to="/"className="text-gray-600 hover:text-gray-900 text-md sm:text-lg">Home</Link> 
                </div>
                {/* <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-md sm:text-lg">Case Studies</a>
                </div> */}
                <div>
                   <Link to="/whyus"className="text-gray-600 hover:text-gray-900 text-md sm:text-lg">Why Us</Link> 
                </div>
                <div>
                   <Link to="/ai-agents"className="text-gray-600 hover:text-gray-900 text-md sm:text-lg">AI Agents</Link> 
                </div>
                <div>
                   <Link to="/blog"className="text-gray-600 hover:text-gray-900 text-md sm:text-lg">Blog</Link> 
                </div>
                <div>
                   <Link to="/contact"className="text-gray-600 hover:text-gray-900 text-md sm:text-lg">Contact Us</Link> 
                </div>
               
              </nav>
            </div>

            {/* Social Media Icons */}
            <div className="md:col-span-4 flex flex-col  gap-4">
            <h3 className="text-xl font-semibold text-[#0F766E] mb-2">Looking for our Support Team?</h3>
            <p className="text-gray-600">
  For assistance, reach out to us at{" "}
  <a href="mailto:support@leadbridge.co.uk" className="text-[#0F766E] font-semibold hover:underline">
    support@leadbridge.co.uk
  </a>{" "}
  – we're here to help!
</p>
              {/* <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Youtube className="w-6 h-6" />
              </a> */}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 Leadbridge.co.uk - Professional website for your Business. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy"><a href="#" className="text-gray-600 hover:text-gray-900 text-sm underline">Privacy Policy</a></Link>
              {/* <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Service</a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;