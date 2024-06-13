import React from 'react'
import pets from "../../../assets/images/pet_home_.png"
import back from "../../../assets/images/Pattern_img.png"
const ContactHero = () => {
  return (
    <section id='contactHero'>
        <div className="container">
        <div className="pets">
                <img src={pets} alt="pets" />
            </div>
            <div className="back">
                <img src={back} alt="back" />
            </div>
            <div className="content">
            <h2>Contact</h2>
            <p>Get in touch and let us know how we can help.</p>
            </div>
        </div>
    </section>
  )
}

export default ContactHero