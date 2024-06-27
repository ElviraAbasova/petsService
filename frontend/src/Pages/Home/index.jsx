import React from 'react'
import "./home.scss"
import Hero from './components/Hero'
import Categories from './components/Categories'
import BestSeller from './components/BestSeller'
import Collection from './components/Collection'
import Services from './components/Services'
import About from './components/About'
import Blog from './components/Blog'


const Home = () => {

  return (
    <>
    <Hero />
    <Services />
    <BestSeller/>
    <Categories/>
    <Collection/>
    <About/>
    <Blog/>
    
    </>
  )
}

export default Home