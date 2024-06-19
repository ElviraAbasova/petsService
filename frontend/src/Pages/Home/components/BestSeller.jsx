import paw from "../../../assets/images/pngwing.com (29).png";
import post from "../../../assets/images/ps-3-p-1-300x300.png";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../../Service/requests";
import { AddDatas } from "../../../Redux/Slices/datasSlice";

const BestSeller = () => {
  const datas = useSelector((state) => state.datas.arr);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllData("products").then((res) => dispatch(AddDatas(res)));
  }, [dispatch]);

  const bestSellers = [...datas]
  .filter((card) => card.seller)
  .sort((a, b) => b.seller - a.seller)
  .slice(0, 4);
  return (
    <section id="bestseller">
      <div className="container">
        <div className="title">
          <h3>Best Sellers</h3>
          <img src={paw} alt="paw" />
        </div>

        <div className="cards">
          {bestSellers &&
            bestSellers.map((card) => {
                if(card.seller)
              return (
                <Link key={card._id} to="/detail" target="_parent" className="card">
                   <div className="imgBox">
              <img src={card.image} alt="product" />
              <div className="transition">
                <div className="circle">
                  <FontAwesomeIcon className='like' icon={faHeart} />
                </div>
                <div className="basket">
                  <FontAwesomeIcon className='basketIcon' icon={faBasketShopping} />
                  Add to Card
                </div>
              </div>
              <div className="disc">-{card.discount}%</div>
            </div>
            <div className="prices">
              <h4 className='price'>${Math.round((card.price - (card.price * card.discount / 100)) * 100) / 100}</h4>
              <div className="oldPrice">${card.price}</div>
            </div>
            <p className='about'>{card.description}</p>
            <div className="stars">
              <div className="star">
              {Array.from({ length: card.rating }, (_, index) => (
                  <FontAwesomeIcon icon={faStar} key={index} />
                ))}
              </div>
              <p>({card.comments.length} reviews)</p>
            </div>
                </Link>
              );
            })}

        </div>
        <Link to="/shop" target="_parent" className="viewAll">
          View All
        </Link>
      </div>
    </section>
  );
};

export default BestSeller;
