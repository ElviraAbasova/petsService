import paw from "../../../assets/images/pngwing.com (29).png"
import main from "../../../assets/images/home-n2-bg9.png"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SmoothScrollComponent from "../../../hook/SmoothScrollComponent";
const Blog = () => {
  const fadeIn = SmoothScrollComponent();
  return (
    
    <section id="blog">
      <div ref={fadeIn.ref}  className="container">
        <div className="title">
          <h3>About Us</h3>
          <img src={paw} alt="" />
        </div>
        <div className="top">
          <div className="leftSide">
            <img src={main} alt="about" />
          </div>
          <div className="rightSide">
            <h5>About Us</h5>
            <h4>WE KEEP THEM HAPPY</h4>
            <p>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </p>
            <ul>
              <li> <FontAwesomeIcon className="icon" icon={faCheck} />Fresh and quality food</li>
              <li> <FontAwesomeIcon className="icon"  icon={faCheck} />Care Services Reliable</li>
              <li> <FontAwesomeIcon className="icon"  icon={faCheck} />Highly qualified team</li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          
        </div>
      </div>
    </section>
  );
};

export default Blog;
