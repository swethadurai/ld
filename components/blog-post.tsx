import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/bblogData';
import Navbar from './Navbar';
import Footer from './footer';

function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || '1');
  
  const post = blogPosts.find(post => post.id === postId);
  const relatedPosts = blogPosts.filter(p => p.id !== postId).slice(0, 2);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FAF7F7] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h2>
          <Link to="/blog" className="text-teal-600 hover:text-teal-700 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
        <Navbar/>
        <div className="bg-[#FAF7F7] py-12 px-4 pt-36">
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog Link */}
        <Link to="/blog" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
        
        {/* Hero Image */}
        <div className="rounded-lg overflow-hidden shadow-md mb-8">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-[400px] object-cover"
          />
        </div>
        
        {/* Post Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
          
          {/* Post Meta */}
          <div className="flex flex-wrap items-center text-gray-600 gap-4 mb-4">
            {post.author && (
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center mr-2">
                  {post.author.charAt(0)}
                </div>
                <span>{post.author}</span>
              </div>
            )}
            
            {post.date && (
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{post.date}</span>
              </div>
            )}
            
            {post.readTime && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
          
          {/* Categories and Tags */}
          {(post.category || post.tags) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.category && (
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              )}
              
              {post.tags && post.tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Post Content */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-12">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Link to={`/blog/${relatedPost.id}`} className="block">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">{relatedPost.title}</h2>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.description}</p>
                      <div className="flex items-center text-teal-600 font-medium">
                        Read more <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>

    <Footer/>
    </div>
    
  );
}

export default BlogPost;