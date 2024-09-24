import React from 'react';
import siteWhiteLogo from "../../assets/Logo/siteWhiteLogo.png"
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton';

const Footer = () => {

    const TwitterXIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="20"
            height="20"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
        >
            <g
                style={{
                    stroke: 'none',
                    strokeWidth: 0,
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 10,
                    fill: 'none',
                    fillRule: 'nonzero',
                    opacity: 1,
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
                <path
                    d="M 0.219 2.882 l 34.748 46.461 L 0 87.118 h 7.87 l 30.614 -33.073 l 24.735 33.073 H 90 L 53.297 38.043 L 85.844 2.882 h -7.87 L 49.781 33.341 L 27.001 2.882 H 0.219 z M 11.793 8.679 h 12.303 L 78.425 81.32 H 66.122 L 11.793 8.679 z"
                    style={{
                        stroke: 'none',
                        strokeWidth: 1,
                        strokeDasharray: 'none',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        strokeMiterlimit: 10,
                        fill: '#fff',
                        fillRule: 'nonzero',
                        opacity: 1,
                    }}
                    transform="matrix(1 0 0 1 0 0)"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );

    const LinkedIn = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="20"
            height="20"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
        >
            <g
                style={{
                    stroke: 'none',
                    strokeWidth: 0,
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 10,
                    fill: 'none',
                    fillRule: 'nonzero',
                    opacity: 1,
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
                <path
                    d="M 1.48 29.91 h 18.657 v 60.01 H 1.48 V 29.91 z M 10.809 0.08 c 5.963 0 10.809 4.846 10.809 10.819 c 0 5.967 -4.846 10.813 -10.809 10.813 C 4.832 21.712 0 16.866 0 10.899 C 0 4.926 4.832 0.08 10.809 0.08"
                    style={{
                        stroke: 'none',
                        strokeWidth: 1,
                        strokeDasharray: 'none',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        strokeMiterlimit: 10,
                        fill: '#fff', // Changed the fill color to white
                        fillRule: 'nonzero',
                        opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0)"
                    strokeLinecap="round"
                />
                <path
                    d="M 31.835 29.91 h 17.89 v 8.206 h 0.255 c 2.49 -4.72 8.576 -9.692 17.647 -9.692 C 86.514 28.424 90 40.849 90 57.007 V 89.92 H 71.357 V 60.737 c 0 -6.961 -0.121 -15.912 -9.692 -15.912 c -9.706 0 -11.187 7.587 -11.187 15.412 V 89.92 H 31.835 V 29.91 z"
                    style={{
                        stroke: 'none',
                        strokeWidth: 1,
                        strokeDasharray: 'none',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        strokeMiterlimit: 10,
                        fill: '#fff', // Changed the fill color to white
                        fillRule: 'nonzero',
                        opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0)"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );

    return (
        <footer className="bg-footer-bg bg-fixed bg-no-repeat bg-cover bg-top py-16">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <h2 className='text-white font-semibold text-[30px] mb-8 ml-2'>See what SITE can do for you</h2>

                <Link to="/contact-us">
                    <CustomButton btnTitle={"Contact Us"} />
                </Link>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        {/* SOCIALS */}
                        <ul className="flex flex-col gap-3">
                            <img src={siteWhiteLogo} className='h-10 w-fit' alt='Site logo' />
                            <p className="text-gray-500 transition hover:opacity-75 ml-2"> Stay Connected with SITE </p>
                            <div className="flex gap-4 ml-2 mt-4">
                                <li>
                                    <Link
                                        href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-500 transition hover:opacity-75"
                                    >
                                        <TwitterXIcon />
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-500 transition hover:opacity-75"
                                    >
                                        <span className="sr-only">LinkedIn</span>
                                        <LinkedIn />
                                    </Link>
                                </li>
                            </div>
                        </ul>

                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium text-white">Services</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link to={"/consultancy"} className="text-gray-500 transition hover:opacity-75"> Consultancy </Link>
                                </li>
                                <li>
                                    <Link to={"/research"} className="text-gray-500 transition hover:opacity-75"> Research </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-white">Company</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link to={"/about-us"} className="text-gray-500 transition hover:opacity-75"> About us </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-white">Resources</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link href="/contact-us" className="text-gray-500 transition hover:opacity-75"> Contact </Link>
                                </li>

                            </ul>
                        </div>

                        {/* <div>
                            <p className="font-medium text-white">Legal</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link href="#" className="text-gray-500 transition hover:opacity-75"> Accessibility </Link>
                                </li>

                                <li>
                                    <Link href="#" className="text-gray-500 transition hover:opacity-75"> Terms of service </Link>
                                </li>
                            </ul>
                        </div> */}

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
