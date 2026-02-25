import BlogList from './components/BlogList';
import SEO from '../../components/SEO';

const BlogsPage = () => {
    return (
        <>
            <SEO
                title="Blogs &amp; Publications"
                description="Read SITE's latest insights on AI ethics, governance, and responsible innovation. Thought leadership and research on ethical AI development."
                keywords="AI ethics blog, AI governance articles, ethical AI publications, AI research insights, responsible AI"
                url="https://site-ethics.org/blogs"
            />
            <BlogList />
        </>
    );
};

export default BlogsPage;
