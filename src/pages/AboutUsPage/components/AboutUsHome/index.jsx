import { motion } from 'framer-motion';
import { container, paragraph } from '../../../../styles/globals';

const AboutUsHome = () => {
    const h1Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const h2Variants = {
        hidden: { x: 50 },
        visible: { x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    const pVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section aria-labelledby="about-us-heading">
            <div className={`${container}`}>
                <div className="flex flex-col items-center justify-center gap-5 h-[600px]">
                    <motion.p
                        className='text-muted-foreground text-[16px] text-center'
                        variants={h1Variants}
                        initial="hidden"
                        animate="visible"
                    >
                        About us
                    </motion.p>
                    <motion.h1
                        id="about-us-heading"
                        className='text-foreground text-center text-[56px] leading-[1.2em] font-bold'
                        variants={h2Variants}
                        initial="hidden"
                        animate="visible"
                    >
                        Shaping the Future of Ethical AI
                    </motion.h1>
                    <motion.p
                        className={`${paragraph} text-center mx-auto w-full sm:w-[60%] mt-3 dark:text-muted-foreground`}
                        variants={pVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        SITE envisions a world where artificial intelligence enhances human potential while adhering to the highest ethical standards.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default AboutUsHome;
