import React, { useState } from "react";
import "../navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCartShopping,
  faBars,
  faHeart,
  faUser,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  const [select, setSelect] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <Link to="/" className="link">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="link">Shop</Link>
          </li>
          <li>
            <Link to="/contact" className="link">Contact</Link>
          </li>
          <li 
            className="services"
            onMouseEnter={() => setSelect(true)}
            onMouseLeave={() => setSelect(false)}
          >
            <li className="link">Services</li>
            <FontAwesomeIcon icon={faChevronDown} />
            {select && (
              <ul className="dropdown">
                <li><Link to="/grooming" className="link">Grooming</Link></li>
                <li><Link to="/veterinary" className="link">Veterinary</Link></li>
              </ul>
            )}
          </li>
        </ul>

        <div className="LogoBar">
          <Link to="/login" className="logo">
            <FontAwesomeIcon className="user" icon={faUser} />
          </Link>
          <Link to="/favorite" className="logo">
            <FontAwesomeIcon className="like" icon={faHeart} />
            <div className="number">0</div>
          </Link>
          <Link to="/basket" className="logo">
            <FontAwesomeIcon className="shop" icon={faCartShopping} />
            <div className="number">0</div>
          </Link>
        </div>
        <FontAwesomeIcon icon={faBars} className="burger" />
      </div>
    </nav>
  );
};

export default Navbar;
