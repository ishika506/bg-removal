import React from 'react';
import { assets } from '../../assets/assets';
import './Result.css';

const Result = () => {
  return (
    <div className="result-container">
      <div className="result-section">
        <p>Original</p>
        <div className="image-box">
          <img
            src={assets.image_w_bg}
            alt="Original"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className="result-section">
        <p>Background Removed</p>
        <div className="image-box bg-layer">
          <div className="loader"></div>
        </div>
      </div>

      <button>Try another image</button>
      <a href=''>Download image</a>
    </div>
  );
};

export default Result;
