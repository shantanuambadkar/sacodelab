import React from 'react';
import './CommonHeader.css'; // Import CSS file for styling
import smallLogo from './logo-white.png';
import { useNavigate } from 'react-router-dom';

const CommonHeader = () => {
  const navigate = useNavigate();
  function loadOurWork() {
    navigate('/ourwork');
  }
  return (
    <div className="header-container">
      <div>
        <img
          className="logo"
          src={smallLogo}
          alt="Black & White Logo"
          onClick={loadOurWork}
        />
      </div>
    </div>
  );
};

export default CommonHeader;
