// usePopup.js

import { useState } from 'react';

const usePopup = (animationDuration = 300) => {
    const [currentPopup, setCurrentPopup] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const showPopup = (popupType) => {
        setCurrentPopup(popupType);
        setIsAnimating(false);
    };

    const hidePopup = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentPopup(null);
            setIsAnimating(false);
        }, animationDuration);
    };

    const togglePopup = (popupType) => {
        if (currentPopup === popupType) {
            hidePopup();
        } else {
            showPopup(popupType);
        }
    };

    return {
        currentPopup,
        isAnimating,
        togglePopup
    };
};

export default usePopup; // Export the function itself, not the result of the function
