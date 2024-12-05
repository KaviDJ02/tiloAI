import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/WS2'), 5000);
    }, [navigate]);

    return (
        <div className='wrapper center-element'>
            <motion.img
                src='/logo.png'
                height={120}
                width={120}
                initial={{ scale: 0.7 }}
                animate={{ scale: 1.0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
            />
        </div>
    );
};

export default Home;
