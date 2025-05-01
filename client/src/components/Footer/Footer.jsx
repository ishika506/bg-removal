import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <img src={assets.logo} alt="Logo" className="footer-logo" />
      <p className="footer-text">© bgremoval | All rights reserved</p>
      <div className="footer-icons">
        <img src={assets.facebook_icon} alt="Facebook" />
        <img src={assets.twitter_icon} alt="Twitter" />
        <img src={assets.google_plus_icon} alt="Google Plus" />
      </div>
    </div>
  );
};

export default Footer;
