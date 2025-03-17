"use client"
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-[#FAF7F7]">
      <footer className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-semibold">
                  <Image 
                    src="/images/Logo.png" 
                    alt="LeadBridge Logo" 
                    width={300} 
                    height={80} 
                    priority
                  />
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
                  <Link href="/" className="text-gray-600 hover:text-gray-900 text-md sm:text-lg">Home</Link> 
                </div>
                <div>
                  <Link href="/whyus" className="text-gray-600 hover:text-gray-900 text-md sm:text-lg">Why Us</Link> 
                </div>
                <div>
                  <Link href="/ai-agents" className="text-gray-600 hover:text-gray-900 text-md sm:text-lg">AI Agents</Link> 
                </div>
                <div>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-md sm:text-lg">Blog</Link> 
                </div>
                <div>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-md sm:text-lg">Contact Us</Link> 
                </div>
              </nav>
            </div>

            {/* Support Section */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-[#0F766E] mb-2">Looking for our Support Team?</h3>
              <p className="text-gray-600">
                For assistance, reach out to us at{" "}
                <a href="mailto:support@leadbridge.co.uk" className="text-[#0F766E] font-semibold hover:underline">
                  support@leadbridge.co.uk
                </a>{" "}
                – we&apos;re here to help!
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 Leadbridge.co.uk - Professional website for your Business. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;