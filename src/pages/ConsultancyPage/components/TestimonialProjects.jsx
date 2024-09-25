import React from 'react';
import { paragraph } from '../../../styles/globals';
import { motion } from 'framer-motion';

const TestimonialProjects = ({ data, isReverse }) => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    const fadeInDelayVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.3 } }
    };

    return (
        <div className='my-[150px]'>
            <div className={`flex flex-wrap lg:flex-nowrap justify-between items-center ${isReverse ? "flex-row lg:flex-row-reverse" : ""}`}>
                <motion.div
                    className={`w-full lg:w-[60%] flex flex-col ${isReverse ? "items-start lg:items-end" : "items-start justify-start"}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                >
                    <h4 className='text-[20px] text-secondary font-bold mb-3'>{data.heading}</h4>
                    <h1 className={`text-[#0e0e0e] w-full sm:w-[90%] ${isReverse ? "text-start lg:ml-auto lg:text-end" : "mr-auto text-start"} text-[24px] leading-[50px]`}>{data.description}</h1>
                    <motion.img
                        src={data.image}
                        alt='Coding'
                        className='mb-10 lg:mb-0 mt-10 w-[500px] h-[250px] object-cover rounded-lg'
                        variants={fadeInDelayVariants}
                    />
                </motion.div>

                <motion.div
                    className='w-full lg:w-[40%]'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInDelayVariants}
                >
                    <div className='flex flex-col gap-8'>
                        {data.aiConsultancyServices.map((x, index) => {
                            return (
                                <div className='flex flex-col gap-2' key={index}>
                                    <div className='flex items-center gap-4'>
                                        <p className='w-[20px] h-[20px] text-[20px] text-secondary flex items-center justify-center p-3 font-semibold'>0{index + 1}.</p>
                                        <motion.h2
                                            className='text-black font-semibold text-[20px] cursor-pointer'
                                            variants={fadeInVariants}
                                        >
                                            {x.heading}
                                        </motion.h2>
                                    </div>
                                    <motion.p
                                        className={`${paragraph} !text-[16px]`}
                                        variants={fadeInDelayVariants}
                                    >
                                        {x.description}
                                    </motion.p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TestimonialProjects;
