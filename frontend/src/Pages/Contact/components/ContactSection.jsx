import React from 'react'
import ContactInfos from './ContactInfos'
import ShopMap from './ShopMap'
import SmoothScrollComponent from '../../../hook/SmoothScrollComponent';

const ContactSection = () => {
  const fadeIn = SmoothScrollComponent();
  return (
    <section id="contactMain">
        <div ref={fadeIn.ref} className="container">
            <ContactInfos/>
            <ShopMap/>
        </div>
    </section>
  )
}

export default ContactSection