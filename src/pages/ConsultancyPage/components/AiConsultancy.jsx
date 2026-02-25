import GenericPage from './GenericPage';
import { aiConsultancy } from '../../../constants';
import { container } from '../../../styles/globals';

const AiConsultancy = () => {
    return (
        <section aria-label="AI Consultancy Services">
            <div className={`${container} my-[100px]`}>
                <p className='text-foreground/80 font-medium text-start lg:text-center w-full lg:w-[80%] mx-auto text-[30px] leading-[50px]'>
                    SITE&apos;s consultancy arm translates cutting-edge research into practical solutions for organizations navigating the complex landscape of AI integration and ethics
                </p>
            </div>
            <GenericPage data={aiConsultancy} isTag={true} isBackground={true} isFlexReverse={false} isChildHeading={true} />
        </section>
    );
};

export default AiConsultancy;
