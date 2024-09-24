import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { container } from '../../styles/globals';

const EthicalAiNav = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;

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

    const text = `To leaders navigating the complex terrain of ethical AI – you've found your strategic allies. At SITE, we're not just observers; we're architects of AI's responsible future. Our expertise allows you to bypass the basics and tackle the core challenges of AI integration, governance, and ethics head-on. We've laid the groundwork with rigorous research and tailored strategies, ready to help you make a meaningful impact. The future of ethical AI is unfolding – let's shape it together with precision and purpose.`;

    const words = text.split(' ');

    return (
        <div className='my-[150px] bg-ethical-ai-nav bg-no-repeat bg-cover bg-center h-[1200px] w-[100%] flex items-center justify-center'>
            <div className={`${container}`} ref={sectionRef}>
                <motion.h1 className='text-white mx-auto text-center font-[500] text-[32px] leading-[60px] w-full max-w-[100%] break-words overflow-wrap'>
                    {words.map((word, index) => {
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

export default EthicalAiNav;
