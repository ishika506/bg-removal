import React from 'react';
import { assets } from '../../assets/assets';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>
          Remove the<br />
          <span>background </span>
          from <br />images for free.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, unde deleniti.<br />
          Illum sapiente praesentium, doloremque soluta fugit adipisci unde magnam minima nihil quam
          libero voluptates odio reiciendis impedit! At, adipisci.
        </p>
        <div className="upload-section">
          <input type="file" id="upload1" hidden />
          <label htmlFor="upload1" className="upload-btn">
            <img src={assets.upload_btn_icon} alt="Upload Icon" />
            <p>Upload your image</p>
          </label>
        </div>
      </div>
      <div className="header-right">
        <img src={assets.header_img} alt=''/>
      </div>
    </div>
  );
};

export default Header;
