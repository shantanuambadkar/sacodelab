import React from 'react';
import './App.css';
import './Work.css';
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';

function AboutUs() {
  const navigate = useNavigate();

  function loadFirstPage() {
    navigate('/');
  }

  function loadContactUs() {
    navigate('/staytuned');
  }

  return (
    <div>
      {/* <div>
        <CommonHeader />
      </div> */}
      <div className="container no-header">
        <div>
          <img
            className="innerimages-logo hover"
            src={logo}
            alt="SA CodeLab Logo"
            onClick={loadFirstPage}
          />
        </div>
        <div>
          Welcome to{' '}
          <Link to="/" className="unicaFont">
            SA CodeLab
          </Link>
          's creative universe, where a fusion of talent and expertise converges
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
        </div>
        <div className="button-div">
          <button onClick={loadContactUs}>
            CLICK HERE TO CHECK OUR WHERE ABOUTS..
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
