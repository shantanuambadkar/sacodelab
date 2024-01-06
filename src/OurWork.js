import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PageMotion.css'; // Create a CSS file for styling
import './App.css';
import CommonHeader from './CommonHeader';
import { Link } from 'react-router-dom';

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
              <p className="services-font">OUR WORK</p>
              <motion.div
                initial={{ opacity: 0, rotateY: -360 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 360 }}
                transition={{ duration: 3 }}
              >
                <div>
                  <Link to="/staytuned" className="services-font-small">
                    WEBSITE DESIGNING
                  </Link>
                </div>
                <div>
                  <Link to="/staytuned" className="services-font-small">
                    UI / UX CONSULTATION
                  </Link>
                </div>
                <div>
                  <Link to="/staytuned" className="services-font-small">
                    LOGO DESIGNING
                  </Link>
                </div>
                <div>
                  <Link to="/staytuned" className="services-font-small">
                    BRAND CREATION
                  </Link>
                </div>
                {/* <div>
                  <Link to="/staytuned" className="services-font-small">
                    PHOTOGRAPHY
                  </Link>
                </div>
                <div>
                  <Link to="/staytuned" className="services-font-small">
                    VIDEOGRAPHY
                  </Link>
                </div> */}
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
