import { useEffect, useState, useRef } from 'react';
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

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const text =
        'Strategic Institute of Technology Ethics merges cutting-edge AI research with practical consultancy. We empower organizations in ethical AI governance and responsible innovation, guiding you through the complex AI landscape.';
    const words = text.split(' ');

    return (
        <>
            <section className={`${container} my-[100px]`} ref={sectionRef} aria-label="About SITE">
                <motion.p
                    className="text-foreground/80 font-medium text-start lg:text-center mx-auto text-[22px] lg:text-[30px] leading-[40px] lg:leading-[50px] w-full max-w-[90%] break-words"
                    role="presentation"
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
                </motion.p>
            </section>
            <section className="bg-muted/50 dark:bg-muted/20 mt-16 py-16" aria-labelledby="trusted-by-heading">
                <div className={`${container}`}>
                    <h2 id="trusted-by-heading" className={`${paragraph} text-center dark:text-muted-foreground`}>
                        Trusted by Leading Organizations Committed to Ethical AI Innovation and Governance
                    </h2>
                    <div className="mt-10 flex flex-wrap lg:flex-nowrap gap-10 justify-center items-center">
                        <img className="h-10 w-auto dark:brightness-0 dark:invert" src={wAI} alt="wAI Industries partner logo" loading="lazy" width="100" height="40" />
                        <img className="h-10 w-auto dark:brightness-0 dark:invert" src={PKL} alt="PKL partner logo" loading="lazy" width="100" height="40" />
                        <img className="h-10 w-auto dark:brightness-0 dark:invert" src={ISSM} alt="ISSM partner logo" loading="lazy" width="100" height="40" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default TrustedBy;
