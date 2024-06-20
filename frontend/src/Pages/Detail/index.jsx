import React from "react";
import glass from "../../assets/images/zooming-magnifying-glass-svgrepo-com.svg";
import post from "../../assets/images/ps-3-p-1-300x300.png";
import "./detail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBasketShopping,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Addfav } from "../../Redux/Slices/favoriteSlice";
const Detail = () => {
  const data = useSelector((state) => state.datas.products);
  const { id } = useParams();
  let find = data.find((elem) => elem._id == id);
  const fav = useSelector((state) => state.favorite.arr);
  const dispatch = useDispatch();

  const handleFav = async(elem, e) => {
    e.preventDefault(); 
    dispatch(Addfav(elem));
  
}
 const handleColor = (id) =>{
    return fav.find(elem=> elem._id==id)
}
  return (
    <section id="detail">
      <div className="container">
        <div className="top">
          <Link className="back" to="/" target="_parent">
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Back
          </Link>
          Home/Category/Food
        </div>
        <div className="detail">
          <div className="left">
            <img src={find.image} alt="post" />
            <div className="disc">-{find.discount}%</div>
            <div className="scope">
              <img src={glass} className="glassImg" alt="glass" />
            </div>
            <div onClick={(e)=> handleFav(find,e)} style={{color: handleColor(find._id) ? "white" : "#f47107",backgroundColor: handleColor(find._id) ? "#f47107" : "white"}}  className="circle">
              <FontAwesomeIcon className="like" icon={faHeart} />
            </div>
          </div>
          <div className="right">
            <h4>{find.category}</h4>
            <h3>{find.title}</h3>
            <div className="price">
              <h4>
                $$
                {Math.round(
                  (find.price - (find.price * find.discount) / 100) * 100
                ) / 100}
              </h4>
              <h4 className="old">${find.price}</h4>
            </div>
            <div className="stars">
              {Array.from({ length: find.rating }).map((_, index) => (
                <FontAwesomeIcon key={index} className="star" icon={faStar} />
              ))}
              ({find.comments.length} Review)
            </div>
            <p>{find.description}</p>
            <div className="toBasket">
              <div className="count">
                <button className="dec">-</button>
                <input defaultValue={1} type="number" />
                <button className="inc">+</button>
              </div>
              <button className="basket">
                <FontAwesomeIcon
                  className="basketIcon"
                  icon={faBasketShopping}
                />
                Add to Card
              </button>
            </div>
            <div className="bottom">
              <div className="row">
                Categories: <p>{find.category}</p>
              </div>
              <div className="row">
                Tags: <p>{find.tags.join(", ")}</p>
              </div>
              <div className="row">
                Share:{" "}
                <div className="icons">
                  <Link
                    to="https://web.whatsapp.com/"
                    target="_blank"
                    className="icon"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Link>
                  <Link
                    to="https://www.facebook.com/"
                    target="_blank"
                    className="icon"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link
                    to="https://x.com/?lang=en"
                    target="_blank"
                    className="icon"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  <Link
                    to="https://www.instagram.com/"
                    target="_blank"
                    className="icon"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
