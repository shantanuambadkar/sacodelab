import React from 'react';
import './PageMotion.css';
import './App.css';
import CommonHeader from './CommonHeader';
import { Link, useNavigate } from 'react-router-dom';

const OurWork = () => {
  const navigate = useNavigate();

  function loadForm() {
    navigate('/enquiryform');
  }
  function loadKnowUs() {
    navigate('/aboutus');
  }

  return (
    <div className="unicaFont">
      <div>
        <CommonHeader />
      </div>
      <div className="page">
        <p className="services-font">OUR WORK</p>
        <div>
          <Link to="/webdesigning" className="services-font-small">
            WEBSITE DESIGNING
          </Link>
        </div>
        <div>
          <Link to="/uiux" className="services-font-small">
            UI / UX CONSULTATION
          </Link>
        </div>
        <div>
          <Link to="/graphicdesigning" className="services-font-small">
            GRAPHIC DESIGNING
          </Link>
        </div>
        <div>
          <Link to="/brandcreation" className="services-font-small">
            BRAND CREATION
          </Link>
        </div>
        <div className="button-div">
          <button onClick={loadForm}>Click here to enquire more..</button>
        </div>
        <p className="services-font hover" onClick={loadKnowUs}>
          ABOUT US
        </p>
      </div>
    </div>
  );
};

export default OurWork;
