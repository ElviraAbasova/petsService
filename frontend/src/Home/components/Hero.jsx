import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section id='hero'>
        <div className="container">
          <div className="content">
            <h2>Best Foods For Your Pets</h2>
            <p>Help your dog maintain a healthier weight with </p>
          </div>
          <div className="meal">
            <img src="src/assets/images/rev_home2_01.png" alt="" />
          </div>
          <div className="dogs">
            <img src="src/assets/images/rev_home2_2.png" alt="" />
          </div>
          <div className="back">
            <img src="src/assets/images/home-n1-s-11.png" alt="" />
          </div>
       
        </div>
        <div className="arrow left">
        <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="arrow right">
        <FontAwesomeIcon icon={faChevronRight} />
        </div>

        
    </section>
  )
}

export default Hero