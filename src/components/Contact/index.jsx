import React from 'react'
import { container, paragraph } from '../../styles/globals'

const ContactUs = () => {
    return (
        <>
            <div className={`${container} py-[150px]`}>
                <div className='flex flex-col items-center justify-center gap-5 py-14'>
                    <h1 className='text-black text-center text-[40px] lg:text-[56px] leading-[1.2em] font-semibold'>Transforming AI challenges into opportunities for innovation</h1>
                    <p className={`${paragraph} mx-auto text-center w-full lg:w-[75%] mt-3`}>In the fast-paced world of artificial intelligence, challenges are inevitable, but they also open doors to innovation. If you're facing AI challenges and need expert guidance, reach out to us through the form—our team is here to help you transform those challenges into opportunities.</p>
                </div>
            </div>
            <div className='bg-contact-us-bg h-[900px] w-full lg:w-[80%] mx-auto bg-no-repeat bg-cover flex items-center mb-16'>
                <div className={`${container}`}>
                    <div className="flex flex-wrap lg:flex-nowrap items-center">
                        <div className="w-full lg:w-[40%]">
                            <h1 className='font-[500]'>Reach out to us</h1>
                            <p className='text-gray-300 leading-8 mt-6'>Allow visitors to easily reach out to us by filling out the contact form below. We value your feedback and inquiries and are here to assist you with any questions you may have regarding our services or ethical AI practices.</p>
                        </div>
                        <div className="w-full lg:w-[60%] flex mt-14 lg:mt-0 justify-center">
                            <form className="w-full max-w-lg">
                                <div className="mb-10">
                                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">
                                        Enter your name
                                    </label>
                                    <input
                                        className="transition-all ease-in-out duration-300 text-[13px] w-full py-2 px-3 text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="mb-10">
                                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
                                        Enter your email
                                    </label>
                                    <input
                                        className="transition-all ease-in-out duration-300 text-[13px] w-full py-2 px-3 text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">
                                        Type your message here
                                    </label>
                                    <textarea
                                        className="transition-all ease-in-out text-[13px] resize-none duration-300 w-full py-2 px-3 text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
                                        id="message"
                                        placeholder="Type your message here"
                                        rows="4"
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
