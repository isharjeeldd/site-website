import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '../../../constants/blogs';
import { container, paragraph } from '../../../styles/globals';
import SEO from '../../../components/SEO';

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        return (
            <div className={`${container} py-[150px] text-center`} role="alert">
                <h1 className="text-2xl font-semibold text-foreground">Blog not found</h1>
                <p className="mt-4 text-muted-foreground">The article you are looking for does not exist.</p>
            </div>
        );
    }

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: blog.title,
        description: blog.description,
        image: blog.image,
        datePublished: "2023-12-22",
        author: {
            "@type": "Organization",
            name: "SITE - Strategic Institute of Technology Ethics",
        },
        publisher: {
            "@type": "Organization",
            name: "SITE",
        },
    };

    const formatContent = (content) => {
        const contentArray = content.split(/\*\*(.*?)\*\*/g);
        return contentArray.map((text, index) => {
            if (index % 2 !== 0) {
                return <h2 key={index} className='font-semibold text-foreground text-[20px] leading-[30px] mb-4'>{text}</h2>;
            }

            const formattedText = text.split(/\n/g).filter((line) => line.trim() !== '');

            return formattedText.map((line, i) => {
                if (line.startsWith('- ')) {
                    return (
                        <ul key={`ul-${index}-${i}`} className="list-disc list-inside mb-4 pl-4">
                            <li className="dark:text-muted-foreground">{line.replace('- ', '')}</li>
                        </ul>
                    );
                } else if (line.match(/^\d+\./)) {
                    return (
                        <ol key={`ol-${index}-${i}`} className="list-decimal list-inside mb-4 pl-4">
                            <li className="dark:text-muted-foreground">{line.replace(/^\d+\.\s*/, '')}</li>
                        </ol>
                    );
                } else {
                    return <p key={`p-${index}-${i}`} className={`${paragraph} mb-6 dark:text-muted-foreground`}>{line}</p>;
                }
            });
        });
    };

    const imageVariants = {
        hidden: { opacity: 0.5, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const dateVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <article className={`${container} py-[150px]`}>
            <SEO
                title={blog.title}
                description={blog.description}
                keywords={`${blog.title}, AI ethics, ethical AI, SITE blog`}
                url={`https://site-ethics.org/blogs/${blog.id}`}
                image={blog.image}
                type="article"
                structuredData={blogSchema}
            />

            <motion.img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[500px] object-cover rounded-lg"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                loading="eager"
            />

            <motion.p
                className="text-muted-foreground text-[16px] text-end mt-4 italic"
                variants={dateVariants}
                initial="hidden"
                animate="visible"
            >
                <time dateTime="2023-12-22">{blog.date}</time>
            </motion.p>

            <motion.h1
                className='text-foreground text-[36px] leading-[50px] lg:leading-[70px] lg:text-[42px] font-semibold mt-6'
                variants={titleVariants}
                initial="hidden"
                animate="visible"
            >
                {blog.title}
            </motion.h1>

            <div className="blog-content text-[18px] leading-[32px] mt-8">
                {formatContent(blog.content)}
            </div>
        </article>
    );
};

export default BlogDetails;
