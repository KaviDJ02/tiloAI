import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Page3 = () => {
  return (
    <motion.div
            className="wrapper animated-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        > 
        <div className="wrapper center-element">
               
        </div>
        </motion.div>
  )
}

export default Page3