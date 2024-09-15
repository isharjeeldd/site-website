import React from 'react'
import GenericPage from './GenericPage'
import { aiConsultancy } from '../../../constants'
import { container } from '../../../styles/globals'

const AiConsultancy = () => {

    return (
        <>
            <div className={`${container} my-[100px]`}>
                <h1 className='text-[#353535] font-[500] text-center w-[80%] mx-auto text-[30px] leading-[50px]'>
                    SITE's consultancy arm translates cutting-edge research into practical solutions for organizations navigating the complex landscape of AI integration and ethics
                </h1>
            </div>
            <GenericPage data={aiConsultancy} isTag={true} isBackground={true} isFlexReverse={false} isChildHeading={true} />
        </>
    )
}

export default AiConsultancy
