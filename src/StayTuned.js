import React, { useEffect } from 'react';
import comingsoon from './coming_soon.gif';
import './App.css';
import { useNavigate } from 'react-router-dom';

function StayTuned() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/ourwork');
    }, 3000);
  });
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={comingsoon} alt="Coming Soon Animation" />
        </div>
        <div>
          <p className="animated-text">Stay Tuned. We are loading...</p>
        </div>
      </header>
    </div>
  );
}

export default StayTuned;
