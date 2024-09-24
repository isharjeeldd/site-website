import React, { useEffect, useState, useRef } from 'react';
import { container } from '../../styles/globals';
import { motion } from 'framer-motion';

const Home = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;

            // Calculate the amount of scrolling within the section (0 - 1)
            if (sectionTop < 0 && Math.abs(sectionTop) <= sectionHeight) {
                const progress = Math.min((Math.abs(sectionTop) / sectionHeight) * 100, 100);
                setScrollProgress(progress);
            } else if (sectionTop >= 0) {
                setScrollProgress(0); // Before the section starts
            } else {
                setScrollProgress(100); // When the section has been fully scrolled past
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.3,
            },
        },
    };

    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <>
            <div ref={sectionRef} className='bg-home-bg h-[1200px] bg-fixed bg-no-repeat bg-cover flex items-center justify-center'>
                <div className={`${container}`}>
                    <div>
                        <motion.h1
                            className="text-white uppercase mt-[-180px] font-[500] leading-[100px] text-center flex flex-col gap-2 text-[100px]"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div className='ml-[-200px]' variants={textVariant}>
                                Bridging the
                            </motion.div>
                            <motion.div className='ml-14' variants={textVariant}>
                                gap between AI
                            </motion.div>
                            <motion.div variants={textVariant}>
                                potential and human
                            </motion.div>
                            <motion.div
                                className='ml-[-150px] relative inline-block overflow-visible'
                                variants={textVariant}
                            >
                                <motion.div
                                    className='absolute bg-[#2A9C6C] rounded-xl h-[100px] max-w-[30%]'
                                    initial={{ width: 0 }}
                                    animate={{ width: `${scrollProgress * 2}%` }} // Adjust width based on section scroll progress
                                    transition={{ ease: 'easeOut', duration: 0.3 }}
                                    style={{
                                        zIndex: 0,
                                        left: '50%',
                                        transform: 'translateX(-50%)'
                                    }}
                                />
                                <span className='relative z-10'>values</span>
                            </motion.div>
                        </motion.h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
