import React from 'react'
import { container } from '../../styles/globals'
import businessLAi from "../../assets/Images/businessLAi.png"
import govAgencies from "../../assets/Images/govAgencies.png"
import nonProfitOrg from "../../assets/Images/nonProfitOrg.png"
import educationIns from "../../assets/Images/educationIns.png"
import securityOrg from "../../assets/Images/securityOrg.png"

const WhoWeServe = () => {
    return (
        <div className={`${container} my-[150px]`}>
            <div className='text-center'>
                <h1 className='text-[26px] text-[#404040] font-[700]'>Who We Serve</h1>
                <p className='text-[15px] w-[50%] mt-4 mx-auto text-[#868686] leading-7'>In today's rapidly evolving technological environment, responsible AI integration is crucial. SITE provides essential expertise for:</p>
            </div>
            <div className='mt-4'>
                <div className="flex gap-4 justify-center w-full">
                    <div className='bg-[#F9FAFB] p-4 w-fit'>
                        <img className='h-[200px] w-[700px] rounded-sm' src={businessLAi} alt='Business' />
                        <h2 className='text-center text-gray-500 font-semibold mt-4 text-[14px]'>Businesses leveraging AI for competitive advantage</h2>
                    </div>
                    <div className='bg-[#F9FAFB] p-4 w-fit'>
                        <img className='h-[150px] w-[300px] rounded-sm' src={govAgencies} alt='Government agencies' />
                        <h2 className='text-center text-gray-500 font-semibold mt-4 w-[200px] mx-auto text-[14px]'>Government agencies shaping AI policy and regulation</h2>
                    </div>
                </div>
                <div className="flex gap-4 justify-center w-full mt-6">
                    <div className='bg-[#F9FAFB] p-4 w-fit'>
                        <img className='h-[200px] w-fit rounded-sm' src={nonProfitOrg} alt='non profit org' />
                        <h2 className='text-center text-gray-500 font-semibold mt-4 text-[14px]'>Nonprofit organizations advocating for ethical AI deployment</h2>
                    </div>
                    <div className='bg-[#F9FAFB] p-4 w-fit'>
                        <h2 className='text-center text-gray-500 font-semibold mb-4 w-[200px] mx-auto text-[14px]'>Educational institutions advancing AI ethics research</h2>
                        <img className='h-[150px] w-fit rounded-sm' src={educationIns} alt='educational institutes' />
                    </div>
                    <div className='bg-[#F9FAFB] p-4 w-fit'>
                        <img className='h-[150px] w-[300px] rounded-sm' src={securityOrg} alt='security agencies' />
                        <h2 className='text-center text-gray-500 font-semibold mt-4 w-[200px] mx-auto text-[14px]'>Security organizations countering AI-driven threats</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeServe
