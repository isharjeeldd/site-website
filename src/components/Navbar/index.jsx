import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { container } from '../../styles/globals';
import { Link, useLocation } from 'react-router-dom';
import SiteLogoWhite from "../../assets/Logo/siteWhiteLogo.png";
import SiteLogoBlack from "../../assets/Logo/siteBlackLogo.png";
import { AppRoutes } from '../../constants';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import ThemeToggle from '../ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/consultancy", label: "Consultancy" },
    { to: "/research", label: "Research" },
    { to: "/blogs", label: "Blogs" },
];

const Navbar = () => {
    const { pathname } = useLocation();
    const { theme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [navbarHasBg, setNavbarHasBg] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        const bgPages = ["/about-us", "/research", "/contact-us", "/blogs"];
        setNavbarHasBg(bgPages.some(p => pathname.includes(p)));
    }, [pathname]);

    const hasBg = isScrolled || navbarHasBg;
    const textColor = hasBg ? "text-foreground" : "text-white";
    const logo = hasBg
        ? (theme === "dark" ? SiteLogoWhite : SiteLogoBlack)
        : SiteLogoWhite;

    return (
        <header className="fixed left-0 right-0 z-50" role="banner">
            <motion.div
                initial={{ y: -100 }}
                animate={{
                    y: hasBg ? 0 : -100,
                    transition: { duration: 0.3, ease: 'easeInOut' }
                }}
                className="absolute top-0 left-0 right-0 h-[80px] bg-background/95 backdrop-blur-sm border-b border-border"
                aria-hidden="true"
            />

            <nav
                className={`${container} relative flex items-center justify-between mx-auto py-4 transition-all ease-in-out`}
                role="navigation"
                aria-label="Main navigation"
            >
                <Link to="/" className="flex items-center space-x-3" aria-label="SITE - Go to homepage">
                    <img className='h-[40px] w-auto' src={logo} alt='SITE Logo' width="120" height="40" />
                </Link>

                <div className="hidden xl:flex items-center gap-1" id="navbar-desktop">
                    <ul className="flex items-center font-medium gap-1" role="menubar">
                        {navLinks.map(({ to, label }) => (
                            <li key={to} role="none">
                                <Link
                                    to={to}
                                    role="menuitem"
                                    className={`${pathname === to ? "font-semibold" : "font-normal"} block py-2 px-3 ${textColor} transition-all ease-in-out text-[15px] rounded-md hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring`}
                                    aria-current={pathname === to ? "page" : undefined}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li role="none">
                            <Link to="/contact-us" role="menuitem">
                                <Button variant="outline" size="default">
                                    Contact Us
                                </Button>
                            </Link>
                        </li>
                    </ul>
                    <ThemeToggle />
                </div>

                <div className="flex items-center gap-2 xl:hidden z-20">
                    <ThemeToggle />
                    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                                aria-label="Open navigation menu"
                            >
                                <Menu className={`h-5 w-5 ${textColor}`} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[280px] pt-12">
                            <nav aria-label="Mobile navigation">
                                <ul className="flex flex-col gap-2" role="menu">
                                    {navLinks.map(({ to, label }) => (
                                        <li key={to} role="none">
                                            <Link
                                                to={to}
                                                role="menuitem"
                                                onClick={() => setMobileOpen(false)}
                                                className={`${pathname === to ? "font-semibold bg-accent" : "font-normal"} block py-3 px-4 text-foreground rounded-md transition-all hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring`}
                                                aria-current={pathname === to ? "page" : undefined}
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                    <li role="none" className="mt-4">
                                        <Link to="/contact-us" onClick={() => setMobileOpen(false)} role="menuitem">
                                            <Button variant="outline" className="w-full">
                                                Contact Us
                                            </Button>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
