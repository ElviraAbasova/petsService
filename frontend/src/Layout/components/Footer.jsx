import logo from "../../assets/images/logo.svg"
import playmarket from "../../assets/images/Google-Play.jpg"
import appstore from "../../assets/images/App-Store.jpg"
import payment from "../../assets/images/payment.png"
import React from 'react'
import "../footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton, faPhone } from '@fortawesome/free-solid-svg-icons';
import "../footer.scss"
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { FilterDiscount, FilterSeller } from "../../Redux/Slices/productSlice"

const Footer = () => {
  const dispatch = useDispatch()
  const handleLink = () => {
    setTimeout(() => {
      dispatch(FilterDiscount(1));
    }, 150); 
  };
  const handleViewAll = () => {
    setTimeout(() => {
      dispatch(FilterSeller(30));
    }, 150); 
  };
  return (
    <footer>
      <div className="container">
        <div className="top">
        <div className="col">
          <div className="logo">
            <img src={logo} alt="logo" />
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
            <Link to="https://www.facebook.com/" target="_blank" className="social">
            <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link to="https://x.com/?lang=en" target="_blank" className="social">
            <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank" className="social">
            <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="https://web.whatsapp.com/" target="_blank" className="social">
            <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
            
          </div>
        </div>
        <div className="col">
          <h5>USEFUL LINKS</h5>
          <ul>
            <li><Link to="/shop" onClick={handleLink}  className="link">Discounts</Link></li>
            <li><Link to="/shop" onClick={handleViewAll} className="link">Best Sellers</Link></li>
            <li><Link to="/contact" className="link">Pet Store Location</Link></li>
          </ul>
        </div>
        <div className="col">
          <h5>MY ACCOUNT</h5>
          <ul>
            <li><Link to="/profile" className="link">MY Profile</Link></li>
            <li><Link to="/profile" className="link">My Order History</Link></li>
            <li><Link to="/favorite" className="link">My Wishlist</Link></li>
            <li><Link to="/basket"  className="link">Shopping Card</Link></li>
          </ul>
        </div>
        <div className="col">
          <h5>SERVICES</h5>
          <ul>
            <li><Link to="/shop" target="_parent" className="link">Shopping</Link></li>
            <li><Link to="/grooming" target="_parent" className="link">Grooming</Link></li>
            <li><Link to="/veterinary" target="_parent" className="link">Veterinary</Link></li>
          </ul>
        </div>
        <div className="col">
          <div className="download">
          <FontAwesomeIcon icon={faMobileScreenButton} />
          Download Our App
          </div>
      <div className="apps">
        <Link to="https://play.google.com/store/apps?hl=en_US&pli=1" target="_parent" className="app">
          <img src={playmarket} alt="playstore" />
        </Link>
        <Link to="https://www.apple.com/app-store/" target="_parent" className="app">
          <img src={appstore} alt="appstore" />
        </Link>
      </div>
        </div>
        </div>
        
        <div className="bottom">
          <div className="col">
          Copyright © 2022 Ziggy. All rights reserved.
          </div>
          <div className="col">
          <img src={payment} alt="payment" />
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