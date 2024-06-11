import React from 'react'
import "../footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import "../footer.scss"
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top">
        <div className="col">
          <div className="logo">
            <img src="src/assets/images/ce2fcf_3e884055e81d493095b847064c3a2c5e~mv2.webp" alt="logo" />
          </div>
          <p>We know pets are like family, so we are committed to providing the highest-quality products that you can trust.</p>
          <div className="phone">
          <FontAwesomeIcon icon={faPhone}  className='icon'/>
          Hotline Order
          </div>
          <h5 className="number">
          (877) 123 4567
          </h5>
          <div className="socials">
            <div className="social">
            <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="social">
            <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="social">
            <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="social">
            <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            
          </div>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        </div>
        
        <div className="bottom">
          <div className="col">
          Copyright © 2022 Ziggy. All rights reserved.
          </div>
        </div>
       
      </div>
    </footer>
  )
}

export default Footer