import React from "react";
import paw from "../../../assets/images/pngwing.com (29).png";
import cat from "../../../assets/images/c74eeb4e048db1ec522bd7ab2b5f611d.jpg";

const GroomRandevu = () => {
  return (
    <section id="groomRandevu">
      <div className="container">
        <div className="title">
          <h3>Get A Randevu</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="randevu">
          <div className="left">
            <img src={cat} alt="cat" />
          </div>
         
            <form action="">
              <div className="row">
                <p>Choose Pet</p>
                <div className="radios">
                  <label className="radio-button">
                    <input
                      type="radio"
                      name="example-radio"
                      defaultValue="option1"
                    />
                    <span className="radio" />
                    Cat
                  </label>
                  <label className="radio-button">
                    <input
                      type="radio"
                      name="example-radio"
                      defaultValue="option2"
                    />
                    <span className="radio" />
                    Dog
                  </label>
                </div>
              </div>
              <div className="names">
                <div className="row">
                  <label htmlFor="name">Your Name</label>
                  <input
                    placeholder="Your Name"
                    className="input"
                    name="name"
                    type="text"
                  />
                </div>
                <div className="row">
                  <label htmlFor="pet">Pet Name</label>
                  <input
                    placeholder="Pet Name"
                    className="input"
                    name="pet"
                    type="text"
                  />
                </div>
              </div>
              <div className="names">
                <div className="row">
                  <label htmlFor="phone">Your Phone</label>
                  <input
                    placeholder="Your Phone"
                    className="input"
                    name="phone"
                    type="tel"
                  />
                </div>
                <div className="row">
                  <label htmlFor="email">Your Email</label>
                  <input
                    placeholder="Your Email"
                    className="input"
                    name="email"
                    type="email"
                  />
                </div>
              </div>
              <div className="radio-input">
                <input
                  defaultValue="groom-1"
                  name="groom-radio"
                  id="groom-1"
                  type="radio"
                />
                <label htmlFor="groom-1">Miranda Halim</label>
                <input
                  defaultValue="groom-2"
                  name="groom-radio"
                  id="groom-2"
                  type="radio"
                />
                <label htmlFor="groom-2">Rosalina William</label>
                <input
                  defaultValue="groom-3"
                  name="groom-radio"
                  id="groom-3"
                  type="radio"
                />
                <label htmlFor="groom-3">Yokolili Y. Yankee</label>
              </div>
              <div className="radio-input">
                <input
                  defaultValue="value-1"
                  name="value-radio"
                  id="value-1"
                  type="radio"
                />
                <label htmlFor="value-1">Basic</label>
                <input
                  defaultValue="value-2"
                  name="value-radio"
                  id="value-2"
                  type="radio"
                />
                <label htmlFor="value-2">Advanced</label>
                <input
                  defaultValue="value-3"
                  name="value-radio"
                  id="value-3"
                  type="radio"
                />
                <label htmlFor="value-3">Pro</label>
              </div>
              <div className="names">
                <div className="row">
                  <label htmlFor="date">Select Date</label>
                  <input className="input" name="date" type="date" />
                </div>
                <div className="row">
                  <label htmlFor="time">Select Time</label>
                  <input className="input" name="time" type="time" />
                </div>
              </div>
              

              <button type="submit" className="submit">
                Send Randevu
              </button>
            </form>
          </div>
        </div>
   
    </section>
  );
};

export default GroomRandevu;
