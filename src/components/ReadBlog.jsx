import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserAlt, FaCalendarAlt, FaComment } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBlog } from '../redux/blog/blogslices';


const ReadBlog = () => {

    useEffect(() => { window.scrollTo(0, 0) }, []);

    const dispatch = useDispatch();
    const location = useLocation();
    const getReadId = location.pathname.split("/")[2];

    useEffect(() => {
        dispatch(getSingleBlog(getReadId));
    }, []);

    const blogPosts = useSelector((state) => state?.blog);

    if (!blogPosts) {
        return <div className="text-center text-red-500 mt-20">Blogs not found</div>;
    }
    return (
        <div className="bg-white text-gray-800 mt-20 px-4 sm:px-6 lg:px-20 py-12 flex flex-col lg:flex-row gap-10">

            {/* Left - Blog Posts */}
            <div className="w-full space-y-10">
                <motion.div
                    key={blogPosts._id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-300 pb-6"
                >
                    {
                        blogPosts?.blogImages?.map((image, index) => {
                            return (
                                <>
                                    <img
                                        key={index}
                                        src={image?.url}
                                        className="w-full h-[400px] object-cover mb-5"
                                    />
                                </>
                            )
                        })
                    }
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2 ml-4">
                        <span className="flex items-center gap-1"><FaUserAlt className='text-[#FF7350]' /> {blogPosts?.blogAuthor}</span>
                        <span className="flex items-center gap-1"><FaCalendarAlt className='text-[#FF7350]' /> {blogPosts?.blogDate}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 ml-4">{blogPosts?.blogHeading}</h2>
                    <p className="text-sm text-gray-600 mb-8 ml-4" dangerouslySetInnerHTML={{ __html: blogPosts?.blogContent }}></p>
                </motion.div>
            </div>


        </div>

    )
}

export default ReadBlog;