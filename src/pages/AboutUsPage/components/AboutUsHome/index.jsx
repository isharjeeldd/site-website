import React from 'react'
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { container, paragraph } from '../../../../styles/globals'

const AboutUsHome = () => {
    const h1Variants = {
        hidden: { opacity: 0, y: -20 }, // Fade from the top
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const h2Variants = {
        hidden: { x: 50 }, // Start below the final position
        visible: { x: 0, transition: { duration: 0.8, ease: 'easeOut' } } // Slide up to its normal position
    };

    const pVariants = {
        hidden: { opacity: 0, y: 20 }, // Fade from the bottom
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div>
            <div className={`${container}`}>
                <div className="flex flex-col items-center justify-center gap-5 h-[600px]">
                    <motion.h1
                        className='text-[#9E9E9E] text-[16px] text-center'
                        variants={h1Variants}
                        initial="hidden"
                        animate="visible"
                    >
                        About us
                    </motion.h1>
                    <motion.h2
                        className='text-black text-center text-[56px] leading-[1.2em] font-bold'
                        variants={h2Variants}
                        initial="hidden"
                        animate="visible"
                    >
                        Shaping the Future of Ethical AI
                    </motion.h2>
                    <motion.p
                        className={`${paragraph} text-center mx-auto w-full sm:w-[60%] mt-3`}
                        variants={pVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        SITE envisions a world where artificial intelligence enhances human potential while adhering to the highest ethical standards.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsHome;
