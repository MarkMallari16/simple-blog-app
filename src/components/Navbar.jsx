import React from 'react'
import FormModal from './modal/FormModal';
import useBlog from '../hooks/useBlog';

const Navbar = () => {
    const { openModal, isModalOpen, closeModal } = useBlog();
    return (
        <div className="navbar bg-base-100 flex justify-between p-6">
            <div className="btn btn-ghost text-2xl">DevDiary</div>
            <div className='btn btn-secondary flex items-center' onClick={openModal}>
                <span className='hidden lg:block'> Create Blog</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>
            </div>
            <FormModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default Navbar