import React from 'react';
import comingsoon from './coming_soon.gif';
import './App.css';

function StayTuned() {
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
