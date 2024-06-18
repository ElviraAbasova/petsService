import React from 'react'
import Search from './Search'
import ShopCetgory from './ShopCetgory'
import ShopCards from './ShopCards'


const Shopping = () => {

  return (
    <section id='shopping'>
        <div className="container">
            <Search/>
            <ShopCetgory/>
            <ShopCards/>
        </div>
       
    </section>
  )
}

export default Shopping