import paw from "../../../assets/images/pngwing.com (29).png"
import main from "../../../assets/images/home-n2-bg9.png"


import React from "react";
const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="title">
          <h3>Pets Gallery</h3>
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
              <li>Fresh and quality food</li>
              <li>Care Services Reliable</li>
              <li>Highly qualified team</li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          
        </div>
      </div>
    </section>
  );
};

export default Blog;
