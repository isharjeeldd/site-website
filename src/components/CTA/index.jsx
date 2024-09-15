import React from 'react'
import { container } from '../../styles/globals'
import ctaImage from "../../assets/Images/ctaImage.jpg"
import { Link } from 'react-router-dom'
import CustomButton from '../CustomButton'

const CTA = () => {
    return (
        <div className='bg-cta-bg h-[1000px] bg-no-repeat bg-cover flex items-center justify-center'>
            <section className={`${container} py-16`}>
                <div className="flex items-center gap-12">
                    <img src={ctaImage} alt='call to action' className='w-[600px] h-[500px] object-contain' />
                    <div>
                        <h1 className='text-[#0e0e0e] font-bold text-[36px] leading-[50px]'>Learn About Us</h1>
                        <p className='text-[15px] text-[#868686] leading-7 w-[75%] mt-3 mb-6'>Dedicated to advancing ethical AI practices through cutting-edge research and expert consultancy, bridging the gap between human values and AI potential.</p>
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
