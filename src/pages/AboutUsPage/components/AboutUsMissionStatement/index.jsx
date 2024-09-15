import React from 'react'
import { container } from '../../../../styles/globals'
import OurMissionImage from "../../../../assets/Images/ourMissionImage.png"

const AboutUsMissionStatement = () => {
    return (
        <div className='bg-our-mission-bg h-[1200px] bg-no-repeat bg-cover grid items-center justify-center w-full'>
            <div className={`${container} relative`}>
                <div className='bg-site-founding-bg w-[900px] h-[700px] bg-no-repeat object-contain text-center absolute bottom-[-400px] left-[200px]'>
                    <div className='w-[89%] mx-auto flex flex-col items-center justify-center h-full p-16'>
                        <h1 className='text-[26px] font-[500] mb-6 text-black'>SITE's Founding and History</h1>
                        <p className='text-[16px] text-[#868686] leading-8 mt-3'>
                            The Strategic Institute of Technology Ethics was born from a vision to bridge the gap between cutting-edge AI research and its ethical, practical application in the real world. Our founder and CEO, Anam Rafiq, recognized both AI's transformative potential and its associated risks. SITE was established with a mission to become a thought leader in responsible AI integration, particularly focusing on guiding ethical workforce transitions, combating AI exploitation of vulnerable populations, and shaping robust AI legislation and governance. Our approach combines academic rigor with practical application, using quantitative analysis and holistic methodologies to tackle complex AI challenges. As we continue to grow, SITE remains dedicated to shaping a future where AI enhances human potential while upholding the highest ethical standards. We invite you to join us on this journey towards responsible AI innovation and governance.
                        </p>
                    </div>
                </div>
            </div>

            <div className={`${container} mt-[150px]`}>
                <div className='flex items-center justify-center gap-12'>
                    <div className="flex flex-col gap-5 w-[50%]">
                        <h1 className='text-[26px] text-white font-[500]'>Our Mission</h1>
                        <p className='text-[16px] text-gray-400 leading-8'>
                            SITE's mission is to revolutionize the AI landscape by seamlessly fusing cutting-edge research with actionable strategies. We are dedicated to advancing responsible AI innovation and governance, serving as the crucial bridge between human values and technological progress. Through expert consultancy, strategic collaborations, and pioneering research, we empower organizations and society to harness the full potential of AI while ensuring its ethical integration. At SITE, we don't just anticipate the future of AI - we actively shape it, paving the way for a world where artificial intelligence amplifies human capability and upholds our highest ideals.
                        </p>
                    </div>
                    <img src={OurMissionImage} alt='Our Mission' className='w-[300px] h-[400px] object-contain' />
                </div>
            </div>
            
        </div>
    )
}

export default AboutUsMissionStatement
