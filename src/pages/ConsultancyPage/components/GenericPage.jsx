import React from 'react'
import { container } from '../../../styles/globals'

const GenericPage = ({ data, isFlexReverse, isBackground, isTag, isChildHeading }) => {
    return (
        <>
            <div className={`${!isBackground ? "" : "bg-ai-consultancy-bg h-[1000px] bg-no-repeat bg-cover"}`}>
                <div className={`${container} pt-[150px]`}>
                    {isTag && <h4 className='text-secondary font-semibold mb-3'>{data.tag}</h4>}
                    <h1 className='text-[#0e0e0e] text-start w-full sm:w-[70%] font-bold mr-auto text-[36px] leading-[50px]'>{data.heading}</h1>
                    <p className='text-[15px] text-[#868686] leading-7 w-[75%] mt-3'>
                        {data.description}
                    </p>
                    <div className={`flex ${isFlexReverse ? "flex-row-reverse justify-end !gap-16" : ""} items-center gap-5 mt-5`}>
                        <div className="flex flex-col gap-5 mt-8 w-[50%]">
                            {data.aiConsultancyServices?.map((service, index) => (
                                <div className={`${isChildHeading ? "flex-col" : ""} flex`}>
                                    <div className="flex w-fit items-center gap-4">
                                        <span className='rounded-full border-2 border-secondary w-[20px] h-[20px] text-secondary flex items-center justify-center p-3 font-semibold'>{index + 1}</span>
                                        {isChildHeading && <h2 className='text-black font-semibold text-[22px]'>{service.heading}</h2>}
                                    </div>
                                    <p className='text-[15px] text-[#868686] leading-7 w-[75%] ml-11 mt-2'>{service.description}</p>
                                </div>
                            ))}
                        </div>
                        <img src={data.image} alt='Coding' className='w-[500px] h-[400px] object-cover' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenericPage
