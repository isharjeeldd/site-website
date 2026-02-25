import { Home } from "../../components";
import EthicalAiNav from "../../components/EthicalAiNav";
import Features from "../../components/Features";
import TrustedBy from "../../components/TrustedBy";
import WhoWeServe from "../../components/WhoWeServe";
import SEO from "../../components/SEO";

const HomePage = () => {
    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "SITE - Strategic Institute of Technology Ethics",
        description: "Bridging the gap between AI potential and human values through cutting-edge research and expert consultancy.",
        url: "https://site-ethics.org",
    };

    return (
        <>
            <SEO
                title="Home"
                description="SITE bridges the gap between AI potential and human values. Expert AI ethics consultancy, governance advisory, and cutting-edge research for responsible AI innovation."
                keywords="AI ethics, artificial intelligence, AI governance, responsible AI, ethical AI consultancy, AI research, technology ethics"
                url="https://site-ethics.org"
                structuredData={homeSchema}
            />
            <Home />
            <TrustedBy />
            <Features />
            <EthicalAiNav />
            <WhoWeServe />
        </>
    );
};

export default HomePage;
