import React from 'react'
import ContactInfos from './ContactInfos'
import ShopMap from './ShopMap'

const ContactSection = () => {
  return (
    <section id="contactMain">
        <div className="container">
            <ContactInfos/>
            <ShopMap/>
        </div>
    </section>
  )
}

export default ContactSection