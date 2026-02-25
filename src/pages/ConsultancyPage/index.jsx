import ConsultancyHome from './components/ConsultancyHome';
import AiConsultancy from './components/AiConsultancy';
import PredictAiFuture from './components/PredictAiFuture';
import OnGoingProjects from './components/OnGoingProjects';
import AboutUsCTA from '../AboutUsPage/components/AboutUsCTA';
import SEO from '../../components/SEO';

const ConsultancyPage = () => {
    const consultancySchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "AI Ethics Consultancy",
        provider: {
            "@type": "Organization",
            name: "SITE - Strategic Institute of Technology Ethics",
        },
        description: "Comprehensive AI ethics consultancy services including AI integration, workforce transition, governance advisory, and propaganda mitigation.",
        serviceType: "AI Ethics Consultancy",
    };

    return (
        <>
            <SEO
                title="Consultancy"
                description="SITE offers comprehensive AI consultancy services: AI integration, workforce transition, ethics governance advisory, and automated propaganda mitigation."
                keywords="AI consultancy, AI integration, workforce transition, AI ethics governance, automated propaganda, AI advisory services"
                url="https://site-ethics.org/consultancy"
                structuredData={consultancySchema}
            />
            <ConsultancyHome />
            <AiConsultancy />
            <PredictAiFuture />
            <OnGoingProjects />
            <AboutUsCTA />
        </>
    );
};

export default ConsultancyPage;
