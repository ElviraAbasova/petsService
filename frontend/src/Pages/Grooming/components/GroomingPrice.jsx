import React from "react";
import paw from "../../../assets/images/pngwing.com (29).png";

const GroomingPrice = () => {
  return (
    <section id="groomPrice">
      <div className="container">
        <div className="title">
          <h3>Price Table</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="prices">
          <div className="price">
            <div className="top">
              <h4>$9.99</h4>
              <h5>Basic Package</h5>
              <div className="line"></div>
            </div>
            <ul>
              <li>Bath & Brush</li>
              <li>Custom Meals</li>
              <li>Day Care</li>
            </ul>
          </div>
          <div className="price">
            <div className="top">
              <h4>$19.99 </h4>
              <h5>Advanced Package</h5>
              <div className="line"></div>
            </div>
            <ul>
              <li>Massage & Spa</li>
              <li>Handstripping</li>
              <li>Bath & Brush</li>
              <li>Custom Meals</li>
              <li>Day Care</li>
            </ul>
          </div>
          <div className="price">
            <div className="top">
              <h4>$29.99</h4>
              <h5>Pro Package</h5>
              <div className="line"></div>
            </div>
            <ul>
              <li>Bath & Brush X2</li>
              <li>Custom Meals X2</li>
              <li>Walking</li>
              <li>Massage & Spa</li>
              <li>Handstripping</li>
              <li>Day Care</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomingPrice;
