import React from "react";
import "../navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBars,
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/ce2fcf_3e884055e81d493095b847064c3a2c5e~mv2.webp"

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
          />
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
          <li>
            <Link className="link">Services</Link>
          </li>
        </ul>
        <div className="searchBar">
          <input type="text" placeholder="Search product" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
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
        <FontAwesomeIcon icon={faBars} className="burger"/>
      </div>
    </nav>
  );
};

export default Navbar;
