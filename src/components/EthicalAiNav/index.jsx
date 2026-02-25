import { useEffect, useState, useRef } from 'react';
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

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const text = `To leaders navigating the complex terrain of ethical AI \u2013 you\u2019ve found your strategic allies. At SITE, we\u2019re not just observers; we\u2019re architects of AI\u2019s responsible future. Our expertise allows you to bypass the basics and tackle the core challenges of AI integration, governance, and ethics head-on. We\u2019ve laid the groundwork with rigorous research and tailored strategies, ready to help you make a meaningful impact. The future of ethical AI is unfolding \u2013 let\u2019s shape it together with precision and purpose.`;

    const words = text.split(' ');

    return (
        <section
            className='my-[150px] bg-ethical-ai-nav bg-no-repeat bg-cover bg-center h-[1200px] w-full flex items-center justify-center'
            aria-label="Ethical AI leadership message"
        >
            <div className={`${container}`} ref={sectionRef}>
                <motion.p className='text-white mx-auto text-start lg:text-center font-medium text-[24px] leading-[45px] lg:text-[36px] lg:leading-[60px] w-full max-w-full break-words'>
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
                </motion.p>
            </div>
        </section>
    );
};

export default EthicalAiNav;
