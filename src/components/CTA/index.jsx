import React from 'react'
import { container, paragraph } from '../../styles/globals'
import ctaImage from "../../assets/Images/ctaImage.jpg"
import { Link } from 'react-router-dom'
import CustomButton from '../CustomButton'

const CTA = () => {
    return (
        <div className='bg-cta-bg h-[1000px] bg-no-repeat bg-cover flex items-center justify-center'>
            <section className={`${container} py-16`}>
                <div className="flex items-center gap-14">
                    <img src={ctaImage} alt='call to action' className='w-[600px] rounded-xl object-contain' />
                    <div>
                        <h1 className='text-[#0e0e0e] font-bold text-[36px] leading-[50px]'>Decoding the future of AI, one ethical solution at a time</h1>
                        <p className={`${paragraph} !text-[#868686] mt-3 mb-6`}>Dedicated to advancing ethical AI practices through cutting-edge research and expert consultancy, bridging the gap between human values and AI potential.</p>
                        <Link to={"/contact-us"}>
                            <CustomButton btnTitle={"Contact SITE"} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CTA
