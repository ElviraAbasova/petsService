import React, { useEffect, useState } from "react";
import paw from "../../../assets/images/pngwing.com (29).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../../Service/requests";
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css';
import { AddGroomers } from "../../../Redux/Slices/groomerSlice";
import SmoothScrollComponent from "../../../hook/SmoothScrollComponent";

const Groomer = () => {
  const [loading, setLoading] = useState(true); 

  const groomers = useSelector((state) => state.groomer.arr);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllData("groomers").then((res) => {
      dispatch(AddGroomers(res));
      setLoading(false); 
    });
  }, [dispatch]);
  const fadeIn = SmoothScrollComponent();
  return (
    <section id="groomer">
      <div ref={fadeIn.ref} className="container">
        <div className="title">
          <h3>Our Groomers</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="groomers">
          {loading ? (
            
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="groomer">
                <div className="card">
                  <Skeleton circle height={150} width={150} />
                </div>
                <div className="about">
                  <Skeleton width={120} height={20} />
                  <p>
                    <Skeleton count={2} />
                  </p>
                  <div className="icons">
                    <Skeleton circle width={30} height={30} />
                    <Skeleton circle width={30} height={30} />
                    <Skeleton circle width={30} height={30} />
                  </div>
                </div>
              </div>
            ))
          ) : (
          
            groomers.map((groomer) => (
              <div key={groomer._id} className="groomer">
                <div className="card">
                  <img src={groomer.image} alt="groomer" />
                </div>
                <div className="about">
                  <h4>{groomer.name + " " + groomer.surname}</h4>
                  <p>{groomer.about}</p>
                  <div className="icons">
                    <Link to={groomer.facebook} target="_blank" className="icon">
                      <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link to={groomer.instagram} target="_blank" className="icon">
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link to={groomer.twitter} target="_blank" className="icon">
                      <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Groomer;
