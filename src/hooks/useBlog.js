import { useEffect, useState } from 'react';
import useModal from './useModal';

const useBlog = () => {
    const { closeModal: closeSuccessModal } = useModal();

    const initialBlogs = () => {
        const initialBlog = localStorage.getItem('blogs');

        return JSON.parse(initialBlog) || [];
    }
    const [blogs, setBlogs] = useState(initialBlogs);
    const [image, setImage] = useState("");
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        localStorage.setItem("blogs", JSON.stringify(blogs))
    }, [blogs])
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file)
        }
    }
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
            image,
            title,
            description,
            date: new Date().toLocaleDateString()
        };

        if (!validateField()) {
            return;
        }

        setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
        setImage("")
        setTitle("");
        setDescription("");
        setErrors({});
        
        closeSuccessModal();
      
    };

    return {
        blogs,
        setBlogs,
        image,
        handleImageChange,
        title,
        handleTitleChange,
        description,
        handleDescriptionChange,
        errors,
        addBlog,
        closeSuccessModal
    };
};

export default useBlog;
