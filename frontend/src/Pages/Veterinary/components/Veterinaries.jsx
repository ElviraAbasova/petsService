import React from "react";
import paw from "../../../assets/images/pngwing.com (29).png";
import doctor1 from "../../../assets/images/h6-team-1.jpg";
import doctor2 from "../../../assets/images/h6-team-2.jpg";
import doctor3 from "../../../assets/images/h6-team-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Veterinaries = () => {
  return (
    <section id="veterinaries">
      <div className="container">
        <div className="title">
          <h3>Our Team</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="veterinars">
          <div className="veterinar">
            <img src={doctor1} alt="doctor" />
            <div className="about">
              <h4>Mary Rodgers</h4>
              <div className="icons">
                <div className="icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
          </div>
          <div className="veterinar">
            <img src={doctor2} alt="doctor" />
            <div className="about">
              <h4>Clark Hudson</h4>
              <div className="icons">
                <div className="icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
          </div>
          <div className="veterinar">
            <img src={doctor3} alt="doctor" />
            <div className="about">
              <h4>Sandra Kohn</h4>
              <div className="icons">
                <div className="icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Veterinaries;
