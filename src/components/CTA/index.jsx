import { container, paragraph } from '../../styles/globals';
import LazyImage from '../LazyImage';
import ctaImage from "../../assets/Images/ctaImage.jpg";
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const CTA = () => {
    return (
        <section className='bg-cta-bg h-[1000px] bg-no-repeat bg-cover flex items-center justify-center' aria-labelledby="cta-heading">
            <div className={`${container} py-16`}>
                <div className="flex flex-wrap-reverse lg:flex-nowrap items-center gap-14">
                    <LazyImage
                        src={ctaImage}
                        alt='Team collaborating on ethical AI solutions'
                        className='w-[600px] rounded-xl object-contain'
                    />
                    <div>
                        <h2 id="cta-heading" className='text-foreground font-bold text-[36px] leading-[50px]'>
                            Decoding the future of AI, one ethical solution at a time
                        </h2>
                        <p className={`${paragraph} !text-[#868686] mt-3 mb-6 dark:!text-muted-foreground`}>
                            Dedicated to advancing ethical AI practices through cutting-edge research and expert consultancy, bridging the gap between human values and AI potential.
                        </p>
                        <Link to="/contact-us">
                            <Button variant="outline">Contact SITE</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
