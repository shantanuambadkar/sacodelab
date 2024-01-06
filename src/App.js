import React, { useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/ourwork');
    }, 3000);
  });

  return (
    <div className="App">
      <header className="App-header">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, rotateY: -360 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 360 }}
            transition={{ duration: 1.5 }}
          >
            <img className="App-logo" src={logo} alt="SA CodeLab Logo" />
          </motion.div>
        </AnimatePresence>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
