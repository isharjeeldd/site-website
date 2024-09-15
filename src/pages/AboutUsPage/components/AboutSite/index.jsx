import React from 'react'
import { container } from '../../../../styles/globals'

const AboutSite = () => {
    return (
        <>
            <div className={`${container} my-[150px]`}>
                <h1 className='text-[#0e0e0e] font-bold text-center mx-auto w-fit text-[42px] leading-[50px]'>About SITE</h1>
                <p className='text-[15px] text-[#868686] leading-7 text-center w-[65%] mx-auto mt-3'>The Strategic Institute of Technology Ethics (SITE) stands at the forefront of responsible AI innovation and governance. Born from the vision of bridging cutting-edge research with practical application, SITE is your partner in navigating the complex landscape of AI integration.</p>
            </div>
            <div className='bg-tertiary my-[150px]'>
                <div className={`${container} py-[150px]`}>

                    <div className="flex gap-6">
                        <div className='w-[50%]'>
                            <div className="flex flex-col">
                                <h1 className='font-semibold text-[36px]'>Our Expertise</h1>
                                <p className='text-[15px] leading-7 text-gray-400 w-[75%] mt-3'>At SITE, we blend rigorous academic inquiry with real-world insights. Our interdisciplinary team of AI researchers, ethicists, legal experts, and industry veterans brings a unique perspective to the challenges of the AI era.</p>
                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <div className="flex flex-col">
                                <h1 className='font-semibold text-[36px]'>Our Approach</h1>
                                <p className='text-[15px] leading-7 text-gray-400 w-[75%] mt-3'>We believe that responsible AI is not just an ethical imperative—it's a business advantage. Our dual focus on research and consultancy allows us to offer solutions that are both innovative and implementable</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-12">
                        <div className='w-[50%]'>
                            <div className="flex flex-col">
                                <h1 className='font-semibold text-[36px]'>Our Impact</h1>
                                <p className='text-[15px] leading-7 text-gray-400 w-[75%] mt-3'>From shaping AI policies to transforming organizational structures, SITE's work touches every aspect of AI integration. We've helped businesses optimize their operations, guided governments in crafting AI regulations, and contributed to global dialogues on the future of AI.</p>
                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <div className="flex flex-col">
                                <h1 className='font-semibold text-[36px]'>Our Commitment</h1>
                                <p className='text-[15px] leading-7 text-gray-400 w-[75%] mt-3'>As AI continues to reshape our world, SITE remains committed to ensuring that these powerful technologies serve humanity's best interests. We're not just preparing for the future of AI—we're actively shaping it.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutSite
