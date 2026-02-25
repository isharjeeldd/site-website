import { container, paragraph } from '../../styles/globals';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import SEO from '../SEO';

const ContactUs = () => {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact SITE",
        description: "Get in touch with SITE for AI ethics consultancy and research services.",
        mainEntity: {
            "@type": "Organization",
            name: "SITE - Strategic Institute of Technology Ethics",
        },
    };

    return (
        <>
            <SEO
                title="Contact Us"
                description="Get in touch with SITE for AI ethics consultancy, governance advisory, and research services. Transform your AI challenges into opportunities."
                keywords="contact SITE, AI ethics consultancy, AI governance advisory, ethical AI services"
                url="https://site-ethics.org/contact-us"
                structuredData={contactSchema}
            />
            <section className={`${container} py-[150px]`} aria-labelledby="contact-heading">
                <div className='flex flex-col items-center justify-center gap-5 py-14'>
                    <h1 id="contact-heading" className='text-foreground text-center text-[40px] lg:text-[56px] leading-[1.2em] font-semibold'>
                        Transforming AI challenges into opportunities for innovation
                    </h1>
                    <p className={`${paragraph} mx-auto text-center w-full lg:w-[75%] mt-3 dark:text-muted-foreground`}>
                        In the fast-paced world of artificial intelligence, challenges are inevitable, but they also open doors to innovation. If you&apos;re facing AI challenges and need expert guidance, reach out to us through the form&mdash;our team is here to help you transform those challenges into opportunities.
                    </p>
                </div>
            </section>
            <section className='bg-contact-us-bg h-auto min-h-[700px] w-full lg:w-[80%] mx-auto bg-no-repeat bg-cover flex items-center mb-16 py-16' aria-labelledby="contact-form-heading">
                <div className={`${container}`}>
                    <div className="flex flex-wrap lg:flex-nowrap items-center">
                        <div className="w-full lg:w-[40%]">
                            <h2 id="contact-form-heading" className='font-medium text-white text-2xl'>Reach out to us</h2>
                            <p className='text-gray-300 leading-8 mt-6'>
                                Allow visitors to easily reach out to us by filling out the contact form below. We value your feedback and inquiries and are here to assist you with any questions you may have regarding our services or ethical AI practices.
                            </p>
                        </div>
                        <div className="w-full lg:w-[60%] flex mt-14 lg:mt-0 justify-center">
                            <form className="w-full max-w-lg" aria-label="Contact form">
                                <div className="mb-10">
                                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="contact-name">
                                        Enter your name
                                    </label>
                                    <Input
                                        className="bg-transparent border-0 border-b border-gray-500 rounded-none text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-white"
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        autoComplete="name"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div className="mb-10">
                                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="contact-email">
                                        Enter your email
                                    </label>
                                    <Input
                                        className="bg-transparent border-0 border-b border-gray-500 rounded-none text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-white"
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        autoComplete="email"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="contact-message">
                                        Type your message here
                                    </label>
                                    <Textarea
                                        className="bg-transparent border-0 border-b border-gray-500 rounded-none text-white placeholder:text-gray-400 resize-none focus-visible:ring-0 focus-visible:border-white"
                                        id="contact-message"
                                        name="message"
                                        placeholder="Type your message here"
                                        rows="4"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <Button type="submit" variant="outline" className="border-white text-white hover:bg-white hover:text-primary mt-4">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
