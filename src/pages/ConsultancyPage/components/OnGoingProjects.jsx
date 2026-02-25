import { onGoingProjectPKLI, onGoingProjectWai } from '../../../constants';
import { container, paragraph } from '../../../styles/globals';
import TestimonialProjects from './TestimonialProjects';

const OnGoingProjects = () => {
    return (
        <section className='my-[80px] lg:my-[150px]' aria-labelledby="testimonials-heading">
            <div className={`${container}`}>
                <h2 id="testimonials-heading" className='text-foreground font-semibold text-start lg:text-center'>Testimonials</h2>
                <p className={`${paragraph} text-start lg:text-center mt-6 sm:w-[50%] w-full mx-auto dark:text-muted-foreground`}>
                    Our commitment to Ethical AI isn&apos;t just a promise&mdash;it&apos;s a practice reflected in the voices of our partners and clients.
                </p>
                <TestimonialProjects data={onGoingProjectWai} isReverse={false} />
                <TestimonialProjects data={onGoingProjectPKLI} isReverse={true} />
            </div>
        </section>
    );
};

export default OnGoingProjects;
