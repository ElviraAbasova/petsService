import React from 'react'
import "../footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton, faPhone } from '@fortawesome/free-solid-svg-icons';
import "../footer.scss"
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

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
        <div className="col">
          <h5>USEFUL LINKS</h5>
          <ul>
            <li><Link className="link">New Products</Link></li>
            <li><Link className="link">Discounts</Link></li>
            <li><Link className="link">Best Sellers</Link></li>
            <li><Link className="link">Pet Store Location</Link></li>
          </ul>
        </div>
        <div className="col">
          <h5>MY ACCOUNT</h5>
          <ul>
            <li><Link className="link">MY Profile</Link></li>
            <li><Link className="link">My Order History</Link></li>
            <li><Link className="link">My Wishlist</Link></li>
            <li><Link className="link">Shopping Card</Link></li>
          </ul>
        </div>
        <div className="col">
          <h5>SERVICES</h5>
          <ul>
            <li><Link className="link">Shopping</Link></li>
            <li><Link className="link">Grooming</Link></li>
            <li><Link className="link">Veterinary</Link></li>
          </ul>
        </div>
        <div className="col">
          <div className="download">
          <FontAwesomeIcon icon={faMobileScreenButton} />
          Download Our App
          </div>
      <div className="apps">
        <div className="app">
          <img src="src/assets/images/Google-Play.jpg" alt="playstore" />
        </div>
        <div className="app">
          <img src="src/assets/images/App-Store.jpg" alt="appstore" />
        </div>
      </div>
        </div>
        </div>
        
        <div className="bottom">
          <div className="col">
          Copyright © 2022 Ziggy. All rights reserved.
          </div>
          <div className="col">
          <img src="src/assets/images/payment.png" alt="payment" />
          </div>
          <div className="col">
          Privacy & Cookie Policy Terms of Service
          </div>
        </div>
       
      </div>
    </footer>
  )
}

export default Footer