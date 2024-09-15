import React from 'react'
import { container } from '../../../../styles/globals'

const AboutUsHome = () => {
    return (
        <div>
            <div className={`${container}`}>
                <div className="flex flex-col items-center justify-center gap-5 h-[600px]">
                    <h1 className='text-[#9E9E9E] text-[16px] text-center'>About us</h1>
                    <h2 className='text-black text-center text-[56px] leading-[1.2em] font-bold'>Shaping the Future of Ethical AI</h2>
                    <p className='text-center text-[17px] text-[#868686] leading-7 mx-auto w-[60%] mt-3'>SITE envisions a world where artificial intelligence enhances human potential while adhering to the highest ethical standards</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsHome
