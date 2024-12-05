import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Page1 = () => {
    const [currentImage, setCurrentImage] = useState('/Hello.png');
    const [isInitialImage, setIsInitialImage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImage('/description.png');
            setIsInitialImage(false);
        }, 3000); 
        return () => clearTimeout(timer);
    }, []); 

    const imageVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 } 
    };

    return (
        <motion.div
            className="wrapper animated-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <motion.div
                className="black-mask"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1 }}
            ></motion.div>

            <div className="wrapper center-element">
                <motion.img
                    src={currentImage}
                    key={currentImage} 
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit" 
                    transition={{ duration: isInitialImage ? 1.5 : 1, ease: "easeOut" }} 
                />
            </div>
        </motion.div>
    );
};

export default Page1;
