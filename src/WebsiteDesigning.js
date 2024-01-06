import React from 'react';
import './App.css';
import CommonHeader from './CommonHeader';
import './Work.css';
import webdesign from './innerpageimages/websitedesigning.gif';

function WebsiteDesigning() {
  return (
    <div>
      <div>
        <CommonHeader />
      </div>
      <div className="container">
        <div>
          <img
            className="innerimages"
            src={webdesign}
            alt="Website Designing"
          />
        </div>
        <div className="fontstyling">
          Welcome to SA CodeLab where imagination meets functionality. As a
          website designer, we sculpt pixels into immersive experiences. We
          craft virtual spaces that breathe life into ideas, weaving together
          seamless user interfaces and captivating visuals. Each design is a
          symphony of innovation, tailored to echo your brand's essence and
          resonate with your audience. With a palette of coding languages and an
          artist's eye for detail, we transform concepts into interactive
          realities. Let's embark on a journey where innovation knows no bounds,
          and your digital footprint becomes an unforgettable masterpiece.
        </div>
      </div>
    </div>
  );
}

export default WebsiteDesigning;
