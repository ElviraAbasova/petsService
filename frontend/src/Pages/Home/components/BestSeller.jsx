import paw from "../../../assets/images/pngwing.com (29).png";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../../Service/requests";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Addfav } from "../../../Redux/Slices/favoriteSlice";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddBasket } from "../../../Redux/Slices/basketSlice";
import { AddProducts, FilterSeller } from "../../../Redux/Slices/productSlice";
import Swal from "sweetalert2";
const BestSeller = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  const datas = useSelector((state) => state.product.arr);
  const fav = useSelector((state) => state.favorite.arr);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllData("products").then((res) => {
      dispatch(AddProducts(res));
      setLoading(false);
    });
  }, [dispatch]);

  const bestSellers = [...datas]
    .filter((card) => card.seller)
    .sort((a, b) => b.seller - a.seller)
    .slice(0, 4);
    const handleFav = async(elem, e) => {
      e.preventDefault(); 
      if (!user) {
        Swal.fire({
          title: "Login Required",
          text: "You need to log in to add to favorites.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#f47107",
          cancelButtonColor: "#8D19E8",
          confirmButtonText: "Log in",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
      } else {
        dispatch(Addfav(elem));
      }
    
  }
   const handleColor = (id) =>{
      return fav.find(elem=> elem._id==id)
  }
  const handleBasket = async(elem, e) => {
    e.preventDefault(); 
    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "You need to log in to add to basket.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f47107",
        cancelButtonColor: "#8D19E8",
        confirmButtonText: "Log in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      dispatch(AddBasket(elem));
    }
   
  }
  const handleViewAll = () => {
    setTimeout(() => {
      dispatch(FilterSeller(10));
    }, 200); 
  };
  return (
    <section id="bestseller">
      <div className="container">
        <div className="title">
          <h3>Best Sellers</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="cards">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div className="card" key={index}>
                <div className="imgBox">
                  <Skeleton height={300} style={{width:"100%"}} />
                </div>
                <div className="prices">
                  <Skeleton width={100} />
                  <Skeleton width={50} />
                </div>
                <p className='about'>
                  <Skeleton count={2} />
                </p>
                <div className="stars">
                  <Skeleton width={100} />
                  <Skeleton width={50} />
                </div>
              </div>
            ))
          ) : (
            bestSellers.map((card) => (
              <Link key={card._id} to={`/${card._id}`} className="card">
                <div className="imgBox">
                  <img src={card.image} alt="product" />
                  <div className="transition">
                  <div onClick={(e)=> handleFav(card,e)} style={{color: handleColor(card._id) ? "white" : "#f47107",backgroundColor: handleColor(card._id) ? "#f47107" : "white"}}  className="circle">
                      <FontAwesomeIcon className='like' icon={faHeart} />
                    </div>
                    <div onClick={(e)=> handleBasket(card,e)} className="basket">
                      <FontAwesomeIcon className='basketIcon' icon={faBasketShopping} />
                      Add to Card
                    </div>
                  </div>
                  {card.discount != 0 ? (<div className="disc">-{card.discount}%</div> ): null}
                </div>
                <div className="prices">
                  <h4 className='price'>${Math.round((card.price - (card.price * card.discount / 100)) * 100) / 100}</h4>
                  {card.discount != 0 ? ( <div className="oldPrice">${card.price}</div>): null}
                </div>
                <p className='about'>{card.title}</p>
                <div className="stars">
                  <div className="star">
                  <p>{card.rating}</p>  <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p>({card.comments.length} reviews)</p>
                </div>
              </Link>
            ))
          )}
        </div>
        <Link to="/shop" onClick={handleViewAll} className="viewAll">
          View All
        </Link>
      </div>
      <ToastContainer />
    </section>
  );
};

export default BestSeller;
