import paw from "../../../assets/images/pngwing.com (29).png"
import post from "../../../assets/images/ps-3-p-1-300x300.png"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping,faStar } from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";



const BestSeller = () => {
  return (
    <section id='bestseller'>
        <div className="container">
        <div className="title">
            <h3>Best Sellers</h3>
             <img src={paw} alt="paw" />
            </div>
         
            <div className="cards">
            <div className="card">
                <div className="imgBox">
                    <img src={post} alt="product" />
                    <div className="transition">
                    <div className="circle">
                    <FontAwesomeIcon className='like' icon={faHeart} />

                    </div>
                    <div className="basket">
                    <FontAwesomeIcon className='basketIcon' icon={faBasketShopping} />
                    Add to Card
                    </div>
                    </div>
                    <div className="disc">
                        -30%
                    </div>
                 

                </div>
                <div className="prices">
                <h4 className='price'>$100</h4>
                <div className="oldPrice">$150</div>
                </div>
                <p className='about'>
                    Food for cat
                </p>
                <div className="stars">
                    <div className="star">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />

                        
                    </div>
                    <p>(5 rewies)</p>
                </div>
        

            </div>
            <Link to="/detail" className="card">
                <div className="imgBox">
                    <img src={post} alt="product" />
                    <div className="transition">
                    <div className="circle">
                    <FontAwesomeIcon className='like' icon={faHeart} />

                    </div>
                    <div className="basket">
                    <FontAwesomeIcon className='basketIcon' icon={faBasketShopping} />
                    Add to Card
                    </div>
                    </div>
                    <div className="disc">
                        -30%
                    </div>
                 

                </div>
                <div className="prices">
                <h4 className='price'>$100</h4>
                <div className="oldPrice">$150</div>
                </div>
                <p className='about'>
                    Food for cat
                </p>
                <div className="stars">
                    <div className="star">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />

                        
                    </div>
                    <p>(5 rewies)</p>
                </div>
        

            </Link>
            <Link to="/detail" className="card">
                <div className="imgBox">
                    <img src={post} alt="product" />
                    <div className="transition">
                    <div className="circle">
                    <FontAwesomeIcon className='like' icon={faHeart} />

                    </div>
                    <div className="basket">
                    <FontAwesomeIcon className='basketIcon' icon={faBasketShopping} />
                    Add to Card
                    </div>
                    </div>
                    <div className="disc">
                        -30%
                    </div>
                 

                </div>
                <div className="prices">
                <h4 className='price'>$100</h4>
                <div className="oldPrice">$150</div>
                </div>
                <p className='about'>
                    Food for cat
                </p>
                <div className="stars">
                    <div className="star">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />

                        
                    </div>
                    <p>(5 rewies)</p>
                </div>
        

            </Link>
            <Link to="/detail"className="card">
                <div className="imgBox">
                    <img src={post} alt="product" />
                    <div className="transition">
                    <div className="circle">
                    <FontAwesomeIcon className='like' icon={faHeart} />

                    </div>
                    <div className="basket">
                    <FontAwesomeIcon className='basketIcon' icon={faBasketShopping} />
                    Add to Card
                    </div>
                    </div>
                    <div className="disc">
                        -30%
                    </div>
                 

                </div>
                <div className="prices">
                <h4 className='price'>$100</h4>
                <div className="oldPrice">$150</div>
                </div>
               
                <p className='about'>
                    Food for cat
                </p>
                <div className="stars">
                    <div className="star">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />

                        
                    </div>
                    <p>(5 rewies)</p>
                </div>
        

            </Link>
        </div>
        <button className='viewAll'>View All</button>
        </div>
   
    </section>
  )
}

export default BestSeller