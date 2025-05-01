import React from 'react';
import { assets } from '../../assets/assets';
import './Steps.css';

const Steps = () => {
  return (
    <div className="steps">
      <h1 className="steps-title">
        Steps to remove background <br /> image in seconds
      </h1>

      <div className="steps-container">
        <div className="step">
          <img src={assets.upload_icon} alt="Upload Icon" />
          <p className="step-title">Upload Image</p>
          <p className="step-desc">This is demo</p>
        </div>

        <div className="step">
          <img src={assets.remove_bg_icon} alt="Remove Icon" />
          <p className="step-title">Remove Background</p>
          <p className="step-desc">This is demo</p>
        </div>

        <div className="step">
          <img src={assets.download_icon} alt="Download Icon" />
          <p className="step-title">Download Image</p>
          <p className="step-desc">This is demo</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
