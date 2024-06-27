import paw from "../../../assets/images/pngwing.com (29).png"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FilterCategory } from "../../../Redux/Slices/productSlice";
import { useDispatch } from "react-redux";
import SmoothScrollComponent from "../../../hook/SmoothScrollComponent";
const Collection = () => {
  const dispatch = useDispatch()
  const handleShop = (category) => {
    setTimeout(() => {
      dispatch(FilterCategory(category));
    }, 150); 
    window.scrollTo(0, 800);
  };
  const fadeIn = SmoothScrollComponent();
  return (
    <section id='collection'>
        <div ref={fadeIn.ref}  className="container">
        <div className="title">
            <h3>Top Collection</h3>
             <img src={paw} alt="" />
            </div>
            <div className="cards">
                <div className="card">
               
                <h4>Animal Food</h4>
                <div className="shop">
                <Link to="/shop" onClick={()=>handleShop("food")} className='link'>Shop now</Link>
                <FontAwesomeIcon icon={faCaretRight} />
                </div>
                </div>
                <div className="card">
                <h4>Pet Toy</h4>
                <div className="shop">
                <Link to="/shop" onClick={()=>handleShop("toys")} className='link'>Shop now</Link>
                <FontAwesomeIcon icon={faCaretRight} />
                </div>
                </div>
                <div className="card">
                <h4>Pet Clothes</h4>
                <div className="shop">
                <Link to="/shop" onClick={()=>handleShop("clothes")} className='link'>Shop now</Link>
                <FontAwesomeIcon icon={faCaretRight} />
                </div>
                </div>
                <div className="card">
                <h4>Pet Medical</h4>
                <div className="shop">
                <Link to="/shop" onClick={()=>handleShop("medical")}  className='link'>Shop now</Link>
                <FontAwesomeIcon icon={faCaretRight} />
                </div>
           
                </div>
            
        </div>
        </div>
        
    </section>
  )
}

export default Collection