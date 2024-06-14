import { useState, useEffect } from 'react';
import logo from './png/logo-no-background.png';
import './App.css';

function App() {
  const [showLogo, setShowLogo] = useState(false);
  const [beforeShowAboutUs, setBeforeShowAboutUs] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);

  useEffect(() => {
    // Initially show the logo
    setShowLogo(true);

    // After 2 seconds, animate logo to top right corner and show 'About Us' section
    const beforeTimer = setTimeout(() => {
      setBeforeShowAboutUs(true);
    }, 1500);

    const timer = setTimeout(() => {
      setShowAboutUs(true);
    }, 2000);

    return () => clearTimeout(timer, beforeTimer);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className={`App ${showAboutUs ? 'show-about-us' : ''}`}>
      <header className="App-header">
        {showLogo && (
          <img src={logo} className={beforeShowAboutUs ? "App-logo animate-logo": "App-logo"} alt="logo" />
        )}
        {showAboutUs && (
          <div className="about-us-section">
            <h2>About Us</h2>
            <p>Welcome to SA CodeLab's creative universe, where a fusion of talent and expertise converges
              to redefine digital landscapes. We are a dynamic team of visionary
              website designers, artistic graphic designers, intuitive UI/UX
              consultants, and insightful brand creators. Together, we craft
              immersive experiences that transcend the ordinary, breathing life into
              concepts and elevating brands to new heights. Our collaborative
              synergy blends aesthetics, functionality, and innovation seamlessly,
              forging a path where imagination meets strategy. With a shared passion
              for innovation and a commitment to excellence, we embark on each
              project as a canvas to weave stories that captivate, engage, and leave
              an indelible mark on the digital world.
            </p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
