import React from 'react'
import { container, paragraph } from '../../../../styles/globals'
import Lottie from "lottie-react";
import LottieFile from "../../../../assets/Lottie/ourCompanyLottie.json"

const AboutSite = () => {
    return (
        <>
            <div className={`${container} my-[150px]`}>
                <h1 className='text-[#0e0e0e] font-bold text-center mx-auto w-fit text-[42px] leading-[50px]'>About SITE</h1>
                <p className={`${paragraph} text-center w-full sm:w-[75%] mx-auto mt-3`}>The Strategic Institute of Technology Ethics (SITE) stands at the forefront of responsible AI innovation and governance. Born from the vision of bridging cutting-edge research with practical application, SITE is your partner in navigating the complex landscape of AI integration.</p>
            </div>

            <div className='my-[150px]'>
                <div className={`${container} -[150px]`}>

                    <div className="flex justify-between">

                        <div className="flex flex-col gap-12 w-[40%]">
                            <div>
                                <div className="flex flex-col">
                                    <h1 className='font-semibold text-[30px] text-[#0e0e0e]'>Our Expertise</h1>
                                    <p className={`${paragraph} w-full sm:w-[75%] mt-3 !leading-7 !text-[16px]`}>At SITE, we blend rigorous academic inquiry with real-world insights. Our interdisciplinary team of AI researchers, ethicists, legal experts, and industry veterans brings a unique perspective to the challenges of the AI era.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <h1 className='font-semibold text-[30px] text-[#0e0e0e]'>Our Approach</h1>
                                    <p className={`${paragraph} w-full sm:w-[75%] mt-3 !leading-7 !text-[16px]`}>We believe that responsible AI is not just an ethical imperative—it's a business advantage. Our dual focus on research and consultancy allows us to offer solutions that are both innovative and implementable</p>
                                </div>
                            </div>
                        </div>

                        <Lottie style={{ width: "300px" }} animationData={LottieFile} loop={true} />

                        <div className="flex flex-col gap-12 w-[40%]">
                            <div className='text-end'>
                                <div className="flex flex-col">
                                    <h1 className='font-semibold text-[30px] text-[#0e0e0e]'>Our Impact</h1>
                                    <p className={`${paragraph} w-full sm:w-[75%] ml-auto mt-3 !leading-7 !text-[16px]`}>From shaping AI policies to transforming organizational structures, SITE's work touches every aspect of AI. We've helped businesses optimize their operations, and contributed to global dialogues on the future of AI.</p>
                                </div>
                            </div>
                            <div className='text-end'>
                                <div className="flex flex-col">
                                    <h1 className='font-semibold text-[30px] text-[#0e0e0e]'>Our Commitment</h1>
                                    <p className={`${paragraph} w-full sm:w-[75%] ml-auto mt-3 !leading-7 !text-[16px]`}>As AI continues to reshape our world, SITE remains committed to ensuring that these powerful technologies serve humanity's best interests. We're not just preparing for the future of AI—we're actively shaping it.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutSite
