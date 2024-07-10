import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const params = useParams();

    console.log(params);
    return (
        <div>This is Blog Detail</div>
    )
}

export default BlogDetails