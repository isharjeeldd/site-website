import React from 'react'
import { container } from '../../styles/globals'
import Lottie from "lottie-react";
import LottieFile from "../../assets/Lottie/404NotFound.json"
import { CustomButton } from '../../components';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='py-[200px]'>
                <div className={container}>
                    <div className='flex flex-wrap items-center justify-between'>
                        <Lottie style={{ width: "600px" }} animationData={LottieFile} loop={true} />
                        <div className='my-10 w-[50%]'>
                            <h1 className={`text-black font-bold !text-[100px]`}>404</h1>
                            <p className='font-normal text-primary-lighter text-start text-[16px] w-[100%] md:w-[70%] mb-7'>
                                The page you are looking for does not exist. Click on the button below to get back to the homepage.
                            </p>
                            <Link to='/' className={`text-[14px] bg-primary-light py-3 mt-8 text-white rounded-md`}>
                                <CustomButton btnTitle={"Home"} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
