import React, { useEffect, useState } from 'react'
import { container, paragraph } from '../../../styles/globals'
import { AnimatePresence, motion } from 'framer-motion';

const GenericPage = ({ data, isFlexReverse, isBackground, isTag, isChildHeading }) => {
    const [expandedIndex, setExpandedIndex] = useState(0); // Default to the first paragraph

    const handleToggle = (index) => {
        setExpandedIndex(prevIndex => prevIndex === index ? -1 : index); // Toggle the selected paragraph
    };

    useEffect(() => {
        const length = data.aiConsultancyServices.length - 1;
        const toggleInterval = setTimeout(() => {
            setExpandedIndex((prevIndex) => (prevIndex === length ? 0 : prevIndex === 0 ? 1 : expandedIndex + 1));
        }, 10000);

        return () => clearTimeout(toggleInterval);
    }, [expandedIndex]);


    return (
        <>
            <div className={`${!isBackground ? "" : "bg-ai-consultancy-bg lg:h-[1300px] bg-no-repeat bg-cover"}`}>
                <div className={`${container} pt-[150px]`}>
                    {isTag && <h4 className='text-secondary font-semibold mb-3'>{data.tag}</h4>}
                    <h1 className='text-[#0e0e0e] text-start w-full sm:w-[70%] font-bold mr-auto text-[36px] leading-[50px]'>{data.heading}</h1>
                    <p className={`${paragraph} w-full lg:w-[75%] mt-3`}>
                        {data.description}
                    </p>
                    <div className={`flex flex-wrap lg:flex-nowrap ${isFlexReverse ? "flex-row-reverse justify-end !gap-16" : ""} items-center gap-5 mt-5`}>
                        <div className="flex flex-col gap-5 mt-8 w-full lg:w-[60%]">
                            {data.aiConsultancyServices?.map((service, index) => (
                                <div key={index} className={`${isChildHeading ? "flex-col" : "items-center"} flex`}>
                                    <div className="flex items-start gap-4">
                                        <span className='rounded-full border-2 mt-1 border-secondary w-[20px] h-[20px] text-secondary flex items-center justify-center p-3 font-semibold'>{index + 1}</span>
                                        {isChildHeading ? (
                                            <div className='flex w-full flex-col'>
                                                <h2 className='text-black w-full font-semibold text-[22px] cursor-pointer' onClick={() => handleToggle(index)} >
                                                    {service.heading}
                                                </h2>
                                                <AnimatePresence initial={false}>
                                                    {expandedIndex === index && (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                            style={{ overflow: 'hidden' }}
                                                        >
                                                            <p className={`${paragraph} w-full lg:w-[80%] ${isChildHeading ? "mt-2" : "ml-8"}`}>
                                                                {service.description}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : <>
                                            <p className={`${paragraph} w-full lg:w-[75%] ${isChildHeading ? "ml-11 mt-2" : "ml-3"}`}>
                                                {service.description}
                                            </p>
                                        </>}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <img src={data.image} alt='Coding' className='w-[500px] rounded-lg h-[400px] object-cover' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GenericPage;