import React from 'react';
import "./favorite.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Addfav, DeleteAll } from '../../Redux/Slices/favoriteSlice';
import { AddBasket } from '../../Redux/Slices/basketSlice';
import { ToastContainer} from 'react-toastify';
import SmoothScrollComponent from '../../hook/SmoothScrollComponent';

const Favorite = () => {
    const dispatch = useDispatch();
    const fav = useSelector(state => state.favorite.arr);

    const handleFav = (elem, e) => {
        e.preventDefault(); 
        dispatch(Addfav(elem));
    };

    const handleDelete = () => {
        dispatch(DeleteAll());
    };
    const handleBasket = async(elem, e) => {
        e.preventDefault(); 
        dispatch(AddBasket(elem));
       
      }
      const fadeIn = SmoothScrollComponent();
    return (
        <section id='favorite'>
            <div ref={fadeIn.ref}  className="container">
                <div className="title">
                    <h2>Wish List </h2>
                    <h2>{fav.length} items</h2>
                </div>
                {fav.length !== 0 ? (
                    <div className="favorite">
                        <div className="leftSide">
                            {fav.map(elem => (
                                <Link key={elem.id} to={`/${elem._id}`} onClick={()=> window.scrollTo(0, 0)}  className="product">
                                    <div className="col"> 
                                        <div className="imgBox">
                                            <img src={elem.image} alt="product" />
                                        </div>
                                        <h4>{elem.title}</h4>
                                    </div>
                                    <div className="col">        
                                        <h5>${elem.price}</h5>
                                    </div>
                                    <button onClick={(e) => handleBasket(elem, e)}  className="col">       
                                        <FontAwesomeIcon className='basketIcon' icon={faBasketShopping} />
                                        Add to Card 
                                    </button>
                                    <div onClick={(e) => handleFav(elem, e)} className="circle">
                                        <FontAwesomeIcon className='like' icon={faHeart} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="rightSide">
                            <button onClick={handleDelete}>
                                Delete All
                            </button>
                        </div>
                    </div>
                ) : (
                    <h3 style={{ color: "gray", fontSize: "2.5rem", textAlign:"center" }}>Empty</h3>
                )}
            </div>
            <ToastContainer/>
        </section>
    );
};

export default Favorite;
