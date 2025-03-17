"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/components/data/bblogData';

const POSTS_PER_PAGE = 6;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  // Get current posts
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
      {/* Header */}
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Latest Insights
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Stay updated with the latest trends and insights in AI technology and business automation.


        </p>
      </motion.div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {currentPosts.map((post, index) => (
          <motion.article 
            key={post.id}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Link href={post.link} className="block">
              <div className="relative w-full h-64">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center text-teal-600 font-medium">
                  Read more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pb-12">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-white border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`w-10 h-10 rounded-full ${
                currentPage === index + 1
                  ? 'bg-teal-600 text-white'
                  : 'bg-white border hover:bg-gray-50'
              }`}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-white border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
