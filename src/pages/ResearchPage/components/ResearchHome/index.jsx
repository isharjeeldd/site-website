import { Link } from 'react-router-dom';
import { Button } from '../../../../components/ui/button';
import { container, paragraph } from '../../../../styles/globals';
import Lottie from "lottie-react";
import LottieFile from "../../../../assets/Lottie/researchLottie.json";
import { motion } from 'framer-motion';

const ResearchHome = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1, x: 0,
            transition: { duration: 0.8, ease: 'easeOut' }
        }
    };

    return (
        <section className='bg-research-bg h-screen bg-fixed bg-no-repeat bg-cover flex items-center' aria-labelledby="research-home-heading">
            <div className={`${container}`}>
                <motion.div
                    className='bg-cover flex flex-wrap lg:flex-nowrap items-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className='w-full lg:w-[60%] flex flex-col gap-5' variants={fadeRight}>
                        <motion.h1
                            id="research-home-heading"
                            className='uppercase text-start text-[46px] lg:text-[56px] font-semibold leading-[70px] text-foreground'
                            variants={fadeUp}
                        >
                            The SITE Research Center
                        </motion.h1>
                        <motion.p className={`${paragraph} dark:text-muted-foreground`} variants={fadeUp} transition={{ delay: 0.1 }}>
                            Advancing AI Ethics and Governance
                        </motion.p>
                        <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
                            <Link to="/contact-us" aria-label="Explore SITE research services">
                                <Button variant="outline">Explore more</Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className='w-full mt-14 lg:w-[40%] lg:mt-0'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        aria-hidden="true"
                    >
                        <Lottie className='w-fit lg:w-[500px]' animationData={LottieFile} loop={true} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ResearchHome;
