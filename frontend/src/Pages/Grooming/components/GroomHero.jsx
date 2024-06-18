import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom';
const GroomHero = () => {
  return (
    <section id='groomingHero'>
        <div className="container">
            <div className="title">
                <h3>Grooming</h3>
                <h2>Pets Care</h2>
                <a className='button' href="#groomRandevu"><FontAwesomeIcon icon={faCalendarDays} />MAKE AN APPOINTMENT</a>

            </div>
           
        </div>
    </section>
  )
}

export default GroomHero