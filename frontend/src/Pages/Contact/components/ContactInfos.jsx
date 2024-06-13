import React from 'react'
import location from "../../../assets/images/pin_249711.png"
import mail from "../../../assets/images/mail_7286262.png"
import phone from "../../../assets/images/phone_4070253.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ContactInfos = () => {
  return (
    <div className="infos">
        
        <div className="info">
            <div className="icon">
                <img src={mail} alt="mail" />
                </div>
                <div className="title">
                <h5>Our Email</h5>
                <a href='mailto:petshop@gmail.com'>petshop@gmail.com</a>
                </div>
                
            
        </div>
        <div className="info">
            <div className="icon">
                <img src={location} alt="phone" />
                </div>
                <div className="title">
                <h5>Location</h5>
                <address>4 Uzeyir Hajibeyov St, Baku 1000</address>
                </div>
               
               
            
        </div>
        <div className="info">
            <div className="icon">
                <img src={phone} alt="phone" />
                </div>
                <div className="title">
                <h5>Call us</h5>
                <a href='tel:+1234567'>+1234567</a>
                </div>
                

            
        </div>
    </div>
  )
}

export default ContactInfos