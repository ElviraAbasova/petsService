import React, { useRef, useState } from "react";
import glass from "../../assets/images/zooming-magnifying-glass-svgrepo-com.svg";
import { ToastContainer, toast } from "react-toastify";
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
import { AddFromDetail } from "../../Redux/Slices/basketSlice";

const Detail = () => {
  const data = useSelector((state) => state.product.arr);
  const { id } = useParams();
  let find = data.find((elem) => elem._id == id);
  const fav = useSelector((state) => state.favorite.arr);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const handleFav = (elem, e) => {
    e.preventDefault();
    dispatch(Addfav(elem));
  };

  const handleBasket = (elem, e) => {
    e.preventDefault();
    dispatch(AddFromDetail({ ...elem, count: count }));
    setCount(1);
  };

  const IncBasket = (e) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
  };

  const DecBasket = (e) => {
    e.preventDefault();
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const handleColor = (id) => {
    return fav.find((elem) => elem._id == id);
  };

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
            <div
              onClick={(e) => handleFav(find, e)}
              style={{
                color: handleColor(find._id) ? "white" : "#f47107",
                backgroundColor: handleColor(find._id) ? "#f47107" : "white",
              }}
              className="circle"
            >
              <FontAwesomeIcon className="like" icon={faHeart} />
            </div>
          </div>
          <div className="right">
            <h4>{find.category}</h4>
            <h3>{find.title}</h3>
            <div className="price">
              <h4>
                $
                {Math.round(
                  (find.price - (find.price * find.discount) / 100) * 100
                ) / 100}
              </h4>
              <h4 className="old">${find.price}</h4>
            </div>
            <div className="stars">
              <div className="star">
                <p>{find.rating} </p> <FontAwesomeIcon icon={faStar} />
              </div>
              ({find.comments.length} Review)
            </div>
            <p>{find.description}</p>
            <div className="toBasket">
              <div className="count">
                <button className="dec" onClick={DecBasket}>
                  -
                </button>
                <input value={count} readOnly type="number" />
                <button className="inc" onClick={IncBasket}>
                  +
                </button>
              </div>
              <button onClick={(e) => handleBasket(find, e)} className="basket">
                <FontAwesomeIcon
                  className="basketIcon"
                  icon={faBasketShopping}
                />
                Add to Cart
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
        <div className="commentsSide">
          <h3 className="title">Review (0)</h3>
          <div className="comments">
            <div className="comment">
              <div className="profile">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
                  alt=""
                />
              </div>
              <div className="right">
                <div className="stars">
                  <p>4</p>
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="from">
                  <h5>Elvira Abasova</h5>
                  <p className="date">May 8, 2024</p>
                </div>
                <p className="commentText">
                  I am 6 feet tall and 220 lbs. This shirt fit me perfectly in
                  the chest and shoulders. My only complaint is that it is so
                  long! I like to wear polo shirts untucked. This shirt goes
                  completely past my rear end. If I wore it with ordinary
                  shorts, you probably wouldnt be able to see the shorts at all
                  – completely hidden by the shirt. It needs to be 4 to 5 inches
                  shorter in terms of length to suit me. I have many RL polo
                  shirts, and this one is by far the longest. I dont understand
                  why.
                </p>
              </div>
            </div>
            <div className="comment">
              <div className="profile">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
                  alt=""
                />
              </div>
              <div className="right">
                <div className="stars">
                  <p>4</p>
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="from">
                  <h5>Elvira Abasova</h5>
                  <p className="date">May 8, 2024</p>
                </div>
                <p className="commentText">
                  I am 6 feet tall and 220 lbs. This shirt fit me perfectly in
                  the chest and shoulders. My only complaint is that it is so
                  long! I like to wear polo shirts untucked. This shirt goes
                  completely past my rear end. If I wore it with ordinary
                  shorts, you probably wouldnt be able to see the shorts at all
                  – completely hidden by the shirt. It needs to be 4 to 5 inches
                  shorter in terms of length to suit me. I have many RL polo
                  shirts, and this one is by far the longest. I dont understand
                  why.
                </p>
              </div>
            </div>
            <form action="">
              <div className="ratingStar">
                <p>Your Rating</p>
                <div className="rating">
                  <input defaultValue={5} name="rate" id="star5" type="radio" />
                  <label title="text" htmlFor="star5" />
                  <input defaultValue={4} name="rate" id="star4" type="radio" />
                  <label title="text" htmlFor="star4" />
                  <input
                    defaultValue={3}
                    name="rate"
                    id="star3"
                    type="radio"
                    defaultChecked=""
                  />
                  <label title="text" htmlFor="star3" />
                  <input defaultValue={2} name="rate" id="star2" type="radio" />
                  <label title="text" htmlFor="star2" />
                  <input defaultValue={1} name="rate" id="star1" type="radio" />
                  <label title="text" htmlFor="star1" />
                </div>
              </div>
              <textarea placeholder="Your Review"></textarea>
               <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Detail;
