import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion
import { blogs } from '../../../constants/blogs';
import { container, paragraph } from '../../../styles/globals';

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogs.find((blog) => blog.id === id);

    if (!blog) {
        return <p>Blog not found!</p>;
    }

    // Function to format the content: separate **text** into new lines, handle lists, and style
    const formatContent = (content) => {
        const contentArray = content.split(/\*\*(.*?)\*\*/g); // Split by the ** mark
        return contentArray.map((text, index) => {
            // If it's a heading (wrapped with **), return a styled heading
            if (index % 2 !== 0) {
                return <h2 key={index} className='font-semibold text-black text-[20px] leading-[30px] mb-4'>{text}</h2>;
            }

            // Handle lists within the paragraph content
            const formattedText = text.split(/\n/g).filter((line) => line.trim() !== ''); // Remove empty lines

            return formattedText.map((line, i) => {
                if (line.startsWith('- ')) {
                    // Unordered list item
                    return (
                        <ul key={`ul-${i}`} className="list-disc list-inside mb-4 pl-4">
                            <li>{line.replace('- ', '')}</li>
                        </ul>
                    );
                } else if (line.match(/^\d+\./)) {
                    // Ordered list item
                    return (
                        <ol key={`ol-${i}`} className="list-decimal list-inside mb-4 pl-4">
                            <li>{line.replace(/^\d+\.\s*/, '')}</li>
                        </ol>
                    );
                } else {
                    // Regular paragraph
                    return <p key={i} className={`${paragraph} mb-6`}>{line}</p>;
                }
            });
        });
    };

    // Framer Motion variants for animations
    const imageVariants = {
        hidden: { opacity: 0.5, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const dateVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <div className={`${container} py-[150px]`}>
            {/* Animated image */}
            <motion.img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[500px] object-cover rounded-lg"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
            />

            {/* Animated date */}
            <motion.p
                className="text-gray-500 text-[16px] text-end mt-4 italic"
                variants={dateVariants}
                initial="hidden"
                animate="visible"
            >
                {blog.date}
            </motion.p>

            {/* Animated title */}
            <motion.h1
                className='text-black text-[42px] font-semibold mt-6'
                variants={titleVariants}
                initial="hidden"
                animate="visible"
            >
                {blog.title}
            </motion.h1>

            <div className="blog-content text-[18px] leading-[32px] mt-8">
                {formatContent(blog.content)}
            </div>
        </div>
    );
};

export default BlogDetails;
