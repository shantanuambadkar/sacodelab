import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PageMotion.css'; // Create a CSS file for styling
import './App.css';

const OurWork = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to simulate loading and trigger the page turn effect
    setTimeout(() => {
      setIsVisible(true);
    }, 1); // Adjust the delay as needed
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, rotateY: -180 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: 180 }}
          transition={{ duration: 1.5 }}
          className="page"
        >
          <div>
            <h1>Our Work</h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OurWork;
