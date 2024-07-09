import { useEffect, useState } from 'react';
import useModal from './useModal';

const useBlog = () => {
    const { closeModal: closeSucessModal } = useModal();

    const initialBlogs = () => {
        const initialBlog = localStorage.getItem('blogs');

        return JSON.parse(initialBlog) || [];
    }
    const [blogs, setBlogs] = useState(initialBlogs);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        localStorage.setItem("blogs",JSON.stringify(blogs))
    }, [blogs])

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        clearErrors('titleError');
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        clearErrors('descriptionError');
    };

    const clearErrors = (fieldName) => {
        if (errors[fieldName]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [fieldName]: ''
            }));
        }
    };

    const validateField = () => {
        let isValid = true;
        const newErrors = {};

        if (title.trim() === '') {
            newErrors.titleError = 'Title Field is required!';
            isValid = false;
        }

        if (description.trim() === '') {
            newErrors.descriptionError = 'Description Field is required!';
            isValid = false;
        }

        if (!isValid) {
            setErrors(prevErrors => ({
                ...prevErrors,
                ...newErrors
            }));
        }

        return isValid;
    };

    const addBlog = () => {
        const newBlog = {
            title,
            description,
            date: new Date().getFullYear()
        };

        if (!validateField()) {
            return;
        }

        setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
        setTitle('');
        setDescription('');
        setErrors({});
        closeSucessModal();
    };
    console.log(blogs)
    return {
        blogs,
        setBlogs,
        title,
        handleTitleChange,
        description,
        handleDescriptionChange,
        errors,
        addBlog,
        closeSucessModal
    };
};

export default useBlog;
