import { useEffect, useRef, useState } from 'react';


const useBlog = () => {


    const initialBlogs = () => {
        const initialBlog = localStorage.getItem('blogs');

        return JSON.parse(initialBlog) || [];
    }
    const fileInputRef = useRef(null);

    const [blogs, setBlogs] = useState(initialBlogs);
    const [image, setImage] = useState("");
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("blogs", JSON.stringify(blogs))
    }, [blogs])

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const validTypes = ["image/jpeg", "image/png", "image/gif"];

        if (file) {
            if (!validTypes.includes(file.type)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    imageError: "Invalid file type. Only JPG, PNG, and GIF are allowed."
                }));
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                console.log(reader.result);
            };
            reader.readAsDataURL(file);
            clearErrors("imageError");

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

        if (!image) {
            newErrors.imageError = "Image is required!";
            isValid = false;
        }
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
            return false;
        }

        setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
        setImage("")
        setTitle("");
        setDescription("");
        setErrors({});

        if (fileInputRef.current) fileInputRef.current.value = "";

        setIsModalOpen(false)
        return true;
    };

    return {
        isModalOpen,
        openModal,
        closeModal,
        blogs,
        setBlogs,
        fileInputRef,
        image,
        handleImageChange,
        title,
        handleTitleChange,
        description,
        handleDescriptionChange,
        errors,
        addBlog,

    };
};

export default useBlog;
