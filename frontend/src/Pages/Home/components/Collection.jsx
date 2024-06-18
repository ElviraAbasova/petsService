import paw from "../../../assets/images/pngwing.com (29).png"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Collection = () => {
  return (
    <section id='collection'>
        <div className="container">
        <div className="title">
            <h3>Top Collection</h3>
             <img src={paw} alt="" />
            </div>
            <div className="cards">
                <div className="card">
               
                <h4>Animal Food</h4>
                <div className="shop">
                <Link to="/shop" target="_parent" className='link'>Shop now</Link>
                <FontAwesomeIcon icon={faCaretRight} />
                </div>
                </div>
                <div className="card">
                <h4>Pet Toy</h4>
                <div className="shop">
                <Link to="/shop" target="_parent" className='link'>Shop now</Link>
                <FontAwesomeIcon icon={faCaretRight} />
                </div>
                </div>
                <div className="card">
                <h4>Pet Clothes</h4>
                <div className="shop">
                <Link to="/shop" target="_parent" className='link'>Shop now</Link>
                <FontAwesomeIcon icon={faCaretRight} />
                </div>
                </div>
                <div className="card">
                <h4>Pet Medical</h4>
                <div className="shop">
                <Link to="/shop" target="_parent" className='link'>Shop now</Link>
                <FontAwesomeIcon icon={faCaretRight} />
                </div>
           
                </div>
            
        </div>
        </div>
        
    </section>
  )
}

export default Collection