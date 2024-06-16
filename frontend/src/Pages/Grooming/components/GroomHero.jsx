import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const GroomHero = () => {
  return (
    <section id='groomingHero'>
        <div className="container">
            <div className="title">
                <h3>Grooming</h3>
                <h2>Pets Care</h2>
                <button><FontAwesomeIcon icon={faCalendarDays} />MAKE AN APPOINTMENT</button>

            </div>
           
        </div>
    </section>
  )
}

export default GroomHero