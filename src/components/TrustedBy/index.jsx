import React from 'react'
import { container } from '../../styles/globals'
import wAI from "../../assets/Partners/wAI.png"
import PKL from "../../assets/Partners/PKL.png"
import ISSM from "../../assets/Partners/ISSMlogoblack.png"

const TrustedBy = () => {
    return (
        <>
            <div className={`${container} my-[100px]`}>
                <h1 className='text-[#353535] font-[500] text-center w-[80%] mx-auto text-[30px] leading-[50px]'>
                    Strategic Institute of Technology Ethics merges cutting-edge AI research with practical consultancy. We empower organizations in ethical AI governance and responsible innovation, guiding you through the complex AI landscape.
                </h1>
            </div>
            <div className='bg-[#f1f1f1] mt-16 py-16'>
                <div className={`${container}`}>
                    <h2 className='text-[#868686] text-[15px] text-center'>Trusted by Leading Organizations Committed to Ethical AI Innovation and Governance</h2>
                    <div className='mt-10 flex gap-10 justify-center'>
                        <img className='h-10 w-fit' src={wAI} alt='wAI Industries' />
                        <img className='h-10 w-fit' src={PKL} alt='wAI Industries' />
                        <img className='h-10 w-fit' src={ISSM} alt='wAI Industries' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrustedBy
