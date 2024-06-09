import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section id='hero'>
        <div className="container">
        <div className="image">
            <img src="src/assets/images/pngwing.com (31).png" alt="" />
        </div>
        <div className="leftSide">
            <h2>
                Best Food For Your Pet
            </h2>
            <button>Shop Now</button>

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