import React from 'react';
import './CommonHeader.css'; // Import CSS file for styling
import smallLogo from './logo-white.png';

const CommonHeader = () => {
  return (
    <div className="header-container">
      <div>
        <img className="logo" src={smallLogo} alt="Black & White Logo" />
      </div>
    </div>
  );
};

export default CommonHeader;
