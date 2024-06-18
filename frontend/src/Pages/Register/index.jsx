import back from "../../assets/images/home-n1-footer-0.png";
import pets from "../../assets/images/home-n1-footer-1.png";
import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Register = () => {
  return (
    <section id="register">
      <div className="container">
        <div className="login">
          <div className="top">
            <h3>Register</h3>
            <Link className="register" to="/login">
              {" "}
              Log in{" "}
            </Link>
          </div>
          <form action="">
            <div className="info">
              <div className="row">
                <label for="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="row">
                <label for="surname">Surname</label>
                <input type="text" id="surname" required />
              </div>
            </div>
            <div className="info">
              <div className="row">
                <label for="date">Date</label>
                <input type="date" id="date" required />
              </div>

              <div className="radio-button-container">
                <div className="radio-button">
                  <input
                    type="radio"
                    className="radio-button__input"
                    id="radio1"
                    name="radio-group"
                  />
                  <label className="radio-button__label" htmlFor="radio1">
                    <span className="radio-button__custom" />
                    Male
                  </label>
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    className="radio-button__input"
                    id="radio2"
                    name="radio-group"
                  />
                  <label className="radio-button__label" htmlFor="radio2">
                    <span className="radio-button__custom" />
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <label for="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="row">
              <label for="username">Username</label>
              <input type="text" id="username" required />
            </div>
            <div className="row">
              <label for="password">Password</label>
              <input type="password" id="password" required />
            </div>

            <Link className="button" to="/login" target="_parent">Register</Link>
          </form>
          <div className="icons">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="icon"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              className="icon"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="https://x.com/?lang=en" target="_blank" className="icon">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
        </div>
        <div className="pets">
          <img src={pets} alt="" />
        </div>
      </div>
      <div className="back">
        <img src={back} alt="" />
      </div>
    </section>
  );
};

export default Register;
