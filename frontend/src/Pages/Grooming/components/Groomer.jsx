import React from "react";
import paw from "../../../assets/images/pngwing.com (29).png";
import team1 from "../../../assets/images/team-v1-4.png";
import team2 from "../../../assets/images/team-v1-3.png";
import team3 from "../../../assets/images/team-v1-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Groomer = () => {
  return (
    <section id="groomer">
      <div className="container">
        <div className="title">
          <h3>Our Groomers</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="groomers">
          <div className="groomer">
            <div className="card">
                <img src={team1} alt="" />
            </div>
            <div className="about">
                <h4>Miranda H. Halim</h4>
                <p>Senior groomer with 8 years of experience. He knows everything about the pets.</p>
                <div className="icons">
                    <Link to="https://www.facebook.com/" target="_blank" className="icon">
                    <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank" className="icon">
                    <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link to="https://x.com/?lang=en" target="_blank" className="icon">
                    <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    
                    
                </div>
            </div>
          </div>
          <div className="groomer">
            <div className="card">
                <img src={team2} alt="" />
            </div>
            <div className="about">
                <h4>Rosalina D. William</h4>
                <p>Senior groomer with 8 years of experience. He knows everything about the pets.</p>
                <div className="icons">
                <Link to="https://www.facebook.com/" target="_blank" className="icon">
                    <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank" className="icon">
                    <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link to="https://x.com/?lang=en" target="_blank" className="icon">
                    <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    
                    
                </div>
            </div>
          </div>
          <div className="groomer">
            <div className="card">
                <img src={team3} alt="" />
            </div>
            <div className="about">
                <h4>Yokolili Y. Yankee</h4>
                <p>Senior groomer with 8 years of experience. He knows everything about the pets.</p>
                <div className="icons">
                <Link to="https://www.facebook.com/" target="_blank" className="icon">
                    <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank" className="icon">
                    <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link to="https://x.com/?lang=en" target="_blank" className="icon">
                    <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Groomer;
