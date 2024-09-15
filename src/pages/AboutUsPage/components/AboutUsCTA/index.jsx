import React from 'react'
import { container } from '../../../../styles/globals'
import { CustomButton } from '../../../../components'
import { Link } from 'react-router-dom'

const AboutUsCTA = () => {
    return (
        <div>
            <div className='bg-cta-bg h-[1000px] bg-no-repeat bg-cover flex items-center justify-center'>
                <section className={`${container} py-16`}>
                    <div className="flex flex-col justify-center items-center gap-12">
                        <h1 className='text-[#0e0e0e] w-full sm:w-[70%] mx-auto font-bold text-[48px] leading-[60px] text-center'>Lead the Charge in Ethical AI Innovation Contact SITE Today to Get Started</h1>
                        <Link to={"/contact-us"}>
                            <CustomButton btnTitle={"Contact SITE"} />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutUsCTA
