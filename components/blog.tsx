"use client"
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/components/data/bblogData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Blog = () => {
  useEffect(() => {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    
    if (prevButton && nextButton) {
      prevButton.classList.add('custom-nav');
      nextButton.classList.add('custom-nav');
    }
  }, []);

  return (
    <div className="bg-[#FAF7F7] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4">Blog</h2>
          <p className="text-md sm:text-xl text-gray-600">
            Articles on AI trends, automation, and business efficiency.
          </p>
        </div>

        {/* Blog Posts - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <Link href={`/blog/${post.id}`} className="block">
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
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                  <div className="flex items-center text-teal-600 font-medium">Read more <ArrowRight className="w-4 h-4 ml-2" /></div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Blog Posts - Mobile Slider */}
        <div className="md:hidden relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={{ nextEl: '.swiper-custom-next', prevEl: '.swiper-custom-prev' }}
            modules={[Navigation]}
            className="swiper-container"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Link href={`/blog/${post.id}`} className="block">
                    <div className="relative w-full h-64">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-3 line-clamp-2">{post.title}</h2>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                      <div className="flex items-center text-teal-600 font-medium">Read more <ArrowRight className="w-4 h-4 ml-2" /></div>
                    </div>
                  </Link>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-4">
            <button className="swiper-custom-prev !bg-transparent !text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
              </svg>
            </button>
            <button className="swiper-custom-next !text-black !bg-transparent !border-none !text-3xl ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;