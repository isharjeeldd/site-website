import React from 'react'
import { container } from '../../../styles/globals'
import { Link } from 'react-router-dom';
import { CustomButton } from '../../../components';

const ConsultancyHome = () => {
    return (
        <div className='bg-consultancy-bg h-[800px] bg-no-repeat bg-cover flex items-center justify-center'>
            <div className={`${container}`}>
                <div>
                    <h1 className='text-white text-start w-[60%] mb-6 text-[56px] leading-[1.2em] font-bold'>
                        Lead the Charge in Ethical
                        AI Innovation
                    </h1>
                    <Link>
                        <CustomButton btnTitle={"Explore"} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ConsultancyHome
