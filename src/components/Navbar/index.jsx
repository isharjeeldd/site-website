import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './style.css';
import { container } from '../../styles/globals';
import { Link, useLocation } from 'react-router-dom';
import SiteLogoWhite from "../../assets/Logo/siteWhiteLogo.png";
import SiteLogoBlack from "../../assets/Logo/siteBlackLogo.png";
import CustomButton from '../CustomButton';

const Navbar = () => {
    const { pathname } = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navbarHasBg, setNavbarHasBg] = useState(false);
    const [activePath, setActivePath] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setActivePath(pathname);
        window.scrollTo(0, 0);
        if (pathname.includes("/about-us") || pathname.includes("/research") || pathname.includes("/contact-us")) {
            setNavbarHasBg(true);
        } else {
            setNavbarHasBg(false);
        }
    }, [pathname]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="fixed left-0 right-0 z-50">
            {/* Animated Background */}
            <motion.div
                initial={{ y: -100 }} // Background starts off-screen (top)
                animate={{
                    y: isScrolled || navbarHasBg ? 0 : -100,  // Slide down the background only
                    transition: { duration: 0.3, ease: 'easeInOut' }
                }}
                className="absolute top-0 left-0 right-0 h-[80px] bg-white"
            />

            {/* Navbar Content */}
            <div className={`${container} relative flex items-center justify-between mx-auto py-4 transition-all ease-in-out`}>
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img className='h-[40px] w-fit' src={isScrolled ? SiteLogoBlack : (navbarHasBg ? SiteLogoBlack : SiteLogoWhite)} alt='Site Logo' />
                </Link>

                <div className="flex xl:order-1 space-x-3 xl:space-x-0 rtl:space-x-reverse">
                    <button
                        data-collapse-toggle="navbar-cta"
                        onClick={toggleMobileMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none text-gray-400"
                        aria-controls="navbar-cta"
                        aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div className={`items-center justify-between w-full xl:flex xl:w-auto xl:order-1 ${isMobileMenuOpen ? "" : "hidden"}`} id="navbar-cta">
                    <ul className="flex flex-col items-center font-medium p-4 xl:p-0 mt-4 rounded-lg xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 transition-all ease-in-out">
                        <li>
                            <Link to="/" className={`${activePath === "/" ? "font-semibold" : "font-[400]"} block py-2 px-3 xl:p-0 ${isScrolled || navbarHasBg ? "text-black" : "text-white"} transition-all ease-in-out text-[15px]`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us" className={`${activePath === "/about-us" ? "font-semibold" : "font-[400]"} block py-2 px-3 xl:p-0 ${isScrolled || navbarHasBg ? "text-black" : "text-white"} transition-all ease-in-out text-[15px]`}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/consultancy" className={`${activePath === "/consultancy" ? "font-semibold" : "font-[400]"} block py-2 px-3 xl:p-0 ${isScrolled || navbarHasBg ? "text-black" : "text-white"} transition-all ease-in-out text-[15px]`}>
                                Consultancy
                            </Link>
                        </li>
                        <li>
                            <Link to="/research" className={`${activePath === "/research" ? "font-semibold" : "font-[400]"} block py-2 px-3 xl:p-0 ${isScrolled || navbarHasBg ? "text-black" : "text-white"} transition-all ease-in-out text-[15px]`}>
                                Research
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us">
                                <CustomButton btnTitle={"Contact Us"} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

{/* <li className='self-start xl:self-center'>
                                    <div className="mx-auto flex w-full items-center justify-center">
                                        <div className="group relative cursor-pointer">
                                            <div className="flex items-center justify-between space-x-5">
                                                <button className={`menu-hover flex items-center justify-between w-full p-3 rounded text-[15px] ${isScrolled ? "text-black hover:text-gray-500" : (navbarHasBg ? "text-black hover:text-gray-500" : "text-[#BCBCBC] hover:text-white")} transition-all ease-in-out`}>Publications
                                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="dropdown invisible border-0 absolute z-50 w-max flex bg-gray-100 text-gray-800 opacity-0 transition-opacity ease-in-out duration-300">
                                                <div>
                                                    <Link onClick={() => {
                                                        setMobileMenuOpen(false);
                                                    }} to='/publication1' className={`${navListItem}`}>Publication 1</Link>
                                                    <Link onClick={() => {
                                                        setMobileMenuOpen(false);
                                                    }} to='/publication2' className={`${navListItem}`}>Publication 2</Link>
                                                    <Link onClick={() => {
                                                        setMobileMenuOpen(false);
                                                    }} to='/publication3' className={`${navListItem}`}>Publication 3</Link>
                                                    <Link onClick={() => {
                                                        setMobileMenuOpen(false);
                                                    }} to='/publication4' className={`${navListItem}`}>Publication 4</Link>
                                                </div>
                                                <div>
                                                    <Link onClick={() => {
                                                        setMobileMenuOpen(false);
                                                    }} to='/services/std-testing' className={`${navListItem}`}>STD Testing</Link>
                                                    <Link onClick={() => {
                                                        setMobileMenuOpen(false);
                                                    }} to='/services/weight-loss' className={`${navListItem}`}>Weight Loss </Link>
                                                    <Link onClick={() => {
                                                        setMobileMenuOpen(false);
                                                    }} to='/services/women-health' className={`${navListItem}`}>Women's Health</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}