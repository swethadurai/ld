"use client"
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/components/data/bblogData';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogPost() {
  const params = useParams();
  // Find the post by matching its link property
  const post = blogPosts.find(post => post.link === `/blog/${params.id}`);

  if (!post) {
    return (
      <div className="pt-28 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link 
            href="/blog" 
            className="text-teal-600 hover:text-teal-700 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-16">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="text-teal-600 hover:text-teal-700 flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        {/* Featured Image */}
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          {/* Metadata */}
          <div className="flex flex-wrap gap-4 text-gray-600 mb-8">
            {post.author && <span>By {post.author}</span>}
            {post.date && <span>• {post.date}</span>}
            {post.readTime && <span>• {post.readTime}</span>}
          </div>

          <div className="text-gray-600 mb-8 text-lg">
            {post.description}
          </div>

          {/* Render HTML content safely */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
} 