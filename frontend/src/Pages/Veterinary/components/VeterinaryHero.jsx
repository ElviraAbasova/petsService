import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const VeterinaryHero = () => {
  return (
    <section id='veterinaryHero'>
        <div className="container">
        <div className="title">
                <h3>Veterinary</h3>
                <h2>Hpspital For Your Pets</h2>
                <button><FontAwesomeIcon icon={faCalendarDays} />MAKE AN APPOINTMENT</button>

            </div>
        </div>
    </section>
  )
}

export default VeterinaryHero