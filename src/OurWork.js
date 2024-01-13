import React from 'react';
import './PageMotion.css';
import './App.css';
import './Work.css';
import CommonHeader from './CommonHeader';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurWork = () => {
  const navigate = useNavigate();

  function loadForm() {
    navigate('/enquiryform');
  }
  function loadKnowUs() {
    navigate('/aboutus');
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="unicaFont">
      <div>
        <CommonHeader />
      </div>
      <div className="page">
        <p className="services-font">OUR WORK</p>
        <Slider {...settings}>
          <div className="carousel-div">
            <Link to="/webdesigning" className="services-font-small">
              WEBSITE DESIGNING
            </Link>
          </div>
          <div className="carousel-div">
            <Link to="/uiux" className="services-font-small">
              UI / UX CONSULTATION
            </Link>
          </div>
          <div className="carousel-div">
            <Link to="/graphicdesigning" className="services-font-small">
              GRAPHIC DESIGNING
            </Link>
          </div>
          <div className="carousel-div">
            <Link to="/brandcreation" className="services-font-small">
              BRAND CREATION
            </Link>
          </div>
        </Slider>
        <div className="button-div">
          <button onClick={loadForm}>CLICK HERE TO ENQUIRE MORE..</button>
        </div>
        <p className="services-font hover" onClick={loadKnowUs}>
          ABOUT US
        </p>
      </div>
    </div>
  );
};

export default OurWork;
