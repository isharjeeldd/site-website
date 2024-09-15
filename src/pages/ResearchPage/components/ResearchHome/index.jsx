import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../../../components'
import { container } from '../../../../styles/globals'

const ResearchHome = () => {
    return (
        <div>
            <div className='bg-research-bg h-[1000px] bg-fixed bg-no-repeat bg-cover flex items-center'>
                <div className={`${container}`}>
                    <h1 className='uppercase text-start font-semibold w-[70%] mb-8 text-[56px] leading-[70px] text-[#0e0e0e]'>The SITE Research Center: Advancing AI Ethics and Governance</h1>
                    <Link to={"/contact-us"}>
                        <CustomButton btnTitle={"Explore more"} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ResearchHome
