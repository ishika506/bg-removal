import React from 'react';
import { assets } from '../../assets/assets'; // Make sure this path is correct
import './Upload.css'; // Optional: for styling

const Upload = () => {
  return (
    <div className="upload">
      <h1>See The Magic. Try Now</h1>
      <div className="upload-section">
        <input type="file" id="upload2" hidden />
        <label htmlFor="upload2" className="upload-btn">
          <img src={assets.upload_btn_icon} alt="Upload Icon" />
          <p>Upload your image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
