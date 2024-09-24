import React from 'react';
import BlogCard from './BlogCard';
import { blogsList } from '../../../constants/blogs';
import { container, paragraph } from '../../../styles/globals';
import { motion } from 'framer-motion';

const BlogList = () => {
    const headingVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    const subHeadingVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 }
        }
    };

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut', delay: 0.4 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.2 }
        })
    };

    return (
        <div>
            <motion.section
                className={`${container} bg-white pb-10 pt-20 lg:pb-20 lg:py-[150px]`}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <motion.div
                            className="mx-auto mb-[60px] text-center lg:mb-20"
                            variants={headingVariants}
                        >
                            <motion.h1 className="block mb-5 text-[16px] font-bold text-secondary">
                                Blogs / Publications
                            </motion.h1>

                            <motion.h2
                                className={`${container} text-black mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]`}
                                variants={subHeadingVariants}
                            >
                                Our Recent News
                            </motion.h2>

                            <motion.p
                                className={`${paragraph} w-full sm:w-[80%] mx-auto`}
                                variants={paragraphVariants}
                            >
                                At SITE, we’re not only shaping the future of AI but actively engaging in the dialogue around its ethical development and implementation. Our blogs and publications serve as a platform to share thought leadership, cutting-edge research, and real-world insights into the ethical challenges and opportunities AI presents.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>

                <motion.div className="flex flex-wrap">
                    {blogsList.map((blog, index) => (
                        <motion.div
                            className='w-full px-4 md:w-1/2 lg:w-1/3'
                            key={blog.id}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                        >
                            <BlogCard
                                id={blog.id}
                                date={blog.date}
                                title={blog.title}
                                description={blog.description}
                                image={blog.image}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    );
};

export default BlogList;
