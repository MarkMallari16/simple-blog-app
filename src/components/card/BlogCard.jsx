import React from 'react'

const BlogCard = ({ title, description, date }) => {
    return (
        <div className="card ring-1 ring-zinc-700 ring-inset w-full lg:w-96 shadow-xl">
            <figure>
                <img
                    src="https://img.freepik.com/free-photo/it-specialist-checking-code-computer-dark-office-night_1098-18699.jpg?t=st=1720537748~exp=1720541348~hmac=07e6b3bf227c7594eb44ae621af9e262a9a1e2041ce70aa9bdaf16d96ff7e11c&w=900"
                    alt="Shoes" />
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