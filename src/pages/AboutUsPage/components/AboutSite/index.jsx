import { container, paragraph } from '../../../../styles/globals';
import Lottie from "lottie-react";
import LottieFile from "../../../../assets/Lottie/ourCompanyLottie.json";

const AboutSite = () => {
    return (
        <section className={`my-[150px]`} aria-labelledby="about-site-heading">
            <div className={`${container}`}>
                <h2 id="about-site-heading" className='text-foreground font-bold text-start lg:text-center lg:mx-auto w-fit text-[42px] leading-[50px]'>About SITE</h2>
                <p className={`${paragraph} text-start lg:text-center w-full sm:w-[75%] mx-auto mt-3 dark:text-muted-foreground`}>
                    The Strategic Institute of Technology Ethics (SITE) stands at the forefront of responsible AI innovation and governance. Born from the vision of bridging cutting-edge research with practical application, SITE is your partner in navigating the complex landscape of AI integration.
                </p>
            </div>

            <div className='my-[150px]'>
                <div className={`${container}`}>
                    <div className="flex lg:flex-nowrap flex-wrap justify-between">
                        <div className="flex flex-col gap-12 w-full lg:w-[40%]">
                            <div>
                                <h3 className='font-semibold text-[30px] text-foreground'>Our Expertise</h3>
                                <p className={`${paragraph} w-full sm:w-[75%] mt-3 !leading-7 !text-[16px] dark:!text-muted-foreground`}>
                                    At SITE, we blend rigorous academic inquiry with real-world insights. Our interdisciplinary team of AI researchers, ethicists, legal experts, and industry veterans brings a unique perspective to the challenges of the AI era.
                                </p>
                            </div>
                            <div>
                                <h3 className='font-semibold text-[30px] text-foreground'>Our Approach</h3>
                                <p className={`${paragraph} w-full sm:w-[75%] mt-3 !leading-7 !text-[16px] dark:!text-muted-foreground`}>
                                    We believe that responsible AI is not just an ethical imperative&mdash;it&apos;s a business advantage. Our dual focus on research and consultancy allows us to offer solutions that are both innovative and implementable.
                                </p>
                            </div>
                        </div>

                        <div aria-hidden="true">
                            <Lottie style={{ width: "300px" }} animationData={LottieFile} loop={true} />
                        </div>

                        <div className="flex flex-col gap-12 w-full lg:w-[40%]">
                            <div className='text-start lg:text-end'>
                                <h3 className='font-semibold text-[30px] text-foreground'>Our Impact</h3>
                                <p className={`${paragraph} w-full sm:w-[75%] ml-auto mt-3 !leading-7 !text-[16px] dark:!text-muted-foreground`}>
                                    From shaping AI policies to transforming organizational structures, SITE&apos;s work touches every aspect of AI. We&apos;ve helped businesses optimize their operations, and contributed to global dialogues on the future of AI.
                                </p>
                            </div>
                            <div className='text-start lg:text-end'>
                                <h3 className='font-semibold text-[30px] text-foreground'>Our Commitment</h3>
                                <p className={`${paragraph} w-full sm:w-[75%] ml-auto mt-3 !leading-7 !text-[16px] dark:!text-muted-foreground`}>
                                    As AI continues to reshape our world, SITE remains committed to ensuring that these powerful technologies serve humanity&apos;s best interests. We&apos;re not just preparing for the future of AI&mdash;we&apos;re actively shaping it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSite;
