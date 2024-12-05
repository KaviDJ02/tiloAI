import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Page6 = () => {
    let wTilo = "/wTilo.png";
    return (
        <motion.div
            className="wrapper animated-gradient"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1.5, ease: "easeOut"}}
        >
            <div className="circle-wrapper">
                <div className="image-container">
                    <img className="icon" src={wTilo} alt="Icon"/>
                </div>
            </div>

        </motion.div>
    )
}

export default Page6