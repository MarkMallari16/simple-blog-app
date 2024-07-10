import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ image, title, description, date }) => {
    return (
        <div className="card ring-1 ring-zinc-700 ring-inset shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="blog-image"
                    className='object-cover select-none' />
            </figure>
            <div className="card-body w-full">
                <h2 className="card-title">{title}</h2>
                <p className='text-gray-300  line-clamp-1'>{description}</p>
                <div className=" card-actions justify-between items-center mt-2">
                    <div className='text-gray-300'>{date}</div>
                    <Link to={`/blogs/${title}`} className="btn btn-secondary">
                        <span>Read Full Blog</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard