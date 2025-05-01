import React from 'react';
import { assets ,plans} from '../../assets/assets';
import './BuyCredit.css';

const BuyCredit = () => {
  return (
    <div className="buy-credit">
      <button className="plan-button">Our Plans</button>
      <h1>Choose the plan that's right for you</h1>
      <div className="plan-container">
        {plans.map((item, index) => (
          <div key={index} className="plan-card">
            <img src={assets.logo_icon} alt="Icon" />
            <p className="plan-title">{item.id}</p>
            <p className="plan-desc">{item.desc}</p>
            <p className="plan-price">${item.price}</p>
            <p className="plan-credits">{item.credits}credits</p>
            <button className="purchase-button">Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
