import React from 'react'
import { onGoingProjectPKLI, onGoingProjectWai } from '../../../constants'
import { container, paragraph } from '../../../styles/globals'
import TestimonialProjects from './TestimonialProjects'

const OnGoingProjects = () => {
    return (
        <div className='my-[80px] lg:my-[150px]'>
            <div className={`${container}`}>
                <h1 className='text-black font-[600] text-center'>Testimonials</h1>
                <p className={`${paragraph} text-center mt-6 sm:w-[50%] w-full mx-auto`}>Our commitment to Ethical AI isn’t just a promise—it’s a practice reflected in the voices of our partners and clients.</p>
                <TestimonialProjects data={onGoingProjectWai} isReverse={false} />
                <TestimonialProjects data={onGoingProjectPKLI} isReverse={true} />
            </div>
        </div>
    )
}

export default OnGoingProjects
