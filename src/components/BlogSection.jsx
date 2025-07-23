import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUserAlt, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogThunk } from '../redux/blog/blogslices';

const Blogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogThunk());
  }, [dispatch]);

  const blogPosts = useSelector((state) => state?.blog?.blog || []);

  return (
    <div className="bg-white text-gray-800 mt-20 px-4 sm:px-6 lg:px-20 py-12 flex flex-col lg:flex-row gap-10">
      {/* Left - Blog Posts */}
      <div className="w-full lg:w-3/4 space-y-10">
        {[...blogPosts]?.reverse()?.map((post, index) => (
          <motion.div
            key={post?._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="border border-gray-300 pb-6"
          >
            <img src={post?.images[0]?.url} alt={post?.heading} className="w-full h-72 object-cover mb-5" />
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2 ml-4">
              <span className="flex items-center gap-1"><FaUserAlt className="text-[#FF7350]" /> {post?.author}</span>
              <span className="flex items-center gap-1"><FaCalendarAlt className="text-[#FF7350]" /> {post?.date}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2 ml-4">{post?.heading}</h2>
            <p
              className="text-sm text-gray-600 mb-8 ml-4"
              dangerouslySetInnerHTML={{ __html: post?.content.slice(0, 180) + "..." }}
            ></p>
            <Link
              to={`/read-blog/${post?._id}`}
              className="mt-4 ml-4 bg-[#FF7350] text-white px-6 py-4 hover:bg-[#125875] transition"
            >
              Read More
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-1/4 space-y-8">
        {/* Recent Posts */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold border-b border-[#FF7350] pb-1">Recent Posts</h4>
          {[...blogPosts]?.reverse()?.map((post, idx) => (
            <Link to={`/read-blog/${post?._id}`} key={idx}>
              <div className="flex space-x-4 space-y-5 border-b border-gray-300">
                <img src={post?.images[0]?.url} alt="" className="w-16 h-14 object-cover rounded" />
                <div>
                  <p className="text-sm font-medium text-black hover:underline cursor-pointer">
                    {post?.heading?.slice(0, 40)}...
                  </p>
                  <p className="text-xs text-gray-400">{post?.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
