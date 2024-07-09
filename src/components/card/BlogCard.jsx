import React from 'react'

const BlogCard = ({ image, title, description, date }) => {
    return (
        <div className="card ring-1 ring-zinc-700 ring-inset w-full lg:w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="blog-image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-gray-300'>{description}</p>
                <div className=" card-actions justify-between items-center mt-2">
                    <div className='text-gray-300'>{date}</div>
                    <button className="btn btn-secondary">Read Full Blog</button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard