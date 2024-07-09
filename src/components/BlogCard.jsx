import React from 'react'

const BlogCard = () => {
    return (
        <div className="card ring-1 ring-zinc-700 ring-inset w-96 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Best Programming Language in 2024</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima praesentium recusandae quisquam explicabo odit nulla unde enim ipsa cumque.</p>
                <div className="card-actions justify-end mt-2">
                    <button className="btn btn-secondary">Read Full Blog</button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard