import AboutUsHome from './components/AboutUsHome';
import AboutUsMissionStatement from './components/AboutUsMissionStatement';
import AboutSite from './components/AboutSite';
import { CTA } from '../../components';
import SEO from '../../components/SEO';

const AboutUsPage = () => {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About SITE",
        description: "Learn about the Strategic Institute of Technology Ethics, our founding, mission, and commitment to ethical AI.",
        url: "https://site-ethics.org/about-us",
    };

    return (
        <>
            <SEO
                title="About Us"
                description="Learn about SITE - the Strategic Institute of Technology Ethics. Founded to bridge cutting-edge AI research with ethical, practical application."
                keywords="about SITE, AI ethics organization, technology ethics institute, ethical AI mission, Anam Rafiq, AI governance"
                url="https://site-ethics.org/about-us"
                structuredData={aboutSchema}
            />
            <AboutUsHome />
            <AboutUsMissionStatement />
            <AboutSite />
            <CTA />
        </>
    );
};

export default AboutUsPage;
