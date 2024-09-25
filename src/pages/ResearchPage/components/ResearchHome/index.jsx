import React from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../../../components';
import { container, paragraph } from '../../../../styles/globals';
import Lottie from "lottie-react";
import LottieFile from "../../../../assets/Lottie/researchLottie.json";
import { motion } from 'framer-motion';

const ResearchHome = () => {
    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut' }
        }
    };

    return (
        <div>
            <div className='bg-research-bg h-screen bg-fixed bg-no-repeat bg-cover flex items-center'>
                <div className={`${container}`}>
                    <motion.div
                        className='bg-cover flex flex-wrap lg:flex-nowrap items-center'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Left Side Content */}
                        <motion.div
                            className='w-full lg:w-[60%] flex flex-col gap-5'
                            variants={fadeRight} // Slide in from left
                        >
                            <motion.h1
                                className='uppercase text-start text-[46px] lg:text-[56px] font-semibold leading-[70px] text-[#0e0e0e]'
                                variants={fadeUp} // Smooth fade and slide up
                            >
                                The SITE Research Center
                            </motion.h1>
                            <motion.p
                                className={`${paragraph}`}
                                variants={fadeUp}
                                transition={{ delay: 0.1 }} // Slight delay after h1
                            >
                                Advancing AI Ethics and Governance
                            </motion.p>
                            <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
                                <Link to={"/contact-us"}>
                                    <CustomButton btnTitle={"Explore more"} />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right Side Lottie Animation */}
                        <motion.div
                            className='w-full mt-14 lg:w-[40%] lg:mt-0'
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }} // Subtle scale-in effect
                        >
                            <Lottie className='w-fit lg:w-[500px]' animationData={LottieFile} loop={true} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ResearchHome;
