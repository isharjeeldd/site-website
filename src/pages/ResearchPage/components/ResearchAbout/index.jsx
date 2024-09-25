import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { container } from '../../../../styles/globals';

const ResearchAbout = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;

            // Calculate scroll progress for the section
            if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
                const progress = Math.min(Math.max((windowHeight - sectionTop) / (sectionHeight + windowHeight), 0), 1);
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const text = `To leaders navigating the complex terrain of ethical AI – you've found your strategic allies. The Strategic Institute of Technology Ethics (SITE) Research Center is at the forefront of exploring the ethical, legal, and social implications of artificial intelligence. Our interdisciplinary approach combines rigorous academic inquiry with real-world insights to shape the future of responsible AI.`;

    const words = text.split(' ');

    return (
        <div id='research-about' className='bg-research-about-bg h-[1000px] bg-no-repeat bg-cover flex items-end lg:items-end justify-center'>
            <div className={`${container}`} ref={sectionRef}>
                <motion.h1 className='text-white text-start mx-auto lg:text-center font-[500] text-[22px] leading-[50px] lg:text-[32px] lg:leading-[60px] pb-[85px] lg:pb-[160px] w-full max-w-[100%] break-words overflow-wrap'>
                    {words.map((word, index) => {
                        // Adjust the word's opacity based on the scroll progress
                        const wordOpacity = Math.min(Math.max((scrollProgress * 100) - index * 1, 0.3), 1);

                        return (
                            <motion.span
                                key={index}
                                style={{ opacity: wordOpacity, transition: 'opacity 0.3s ease' }}
                                className="mr-2 inline-block"
                            >
                                {word}
                            </motion.span>
                        );
                    })}
                </motion.h1>
            </div>
        </div>
    );
};

export default ResearchAbout;
