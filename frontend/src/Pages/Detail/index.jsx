import React from "react";
import glass from "../../assets/images/zooming-magnifying-glass-svgrepo-com.svg";
import post from "../../assets/images/ps-3-p-1-300x300.png";
import "./detail.scss"
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
    faWhatsapp
   
  } from "@fortawesome/free-brands-svg-icons";

const Detail = () => {
  return (
    <section id="detail">
      <div className="container">
        <div className="top">
          <button>
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Back
          </button>
          Home/Category/Food
        </div>
        <div className="detail">
    
          <div className="left">
            <img src={post} alt="post" />
            <div className="disc">-30%</div>
            <div className="scope">
              <img src={glass} className="glassImg" alt="glass" />
            </div>
            <div className="circle">
              <FontAwesomeIcon className="like" icon={faHeart} />
            </div>
          </div>
          <div className="right">
            <h4>Food</h4>
            <h3>Rustic Iron Hat</h3>
            <div className="price">
              <h4>$12</h4>
              <h4 className="old">$15</h4>
            </div>
            <div className="stars">
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              (3 Review)
            </div>
            <p>
              Eum quia voluptatibus sed ad. Necessitatibus dolorem ea minima qui
              ut quis. Est et nulla dolores qui. Consequatur aut perspiciatis
              qui saepe itaque dicta.
            </p>
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
                Categories: <p>Food</p>
              </div>
              <div className="row">
                Tags: <p>Cats,Food,Kitten</p>
              </div>
              <div className="row">
                Share: <div className="icons">
                    <div className="icon"><FontAwesomeIcon icon={faWhatsapp} /></div>
                    <div className="icon"><FontAwesomeIcon icon={faFacebookF} /></div>
                    <div className="icon"><FontAwesomeIcon icon={faTwitter} /></div>
                    <div className="icon"><FontAwesomeIcon icon={faInstagram} /></div>

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
