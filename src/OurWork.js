import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PageMotion.css'; // Create a CSS file for styling
import './App.css';
import CommonHeader from './CommonHeader';

const OurWork = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to simulate loading and trigger the page turn effect
    setTimeout(() => {
      setIsVisible(true);
    }, 1); // Adjust the delay as needed
  }, []);

  return (
    <div>
      <div>
        <CommonHeader />
      </div>
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
              <p className="services-font">Our Work</p>
              <motion.div
                initial={{ opacity: 0, rotateY: -180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 180 }}
                transition={{ duration: 2 }}
              >
                <div>
                  <p className="services-font-small">Website Designing</p>
                  <p className="services-font-small">UI / UX Consultation</p>
                  <p className="services-font-small">Logo Designing</p>
                  <p className="services-font-small">Brand Creation</p>
                  <p className="services-font-small">Photography</p>
                  <p className="services-font-small">Videography</p>
                </div>
                <div className="button-div">
                  <button>Click here to enquire more..</button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurWork;
