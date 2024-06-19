import React from 'react'
import paw from "../../../assets/images/pngwing.com (29).png";
import cat from "../../../assets/images/h2-contact-img.png";
const VeterinaryReservation = () => {
  return (
    <div id="veterinaryRandevu">
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
            <div className="names">
                <div className="row">
                  <label htmlFor="category">Pet Category</label>
                  <input
                    placeholder="Pet Category"
                    className="input"
                    name="category"
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
                  <label htmlFor="name">Your Name</label>
                  <input
                    placeholder="Your Name"
                    className="input"
                    name="name"
                    type="text"
                  />
                </div>
                <div className="row">
                  <label htmlFor="surname">Your Surname</label>
                  <input
                    placeholder="Your Surname"
                    className="input"
                    name="surname"
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
              <div className="radio-input">
                <input
                  defaultValue="value-1"
                  name="value-radio"
                  id="value-1"
                  type="radio"
                />
                <label htmlFor="value-1">Mary Rodgers</label>
                <input
                  defaultValue="value-2"
                  name="value-radio"
                  id="value-2"
                  type="radio"
                />
                <label htmlFor="value-2">Clark Hudson</label>
                <input
                  defaultValue="value-3"
                  name="value-radio"
                  id="value-3"
                  type="radio"
                />
                <label htmlFor="value-3">Sandra Kohn</label>
              </div>
              <div className="row">
                  <label htmlFor="date">Enter Info</label>
                  <textarea style={{maxWidth:"100%", height:"20rem", resize:"none"}} className='input textarea' placeholder='Please write problem of your pet' ></textarea>
                </div>
              

              <button type="submit" className="submit">
                Send Randevu
              </button>
            </form>
          </div>
        </div>
   
    </div>
  )
}

export default VeterinaryReservation