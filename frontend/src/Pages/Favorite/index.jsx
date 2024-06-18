import React from 'react'
import "./favorite.scss"
import post from "../../assets/images/ps-3-p-1-300x300.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Favorite = () => {
  return (
    <section id='favorite'>
        <div className="container">
        <div className="title">
            <h2>Wish List </h2>
            <h2>1 items</h2>
            </div>
            <div className="favorite">
                <div className="leftSide">
                <Link to="/detail" target='_parent' className="product">
                    <div className="col"> 
                        <div className="imgBox">
                        <img src={post} alt="" />
                        </div>
                            
                        <h4>DEEP DISH CUDDLER</h4>
                    </div>
                    <div className="col">        
                        <h5>$20</h5>
                    </div>
                    <button className="col">       
                    <FontAwesomeIcon className='basketIcon' icon={faBasketShopping} />
                    Add to Card 
                     
                    </button>
                    <div className="circle">
                  <FontAwesomeIcon className='like' icon={faHeart} />
                </div>

                </Link>
                <Link to="/detail" target='_parent' className="product">
                    <div className="col">
                       <div className="imgBox">
                       <img src={post} alt="" />
                       </div>
                           
                        <h4>DEEP dddddddddddddddddddddddddddddddDISH CUDDLER</h4>
                    </div>
                    <div className="col">        
                        <h5>$20</h5>
                    </div>
                    <button className="col">       
                    <FontAwesomeIcon className='basketIcon' icon={faBasketShopping} />
                    Add to Card 
                    </button>
                    <div className="circle">
                  <FontAwesomeIcon className='like' icon={faHeart} />
                </div>
                    
                </Link>
                </div>
                <div className="rightSide">
                    <button>
                        Delete All
                    </button>
                </div>
              
                </div>
            </div>
     
    </section>
  )
}

export default Favorite