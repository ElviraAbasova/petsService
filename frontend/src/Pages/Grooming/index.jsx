import React from 'react'
import "./grooming.scss"
import GroomHero from './components/GroomHero'
import Care from './components/Care'
import Groomer from './components/Groomer'
import GroomingPrice from './components/GroomingPrice'
import GroomRandevu from './components/GroomRandevu'
const Grooming = () => {
  return (
    <>
    <GroomHero/>
    <Care/>
    <Groomer/>
    <GroomingPrice/>
    <GroomRandevu/>
    </>
  )
}

export default Grooming