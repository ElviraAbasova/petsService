import React from 'react'
import VeterinaryHero from './components/VeterinaryHero'
import "./veterinary.scss"
import Prodecures from './components/Prodecures'
import AboutVeterinary from './components/AboutVeterinary'
import Veterinaries from './components/Veterinaries'
import VeterinaryReservation from './components/VeterinaryReservation'
const Veterinary = () => {
  return (
     <>
     <VeterinaryHero/>
     <Prodecures/>
     <AboutVeterinary/>
     <Veterinaries/>
     <VeterinaryReservation/>
     </>
  )
}

export default Veterinary