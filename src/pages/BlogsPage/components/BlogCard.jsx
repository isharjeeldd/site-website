import React from 'react';
import { paragraph } from '../../../styles/globals';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, date, title, description, id }) => {
    return (
        <>
            <div className="w-full">
                <Link key={id} to={`/blogs/${id}`}>
                    <div className="mb-6">
                        <div className="mb-6 overflow-hidden rounded">
                            <img src={image} alt="" className="w-full h-[300px] object-contain" />
                        </div>
                        <div>
                            {date && (
                                <span className="mb-5 inline-block rounded-full bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                                    {date}
                                </span>
                            )}
                            <h3>
                                <p className="mb-4 inline-block text-xl font-semibold text-black text-dark sm:text-2xl lg:text-xl xl:text-2xl" >
                                    {title}
                                </p>
                            </h3>
                            <p className={`${paragraph}`}>
                                {description}
                            </p>
                        </div>
                    </div>
                </ Link>
            </div>
        </>
    );
};

export default BlogCard;