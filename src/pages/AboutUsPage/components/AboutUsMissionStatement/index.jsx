import React from 'react'
import { motion } from 'framer-motion';
import { container, paragraph } from '../../../../styles/globals'
import OurMissionImage from "../../../../assets/Images/ourMissionImage.png"

const AboutUsMissionStatement = () => {
    // Animation Variants
    const slideUpVariant = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const slideLeftVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const slideRightVariant = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className='bg-our-mission-bg h-full lg:h-[1200px] bg-no-repeat bg-cover grid items-center justify-center w-full'>
            <div className={`${container} relative`}>
                {/* Slide Up Animation for the Founding Section */}
                <motion.div
                    className='bg-site-founding-bg w-full h-full lg:w-[900px] lg:h-[700px] bg-no-repeat object-contain text-center lg:absolute lg:bottom-[-400px] lg:left-[200px]'
                    variants={slideUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }} // Animation happens once when in view
                >
                    <div className='w-[89%] mx-auto flex flex-col items-center justify-center h-full px-10 pt-16'>
                        <h1 className='text-[26px] font-[500] mb-6 lg:mt-0 mt-14 text-black'>SITE's Founding and History</h1>
                        <p className={`${paragraph} !text-[14px] pb-7 !leading-6 lg:!text-[17px] lg:!leading-8 text-justify mt-3`}>
                            The Strategic Institute of Technology Ethics was born from a vision to bridge the gap between cutting-edge AI research and its ethical, practical application in the real world. Our founder and CEO, Anam Rafiq, recognized both AI's transformative potential and its associated risks. SITE was established with a mission to become a thought leader in responsible AI integration, particularly focusing on guiding ethical workforce transitions, combating AI exploitation of vulnerable populations, and shaping robust AI legislation and governance. Our approach combines academic rigor with practical application, using quantitative analysis and holistic methodologies to tackle complex AI challenges. As we continue to grow, SITE remains dedicated to shaping a future where AI enhances human potential while upholding the highest ethical standards. We invite you to join us on this journey towards responsible AI innovation and governance.
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className={`${container} mt-[150px]`}>
                {/* Slide Left (Text) and Slide Right (Image) Animations for the Our Mission Section */}
                <div className='flex flex-wrap items-center justify-center gap-12'>
                    <motion.div
                        className="flex flex-col gap-5 w-full lg:w-[50%]"
                        variants={slideLeftVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }} // Trigger animation once when in view
                    >
                        <h1 className='text-[26px] text-white font-[500]'>Our Mission</h1>
                        <p className={`${paragraph} !text-gray-400 !leading-8 mt-3`}>
                            SITE's mission is to revolutionize the AI landscape by seamlessly fusing cutting-edge research with actionable strategies. We are dedicated to advancing responsible AI innovation and governance, serving as the crucial bridge between human values and technological progress. Through expert consultancy, strategic collaborations, and pioneering research, we empower organizations and society to harness the full potential of AI while ensuring its ethical integration. At SITE, we don't just anticipate the future of AI - we actively shape it, paving the way for a world where artificial intelligence amplifies human capability and upholds our highest ideals.
                        </p>
                    </motion.div>

                    <motion.img
                        src={OurMissionImage}
                        alt='Our Mission'
                        className='w-full lg:w-[300px] h-[400px] object-contain'
                        variants={slideRightVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }} // Trigger animation once when in view
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUsMissionStatement;
