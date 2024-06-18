import paw from "../../../assets/images/pngwing.com (29).png"
import shop from "../../../assets/images/pet-shop_6245247.png"
import veterinary from "../../../assets/images/international-cat-day_13563284.png"
import grooming from "../../../assets/images/hairdresser_9152547.png"
import React from 'react';
import { Link } from "react-router-dom";

const Services = () => {


  return (
    <section id='services'>
      <div className="container">
        <div className="title">
          <h3>Our Services</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="services">
          <Link to="/shop" target="_parent" className="service">
            <div className="icon">
              <img src={shop} alt="shop" />
            </div>
            <h2>Pet Shop</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, commodi.</p>
            <div className="number"> 1 </div>
          </Link>
          <Link to="/veterinary" target="_parent" className="service">
            <div className="icon">
              <img src={veterinary} alt="veterinary" />
            </div>
            <h2>Veterinary</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, commodi.</p>
            <div className="number"> 2 </div>
          </Link>
          <Link to="/grooming" target="_parent" className="service">
            <div className="icon">
              <img src={grooming} alt="grooming" />
            </div>
            <h2>Grooming</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, commodi.</p>
            <div className="number"> 3 </div>
          </Link>
        </div>
      </div>
   
    </section>
  );
};

export default Services;
