import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { container, paragraph } from '../../styles/globals';
import wAI from "../../assets/Partners/wAI.png";
import PKL from "../../assets/Partners/PKL.png";
import ISSM from "../../assets/Partners/ISSMlogoblack.png";

const TrustedBy = () => {
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

    const text =
        'Strategic Institute of Technology Ethics merges cutting-edge AI research with practical consultancy. We empower organizations in ethical AI governance and responsible innovation, guiding you through the complex AI landscape.';
    const words = text.split(' ');

    return (
        <>
            <div className={`${container} my-[100px]`} ref={sectionRef}>
                <motion.h1
                    className="text-[#353535] font-[500] text-center mx-auto text-[30px] leading-[50px] w-full max-w-[90%] break-words overflow-wrap"
                >
                    {words.map((word, index) => {
                        const wordOpacity = Math.min(Math.max((scrollProgress * 45) - index * 1, 0.3), 1);

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
            <div className="bg-[#f1f1f1] mt-16 py-16">
                <div className={`${container}`}>
                    <h2 className={`${paragraph} text-center`}>
                        Trusted by Leading Organizations Committed to Ethical AI Innovation and
                        Governance
                    </h2>
                    <div className="mt-10 flex gap-10 justify-center">
                        <img className="h-10 w-fit" src={wAI} alt="wAI Industries" />
                        <img className="h-10 w-fit" src={PKL} alt="PKL" />
                        <img className="h-10 w-fit" src={ISSM} alt="ISSM" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrustedBy;
