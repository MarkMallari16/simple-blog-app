import React, { createContext } from 'react'
import useBlog from '../hooks/useBlog';
export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
    const { blogs } = useBlog();
    return <BlogContext.Provider value={blogs}>
        {children}
    </BlogContext.Provider>
}

export default BlogProvider