import React from 'react'
import { container, paragraph } from '../../../../styles/globals'
import { CustomButton } from '../../../../components'
import { Link } from 'react-router-dom'
import Lottie from "lottie-react";
import LottieFile from "../../../../assets/Lottie/aboutUsLottie.json"

const AboutUsCTA = () => {
    return (
        <div>
            <div className='bg-cta-bg h-[1000px] bg-no-repeat bg-cover flex items-center justify-center'>
                <section className={`${container} py-16`}>
                    <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
                        <div className="flex flex-col justify-start items-start gap-4">
                            <h1 className='text-[#0e0e0e] w-full sm:w-[70%] font-bold text-[40px] leading-[60px]'>Pioneering the path to AI that serves humanity's best interests</h1>
                            <p className={`${paragraph} mb-4`}>Contact SITE Today to Get Started</p>
                            <Link to={"/contact-us"}>
                                <CustomButton btnTitle={"Contact SITE"} />
                            </Link>
                        </div>
                        <Lottie className='w-[350px] mt-8 lg:mt-0 lg:w-[600px]' animationData={LottieFile} loop={true} />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutUsCTA
