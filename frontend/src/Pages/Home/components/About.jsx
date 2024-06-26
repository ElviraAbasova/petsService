import delivery from "../../../assets/images/p-b-3-1.png"
import time from "../../../assets/images/p-b-4-1.png"
import gift from "../../../assets/images/p-b-5-1.png"
import React from 'react'
import SmoothScrollComponent from "../../../hook/SmoothScrollComponent"

const About = () => {
    
    const fadeIn = SmoothScrollComponent();
  return (
    <section id='about'>
        <div ref={fadeIn.ref} className="container">
            <div className="about">
                <div className="aboutImg">
                    <img src={delivery} alt="delivery" />
                    </div>
                    <h4>FREE SHIPPING</h4>
                    <p>For Orders Under 3km</p>
                
            </div>
            <div className="about">
                <div className="aboutImg">
                    <img src={time} alt="" />
                    </div>
                    <h4>OPENING TIME</h4>
                    <p>9:00 Am - 10:00 Pm</p>
                
            </div>
            <div className="about">
                <div className="aboutImg">
                    <img src={gift} alt="" />
                    </div>
                    <h4>GIFT VOUCHERS</h4>
                    <p>Buy 2 Or More Times</p>
                
            </div>
        </div>
    </section>
  )
}

export default About