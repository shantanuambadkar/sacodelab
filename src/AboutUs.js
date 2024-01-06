import React from 'react';
import './App.css';
/* import CommonHeader from './CommonHeader'; */
import './Work.css';
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function AboutUs() {
  const isVisible = true;

  const navigate = useNavigate();

  function loadFirstPage() {
    navigate('/');
  }

  return (
    <div>
      {/* <div>
        <CommonHeader />
      </div> */}
      <div className="container no-header">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, rotateY: -360 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 360 }}
              transition={{ duration: 1.5 }}
            >
              <div>
                <img
                  className="innerimages-logo hover"
                  src={logo}
                  alt="SA CodeLab Logo"
                  onClick={loadFirstPage}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div>
          Welcome to our creative universe, where a fusion of talent and
          expertise converges to redefine digital landscapes. We are a dynamic
          team of visionary website designers, artistic graphic designers,
          intuitive UI/UX consultants, and insightful brand creators. Together,
          we craft immersive experiences that transcend the ordinary, breathing
          life into concepts and elevating brands to new heights. Our
          collaborative synergy blends aesthetics, functionality, and innovation
          seamlessly, forging a path where imagination meets strategy. With a
          shared passion for innovation and a commitment to excellence, we
          embark on each project as a canvas to weave stories that captivate,
          engage, and leave an indelible mark on the digital world.
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
