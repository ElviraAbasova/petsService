import React, { useState } from "react";
import "../navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import {
  faCartShopping,
  faBars,
  faHeart,
  faUser,
  faChevronDown,
  faArrowUp,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  const [select, setSelect] = useState(false);
  const [menu, setMenu] = useState(false);

  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleShow = ()=>{
    setMenu(true)
  }
  const handleClose = ()=>{
    setMenu(false)
  }

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={!menu ? 'show' : ''}>
          <li className={location.pathname === "/" ? "choose" : ""}>
            <Link to="/" className="link">Home</Link>
          </li>
          <li className={location.pathname === "/shop" ? "choose" : ""}>
            <Link to="/shop" className="link">Shop</Link>
          </li>
          <li className={location.pathname === "/contact" ? "choose" : ""}>
            <Link to="/contact" className="link">Contact</Link>
          </li>
          <li 
            className={`services ${select ? 'active' : ''}`}
            onMouseEnter={() => setSelect(true)}
            onMouseLeave={() => setSelect(false)}
          >
            <span className="link">Services</span>
            <FontAwesomeIcon icon={faChevronDown} />
            {select && (
              <ul className="dropdown">
                <li className={location.pathname === "/grooming" ? "choose" : ""}>
                  <Link to="/grooming" className="link">Grooming</Link>
                </li>
                <li className={location.pathname === "/veterinary" ? "choose" : ""}>
                  <Link to="/veterinary" className="link">Veterinary</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={location.pathname === "/admin" ? "choose" : ""}>
            <Link to="/admin" className="link">Admin</Link>
          </li>
        </ul>

        <div className="LogoBar">
          <Link to="/login" className={`logo ${location.pathname === "/login" ? "choose" : ""}`}>
            <FontAwesomeIcon className="user" icon={faUser} />
          </Link>
          <Link to="/favorite" className={`logo ${location.pathname === "/favorite" ? "choose" : ""}`}>
            <FontAwesomeIcon className="like" icon={faHeart} />
            <div className="number">0</div>
          </Link>
          <Link to="/basket" className={`logo ${location.pathname === "/basket" ? "choose" : ""}`}>
            <FontAwesomeIcon className="shop" icon={faCartShopping} />
            <div className="number">0</div>
          </Link>
        </div>
        <FontAwesomeIcon onClick={menu ? handleClose : handleShow} icon={faBars} className="burger" />
  
      </div>
      <div className="toTop" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
      <div className="chat" >
      <FontAwesomeIcon icon={faCommentDots} />
      </div>
    </nav>
  );
};

export default Navbar;
