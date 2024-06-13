import paw from "../../../assets/images/pngwing.com (29).png"
import shop from "../../../assets/images/pet-shop_6245247.png"
import veterinary from "../../../assets/images/international-cat-day_13563284.png"
import grooming from "../../../assets/images/hairdresser_9152547.png"

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';

const Services = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id='services'>
      <div className="container">
        <div className="title">
          <h3>Our Services</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="services">
          <div className="service">
            <div className="icon">
              <img src={shop} alt="shop" />
            </div>
            <h2>Pet Shop</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, commodi.</p>
            <div className="number"> 1 </div>
          </div>
          <div className="service">
            <div className="icon">
              <img src={veterinary} alt="veterinary" />
            </div>
            <h2>Veterinary</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, commodi.</p>
            <div className="number"> 2 </div>
          </div>
          <div className="service">
            <div className="icon">
              <img src={grooming} alt="grooming" />
            </div>
            <h2>Grooming</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, commodi.</p>
            <div className="number"> 3 </div>
          </div>
        </div>
      </div>
      <div className="toTop" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </section>
  );
};

export default Services;