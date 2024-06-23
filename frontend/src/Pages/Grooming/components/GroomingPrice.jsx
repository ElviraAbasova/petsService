import React, { useEffect, useState } from "react";
import paw from "../../../assets/images/pngwing.com (29).png";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../../Service/requests";
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css';
import { AddGroomings } from "../../../Redux/Slices/groomingSlice";
const GroomingPrice = () => {
  const [loading, setLoading] = useState(true);

  const prices = useSelector((state) => state.grooming.arr);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllData("grooming").then((res) => {
      dispatch(AddGroomings(res));
      setLoading(false); 
    });
  }, [dispatch]);
  return (
    <section id="groomPrice">
      <div className="container">
        <div className="title">
          <h3>Price Table</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="prices">
          {loading ? (
   
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="price">
                <div className="top">
                  <Skeleton width={80} />
                  <Skeleton width={120} />
                  <div className="line"></div>
                </div>
                <ul>
                  <li><Skeleton count={8} /></li>
                </ul>
              </div>
            ))
          ) : (
        
            prices.map((price) => (
              <div key={price._id} className="price">
                <div className="top">
                  <h4>{price.price} $</h4>
                  <h5>{price.package}</h5>
                  <div className="line"></div>
                </div>
                <ul>
                  {price.about && price.about.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default GroomingPrice;
