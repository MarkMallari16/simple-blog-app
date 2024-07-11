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
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [blogTitle, setBlogTitle] = useState("");
    const [singleBlog, setSingleBlog] = useState({});

    useEffect(() => {
        localStorage.setItem("blogs", JSON.stringify(blogs))
    }, [blogs])

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);

    }

    const openEditModal = (title) => {
        setIsEditModalOpen(true);
        const blog = blogs.find((blog) => blog.title === title);

        if (blog) {
            setBlogTitle(title)
        }
    }

    const closeEditModal = () => {
        setIsEditModalOpen(false);
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
    const resetForm = () => {
        setImage("")
        setTitle("");
        setDescription("");
        setErrors({});

        if (fileInputRef.current) fileInputRef.current.value = "";

    }
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

        setBlogs((prevBlogs) => [newBlog, ...prevBlogs,]);
        resetForm();

        return true;
    };
    const updateBlog = () => {
        setBlogs((previousBlogs) =>
            previousBlogs.map((blog) =>
                blog.title === blogTitle ? { ...blog, image, title, description } : blog)
        );
        resetForm(); // Ensure resetForm clears the form and related state
    };
    return {
        isModalOpen,
        openModal,
        closeModal,
        isEditModalOpen,
        blogTitle,
        openEditModal,
        closeEditModal,
        singleBlog,
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
        updateBlog

    };
};

export default useBlog;
