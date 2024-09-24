import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { container } from '../../../styles/globals';

const PredictAiFuture = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;

            // Calculate scroll progress as the section comes into view
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

    const text = `We don't just predict the future of AI; we shape it. Our consultancy is your compass in the ethical AI revolution`;
    const words = text.split(' ');

    return (
        <div className='bg-predict-ai-future-bg h-[1000px] bg-no-repeat bg-cover flex items-center justify-center mt-[-150px]'>
            <div className={`${container}`} ref={sectionRef}>
                <motion.h1 className='text-white mx-auto w-[90%] text-center font-[500] text-[46px] leading-[75px]'>
                    {words.map((word, index) => {
                        // Calculate word opacity based on the scroll progress
                        const wordOpacity = Math.min(Math.max((scrollProgress * 35) - index * 1, 0.3), 1);

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

export default PredictAiFuture;
