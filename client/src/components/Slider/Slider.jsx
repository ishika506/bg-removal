import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Slider.css';

const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="slider">
      <h1>
        Remove Background With High <br /> Quality And Accuracy
      </h1>
      <div className="slider-container">
        <img
          src={assets.image_w_bg}
          className="slider-image"
          alt="With Background"
        />
        <img
          src={assets.image_wo_bg}
          className="slider-image slider-top"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          alt="Without Background"
        />
        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
          className="slider-range"
        />
      </div>
    </div>
  );
};

export default Slider;
