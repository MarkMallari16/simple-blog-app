import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 flex justify-between ">
            <div className="btn btn-ghost text-xl">DevDiary</div>
            <div className='btn btn-secondary flex items-center'>
                <span className='hidden lg:block'> Create Blog</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    )
}

export default Navbar