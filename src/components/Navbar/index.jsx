import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './style.css';
import { container } from '../../styles/globals';
import { Link, useLocation } from 'react-router-dom';
import SiteLogoWhite from "../../assets/Logo/siteWhiteLogo.png";
import SiteLogoBlack from "../../assets/Logo/siteBlackLogo.png";
import CustomButton from '../CustomButton';
import { AppRoutes } from '../../constants';

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
        if (pathname.includes("/about-us") || pathname.includes("/research") || pathname.includes("/contact-us") || pathname.includes("/blogs")) {
            setNavbarHasBg(true);
        } else {
            if (pathname.includes(AppRoutes)) {
                setNavbarHasBg(true);
            }
            else {
                setNavbarHasBg(false);
            }
        }
    }, [pathname]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const menuVariants = {
        hidden: { opacity: 0, y: '-100%' },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: 'easeOut' },
        },
        exit: {
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.3, ease: 'easeIn' },
        },
    };

    const NavListItems = () => {
        const width = window.innerWidth;
        if (width > 1280) {
            return <div className={`items-center justify-between w-full xl:flex xl:w-auto xl:order-1 ${isMobileMenuOpen ? "" : "hidden"}`} id="navbar-cta">
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
                        <Link to="/blogs" className={`${activePath === "/blogs" ? "font-semibold" : "font-[400]"} block py-2 px-3 xl:p-0 ${isScrolled || navbarHasBg ? "text-black" : "text-white"} transition-all ease-in-out text-[15px]`}>
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact-us">
                            <CustomButton btnTitle={"Contact Us"} />
                        </Link>
                    </li>
                </ul>
            </div>
        }
        else {
            return <motion.div
                className={`absolute w-full left-0 right-0 top-0 bg-white shadow-md xl:hidden`}
                initial="hidden"
                animate={isMobileMenuOpen ? "visible" : "hidden"}
                exit="exit"
                variants={menuVariants}
            >
                <ul className="flex flex-col p-4 mt-4">
                    <li>
                        <Link onClick={toggleMobileMenu} to="/" className={`${activePath === "/" ? "font-semibold" : "font-[400]"} block py-2 text-black text-start transition-all ease-in-out`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMobileMenu} to="/about-us" className={`${activePath === "/about-us" ? "font-semibold" : "font-[400]"} block py-2 text-black text-start transition-all ease-in-out`}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMobileMenu} to="/consultancy" className={`${activePath === "/consultancy" ? "font-semibold" : "font-[400]"} block py-2 text-black text-start transition-all ease-in-out`}>
                            Consultancy
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMobileMenu} to="/research" className={`${activePath === "/research" ? "font-semibold" : "font-[400]"} block py-2 text-black text-start transition-all ease-in-out`}>
                            Research
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMobileMenu} to="/blogs" className={`${activePath === "/blogs" ? "font-semibold" : "font-[400]"} block py-2 text-black text-start transition-all ease-in-out`}>
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMobileMenu} to="/contact-us" className="block py-2 text-black text-start">
                            <CustomButton btnTitle={"Contact Us"} />
                        </Link>
                    </li>
                </ul>
            </motion.div>
        }
    }

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

                <div className="z-20 flex xl:order-1 space-x-3 xl:space-x-0 rtl:space-x-reverse">
                    <button
                        data-collapse-toggle="navbar-cta"
                        onClick={toggleMobileMenu}
                        type="button"
                        className="inline-flex items-center p-2 transition-all ease-in-out duration-300 w-10 h-10 justify-center text-sm rounded-lg xl:hidden text-gray-400 focus:outline-none hover:bg-glass hover:backdrop-blur-lg"
                        style={{
                            backgroundColor: 'transparent', // Transparent by default
                            boxShadow: 'none',  // No shadow initially
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            e.target.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
                            e.target.style.backdropFilter = 'blur(5px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.boxShadow = 'none';
                            e.target.style.backdropFilter = 'none';
                        }}
                        aria-controls="navbar-cta"
                        aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <NavListItems />
            </div>
        </nav>
    );
};

export default Navbar;