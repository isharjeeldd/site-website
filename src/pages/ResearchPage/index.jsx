import ResearchHome from './components/ResearchHome';
import ResearchAbout from './components/ResearchAbout';
import GenericPage from '../ConsultancyPage/components/GenericPage';
import { researchData, researchOngoingProjectData } from '../../constants';
import SEO from '../../components/SEO';

const ResearchPage = () => {
    const researchSchema = {
        "@context": "https://schema.org",
        "@type": "ResearchOrganization",
        name: "SITE Research Center",
        description: "Advancing AI Ethics and Governance through in-depth research on AI gender rights, legal impacts, information ecosystem security, and AI ethics governance.",
        url: "https://site-ethics.org/research",
    };

    return (
        <>
            <SEO
                title="Research"
                description="The SITE Research Center advances AI ethics and governance through rigorous research on AI gender rights, legal impacts, information security, and ethical AI design."
                keywords="AI research, AI ethics research, AI governance research, AI gender rights, AI legal impacts, information security AI"
                url="https://site-ethics.org/research"
                structuredData={researchSchema}
            />
            <ResearchHome />
            <ResearchAbout />
            <section className='mb-[150px]' aria-labelledby="research-programs">
                <h2 id="research-programs" className="sr-only">Research Programs</h2>
                <GenericPage data={researchData} isBackground={false} isFlexReverse={false} isTag={true} isChildHeading={true} />
            </section>
            <section className='bg-tertiary px-4 py-[200px]' aria-labelledby="research-quote">
                <h2 id="research-quote" className='text-white mx-auto text-start lg:text-center w-full sm:w-[60%] font-medium text-[32px] leading-[60px]'>
                    Pushing the boundaries of AI ethics research. Our insights today shape the policies of tomorrow
                </h2>
            </section>
            <section className='mb-[150px]' aria-labelledby="ongoing-projects">
                <h2 id="ongoing-projects" className="sr-only">Ongoing Projects</h2>
                <GenericPage data={researchOngoingProjectData} isBackground={false} isFlexReverse={false} isTag={true} isChildHeading={false} />
            </section>
        </>
    );
};

export default ResearchPage;
