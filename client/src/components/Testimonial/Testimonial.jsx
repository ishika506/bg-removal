import React from 'react';
import { testimonialsData } from '../../assets/assets';
import './Testimonial.css'; // Optional: for styling

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h1>Customer Testimonials</h1>
      <div className="testimonial-list">
        {testimonialsData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="quote-mark">“</p>
            <p className="testimonial-text">{item.text}</p>
            <img className="testimonial-image" src={item.image} alt={item.author} />
            <div className="testimonial-author">
              <p className="author-name">{item.author}</p>
              <p className="author-title">{item.jobTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
