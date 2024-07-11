import React from 'react';
import useBlog from '../../hooks/useBlog';

const EditFormModal = ({
    singleBlog,
    fileInputRef,
    isEditOpen,
    onEditClose,
    title,
    image,
    description,
    errors,
    onImageChange,
    onTitleChange,
    onDescriptionChange
}) => {
    const { updateBlog } = useBlog();

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateBlog();
    };

    return (
        <dialog className={`modal ${isEditOpen ? 'modal-open' : ''}`}>
            <div className="modal-box">
                <h1 className='text-2xl mb-6 '>Update Blog</h1>
                <form onSubmit={handleEditSubmit}>
                    <div>
                        <h3 className="font-medium text-lg mb-1">Image:</h3>
                        <input
                            type="file"
                            onChange={onImageChange}
                            className="file-input file-input-bordered w-full"
                            ref={fileInputRef}
                        />
                        {errors.imageError && <p className='text-red-500 mt-1'>{errors.imageError}</p>}
                    </div>
                    <div className='mt-4'>
                        <h3 className="font-medium text-lg mb-1">Title:</h3>
                        <input
                            type="text"
                            placeholder="Enter Blog Title"
                            value={title}
                            onChange={onTitleChange}
                            className="input input-bordered w-full"
                        />
                        {errors.titleError && <p className='text-red-500 mt-1'>{errors.titleError}</p>}
                    </div>
                    <div className='mt-4'>
                        <h3 className="font-medium text-lg mb-1">Description:</h3>
                        <textarea
                            className="textarea textarea-bordered resize-none w-full h-52"
                            value={description}
                            onChange={onDescriptionChange}
                            placeholder="Enter Description"
                        ></textarea>
                        {errors.descriptionError && <p className='text-red-500 mt-1'>{errors.descriptionError}</p>}
                    </div>

                    <div className="modal-action">
                        <button type='button' className="btn" onClick={onEditClose}>Close</button>
                        <button type='submit' className="btn btn-secondary">Update</button>
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default EditFormModal;
