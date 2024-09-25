import React from 'react';
import { container } from '../../../styles/globals';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../../components';
import { motion } from 'framer-motion';

const ConsultancyHome = () => {
    // Slide in from left for the heading
    const h1Variants = {
        hidden: { opacity: 0, x: -100 },  // Start off the screen to the left
        visible: {
            opacity: 1,
            x: 0,  // Slide into its final position
            transition: { duration: 1, ease: 'easeOut' }  // Smooth transition
        }
    };

    // Slide-up animation for the button
    const buttonVariants = {
        hidden: { opacity: 0, y: 50 },  // Start below the final position
        visible: {
            opacity: 1,
            y: 0,   // Slide up to its position
            transition: { duration: 1, ease: 'easeOut' }  // Delay to sync with heading
        }
    };

    return (
        <div className='bg-consultancy-bg h-[800px] bg-no-repeat bg-cover flex items-center justify-center'>
            <div className={`${container}`}>
                <div>
                    {/* Animated h1 with slide-in from left effect */}
                    <motion.h1
                        className='text-white text-start w-full text-[36px] leading-[1.2em] lg:w-[60%] mb-6 lg:text-[56px] lg:leading-[1.2em] font-bold'
                        initial="hidden"
                        animate="visible"
                        variants={h1Variants}
                    >
                        Lead the Charge in Ethical
                        AI Innovation
                    </motion.h1>

                    {/* Animated button with slide-up effect */}
                    <Link>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={buttonVariants}
                        >
                            <CustomButton btnTitle={"Explore"} />
                        </motion.div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ConsultancyHome;
