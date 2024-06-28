import React from 'react'
import Search from './Search'
import ShopCetgory from './ShopCetgory'
import ShopCards from './ShopCards'
import SmoothScrollComponent from '../../../hook/SmoothScrollComponent'
import { ToastContainer } from 'react-toastify'


const Shopping = () => {
  const fadeIn = SmoothScrollComponent();
  return (
    <section id='shopping'>
        <div ref={fadeIn.ref}  className="container">
            <Search/>
            <ShopCetgory/>
            <ShopCards/>
        </div>
      <ToastContainer />
       
    </section>
  )
}

export default Shopping