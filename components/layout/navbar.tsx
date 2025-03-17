"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/Logo.png"
                alt="LeadBridge Logo" 
                width={250}
                height={60}
                className="w-[250px]"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-lg text-gray-800 hover:text-primary transition-colors">Home</Link>
            <Link href="/whyus" className="text-lg text-gray-800 hover:text-primary transition-colors">Why Us</Link>
            <Link href="/ai-agents" className="text-lg text-gray-800 hover:text-primary transition-colors">AI Agents
            </Link>
            <Link href="/blog" className=" text-lg text-gray-800 hover:text-primary transition-colors">Blog</Link>

            <Link href="/contact" className="text-lg text-gray-800 hover:text-primary transition-colors">Contact Us</Link>
            <Link href="/contact"><button className="bg-primary font-thin text-white px-16 py-3 rounded-full hover:bg-primary-hover transition-colors !ml-24">
              GET STARTED
            </button></Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Home</Link>
              <Link href="/whyus" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Why Us</Link>
              <Link href="/ai-agents" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">AI Agents</Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Blog</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Contact Us</Link>
              <Link href="/contact">
                <button className="w-full mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-hover transition-colors">
                  GET STARTED
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;