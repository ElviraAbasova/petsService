import React from 'react'
import pets from "../../../assets/images/cat_dog_.png"
import back from "../../../assets/images/Pattern_img.png"

const ShopHero = () => {
  return (
    <section id='shophero'>
        <div className="container">
            <div className="pets">
                <img src={pets} alt="pets" />
            </div>
            <div className="back">
                <img src={back} alt="back" />
            </div>
            <div className="content">
            <h2>Shop</h2>
            <p>Best choises for your pets</p>
            </div>
            
        </div>
    </section>
  )
}

export default ShopHero