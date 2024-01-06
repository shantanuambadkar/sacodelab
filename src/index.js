import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import StayTuned from './StayTuned';
import reportWebVitals from './reportWebVitals';
import OurWork from './OurWork';
import EnquiryForm from './EnquiryForm';
import AboutUs from './AboutUs';
import WebsiteDesigning from './WebsiteDesigning';
import UIUXConsultation from './UIUXConsultation';
import LogoDesigning from './LogoDesigning';
import BrandCreation from './BrandCreation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/staytuned" element={<StayTuned />}></Route>
        <Route path="/ourwork" element={<OurWork />}></Route>
        <Route path="/enquiryform" element={<EnquiryForm />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/webdesigning" element={<WebsiteDesigning />}></Route>
        <Route path="/uiux" element={<UIUXConsultation />}></Route>
        <Route path="/graphicdesigning" element={<LogoDesigning />}></Route>
        <Route path="/brandcreation" element={<BrandCreation />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
