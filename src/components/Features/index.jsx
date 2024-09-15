import React from 'react'
import { container } from '../../styles/globals'
import laptopImage from "../../assets/Images/laptopImage.jpg"
import aiImage from "../../assets/Images/aiImage.jpg"

const Features = () => {
    return (
        <div className={`${container} mt-[250px] mb-[150px]`}>
            <div className='flex items-center'>
                <div className='ml-auto w-[40%] sm:w-[100%]'>
                    <div className="flex items-center bg-expert-cons bg-no-repeat bg-cover h-[300px] w-[75%] p-10">
                        <div className='relative'>
                            
                            <div className='absolute right-[-150px] bottom-[90px]'>
                                <div className='flex items-end gap-1'>
                                    <div className='flex flex-col gap-1 items-end justify-end'>
                                        <div className='bg-secondary h-[40px] w-[50px] rounded-sm'>
                                        </div>
                                        <img className='h-[120px] w-fit rounded-sm' src={laptopImage} alt='Laptop' />
                                        <div className='bg-primary h-[60px] w-[70px] rounded-sm'>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-1 items-start justify-start'>
                                        <div className='bg-primary h-[70px] w-[80px] rounded-sm'>
                                        </div>
                                        <img className='h-[100px] w-fit rounded-sm' src={aiImage} alt='Laptop' />
                                        <div className='bg-secondary h-[30px] w-[35px] rounded-sm'>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 className='text-[#404040] text-[26px] font-[500] w-[60%]'>Expert Consultancy and Actionable Insights</h2>
                            <hr className='mt-4 w-[60%] border-[#404040]' />
                        </div>
                    </div>
                    <div className="flex items-center bg-in-depth bg-no-repeat bg-cover h-[150px] w-[50%] mt-2 p-10">
                        <h2 className='text-[#404040] text-[20px] font-[500] w-[60%]'>
                            In-Depth
                            Research</h2>
                    </div>
                </div>
                <div className='ml-auto w-[40%] sm:w-[100%]'>
                    <h2 className='text-black mb-3 font-semibold text-[26px]'>Architecting Ethical AI Futures</h2>
                    <p className='text-[15px] w-[80%] text-[#868686] leading-7'>In the gold rush of AI innovation, we're the cartographers mapping the ethical terrain.
                        As AI reshapes industries and redefines human-machine boundaries, organizations face a
                        labyrinth of ethical, legal, and societal challenges. SITE's consultancy arm doesn't just
                        guide you through this maze - we help you redesign it. From workforce transitions to governance
                        frameworks, we translate cutting-edge research into actionable strategies. With SITE, you're not
                        just adopting AI; you're crafting a responsible, innovative future.</p>
                </div>
            </div>
        </div>
    )
}

export default Features
