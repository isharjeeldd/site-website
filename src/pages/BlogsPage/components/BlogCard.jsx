import { paragraph } from '../../../styles/globals';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../../../components/ui/card';

const BlogCard = ({ image, date, title, description, id }) => {
    return (
        <article className="w-full">
            <Link to={`/blogs/${id}`} aria-label={`Read article: ${title}`}>
                <Card className="border-0 shadow-none bg-transparent hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-6 overflow-hidden rounded">
                        <img
                            src={image}
                            alt={title || "Blog post image"}
                            className="w-full h-[300px] object-contain"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <CardContent className="p-0">
                        {date && (
                            <time
                                className="mb-5 inline-block rounded-full bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white"
                                dateTime="2023-12-22"
                            >
                                {date}
                            </time>
                        )}
                        <h3 className="mb-4 text-xl font-semibold text-foreground sm:text-2xl lg:text-xl xl:text-2xl">
                            {title}
                        </h3>
                        <p className={`${paragraph} dark:text-muted-foreground`}>
                            {description}
                        </p>
                    </CardContent>
                </Card>
            </Link>
        </article>
    );
};

export default BlogCard;
