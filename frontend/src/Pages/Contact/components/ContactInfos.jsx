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
        
        <Link  to={'mailto:petshop@gmail.com'}  className="info">
            <div className="icon">
                <img src={mail} alt="mail" />
                </div>
                <div className="title">
                <h5>Our Email</h5>
                <a href='mailto:petshop@gmail.com'>petshop@gmail.com</a>
                </div>
                
            
        </Link>
        <Link to={"https://www.google.com/maps?ll=40.37104,49.840818&z=16&t=m&hl=en&gl=AZ&mapclient=embed&cid=6976176797929721972"} target='_blank' className="info">
            <div className="icon">
                <img src={location} alt="phone" />
                </div>
                <div className="title">
                <h5>Location</h5>
                <address>4 Uzeyir Hajibeyov St, Baku 1000</address>
                </div>
               
               
            
        </Link>
        <Link to={"tel:+1234567"} className="info">
            <div className="icon">
                <img src={phone} alt="phone" />
                </div>
                <div className="title">
                <h5>Call us</h5>
                <a href='tel:+1234567'>+1234567</a>
                </div>
                

            
        </Link>
    </div>
  )
}

export default ContactInfos