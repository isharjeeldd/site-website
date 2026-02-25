import { container } from '../../styles/globals';
import Lottie from "lottie-react";
import LottieFile from "../../assets/Lottie/404NotFound.json";
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const ErrorPage = () => {
    return (
        <>
            <SEO title="Page Not Found" description="The page you are looking for does not exist." />
            <section className='py-[200px]' aria-labelledby="error-heading">
                <div className={container}>
                    <div className='flex flex-wrap items-center justify-between'>
                        <div aria-hidden="true">
                            <Lottie style={{ width: "600px", maxWidth: "100%" }} animationData={LottieFile} loop={true} />
                        </div>
                        <div className='my-10 w-full lg:w-[50%]'>
                            <h1 id="error-heading" className="text-foreground font-bold text-[100px]">404</h1>
                            <p className='font-normal text-muted-foreground text-start text-[16px] w-full md:w-[70%] mb-7'>
                                The page you are looking for does not exist. Click on the button below to get back to the homepage.
                            </p>
                            <Link to='/'>
                                <Button variant="default">Go Home</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;
