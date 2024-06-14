import back from "../../assets/images/home-n1-footer-0.png"
import pets from "../../assets/images/c-s-1.png"
import React from 'react'
import "./login.scss"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  return (
    <section id='login'>
        <div className="container">
            <div className="login">
                <div className="top">
                <h3>Log in</h3>
                <Link to="/register" className="register"> Register </Link>
                </div>
                <form action="">
                    <div className="row">
                        <label for="username">Email or Username</label>
                        <input type="text" id='username' required/>
                    </div>
                    <div className="row">
                        <label for="password">Password</label>
                        <input type="password" id='password' required />
                    </div>
                    <Link className="forgot">forgot password?</Link>
                    <button>Log in</button>
                </form>
                <div className="icons">
                    <div className="icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="icon">
                    <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className="icon">
                    <FontAwesomeIcon icon={faTwitter} />
                    </div>
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
  )
}

export default Login