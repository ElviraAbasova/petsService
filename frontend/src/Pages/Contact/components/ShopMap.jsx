import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";

const ShopMap = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="contacts">
      <div className="map" style={{ width: "100%" }}>
        {loading && (
          <div className="loader">
            <div className="loaderMiniContainer">
              <div className="barContainer">
                <span className="bar" />
                <span className="bar bar2" />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 101 114"
                className="svgIcon"
              >
                <circle
                  strokeWidth={7}
                  stroke="black"
                  transform="rotate(36.0692 46.1726 46.1727)"
                  r="29.5497"
                  cy="46.1727"
                  cx="46.1726"
                />
                <line
                  strokeWidth={7}
                  stroke="black"
                  y2="111.784"
                  x2="97.7088"
                  y1="67.7837"
                  x1="61.7089"
                />
              </svg>
            </div>
          </div>
        )}
        <iframe
          className="mapp"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7059463486403!2d49.83824257530257!3d40.371044058419834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db10a655003%3A0x60d05bd61aec5074!2sCat%20%26%20Dog!5e0!3m2!1sen!2saz!4v1718275489751!5m2!1sen!2saz"
          width="100%"
          height={500}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoading(false)}
        />
      </div>
      <div className="contactform">
        <h4>Send a message</h4>
        <form action="">
          <div className="top">
            <div className="form">
              <label htmlFor="name">First Name</label>
              <input id="name" type="text" placeholder="First Name" />
            </div>
            <div className="form">
              <label htmlFor="last">Last Name</label>
              <input type="text" id="last" placeholder="Last Name" />
            </div>
          </div>
          <div className="form">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="form">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Message" style={{ width: "100%", height: "20rem" }}></textarea>
          </div>
          <button>
            <FontAwesomeIcon icon={faEnvelope} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopMap;
