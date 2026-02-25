import { container } from '../../../styles/globals';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { motion } from 'framer-motion';

const ConsultancyHome = () => {
    const h1Variants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1, x: 0,
            transition: { duration: 1, ease: 'easeOut' }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 1, ease: 'easeOut' }
        }
    };

    return (
        <section className='bg-consultancy-bg h-[800px] bg-no-repeat bg-cover flex items-center justify-center' aria-labelledby="consultancy-heading">
            <div className={`${container}`}>
                <motion.h1
                    id="consultancy-heading"
                    className='text-white text-start w-full text-[36px] leading-[1.2em] lg:w-[60%] mb-6 lg:text-[56px] lg:leading-[1.2em] font-bold'
                    initial="hidden"
                    animate="visible"
                    variants={h1Variants}
                >
                    Lead the Charge in Ethical AI Innovation
                </motion.h1>

                <Link to="/consultancy" aria-label="Explore our consultancy services">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={buttonVariants}
                    >
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                            Explore
                        </Button>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
};

export default ConsultancyHome;
