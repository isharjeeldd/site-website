import { container, paragraph } from '../../../../styles/globals';
import { Button } from '../../../../components/ui/button';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import LottieFile from "../../../../assets/Lottie/aboutUsLottie.json";

const AboutUsCTA = () => {
    return (
        <section className='bg-cta-bg h-[1000px] bg-no-repeat bg-cover flex items-center justify-center' aria-labelledby="about-cta-heading">
            <div className={`${container} py-16`}>
                <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
                    <div className="flex flex-col justify-start items-start gap-4">
                        <h2 id="about-cta-heading" className='text-foreground w-full sm:w-[70%] font-bold text-[40px] leading-[60px]'>
                            Pioneering the path to AI that serves humanity&apos;s best interests
                        </h2>
                        <p className={`${paragraph} mb-4 dark:text-muted-foreground`}>Contact SITE Today to Get Started</p>
                        <Link to="/contact-us">
                            <Button variant="outline">Contact SITE</Button>
                        </Link>
                    </div>
                    <div aria-hidden="true">
                        <Lottie className='w-[350px] mt-8 lg:mt-0 lg:w-[600px]' animationData={LottieFile} loop={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsCTA;
