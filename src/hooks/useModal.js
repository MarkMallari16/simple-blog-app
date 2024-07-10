import React, { useState } from 'react'

const useModal = () => {
   
    return {
        isModalOpen,
        openModal,
        closeModal
    };
}

export default useModal