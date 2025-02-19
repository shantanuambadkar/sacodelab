import React from "react";
import SACodeLabLogo from "../styles/images/logo-no-background.png";
import "../styles/global.css";

const LogoImage: React.FC = () => {
  return (
    <img src={SACodeLabLogo} alt="SA CodeLab Logo" className="logo-img"/>
  );
};

export default LogoImage;