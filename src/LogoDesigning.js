import React from 'react';
import './App.css';
import CommonHeader from './CommonHeader';
import './Work.css';
import logodesign from './innerpageimages/logodesigning.gif';

function LogoDesigning() {
  return (
    <div>
      <div>
        <CommonHeader />
      </div>
      <div className="container">
        <div>
          <img
            className="innerimages-uiux"
            src={logodesign}
            alt="Graphic Designing"
          />
        </div>
        <div className="fontstyling">
          Welcome to a realm where pixels dance and colors tell stories. As a
          graphic designer, we weave imagination into visual tapestries,
          crafting compelling narratives through artistry and innovation. Each
          stroke, curve, and hue is a brushstroke in a larger canvas of
          creativity. From logos that echo your brand's soul to designs that
          breathe life into your vision, we merge aesthetics with purpose. we
          embrace the challenge of turning concepts into captivating visuals,
          seamlessly blending creativity and strategy. Let's embark on a
          creative expedition where imagination knows no bounds, and together,
          we'll paint a vibrant, unforgettable digital landscape that resonates
          with your audience.
        </div>
      </div>
    </div>
  );
}

export default LogoDesigning;
