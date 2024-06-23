import React, { useEffect, useState } from "react";
import paw from "../../../assets/images/pngwing.com (29).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllData } from "../../../Service/requests";
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css';
import { AddVeterinars } from "../../../Redux/Slices/veterinarSlice";
const Veterinaries = () => {
  const [loading, setLoading] = useState(true); 

  const veterinars = useSelector((state) => state.veterinar.arr);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllData("veterinars").then((res) => {
      dispatch(AddVeterinars(res));
      setLoading(false); 
    });
  }, [dispatch]);
  return (
    <section id="veterinaries">
      <div className="container">
        <div className="title">
          <h3>Our Team</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="veterinars">
          {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="veterinar">
                <Skeleton style={{width:"100%"}} height={340} />
                <div className="about">
                  <Skeleton width={120} height={20} />
                  <div className="icons">
                    <Skeleton circle width={30} height={30} />
                    <Skeleton circle width={30} height={30} />
                    <Skeleton circle width={30} height={30} />
                  </div>
                </div>
              </div>
            ))
          ) : (

            veterinars.map((veterinar) => (
              <div key={veterinar._id} className="veterinar">
                <img src={veterinar.image} alt="doctor" />
                <div className="about">
                  <h4>{veterinar.name + " " + veterinar.surname}</h4>
                  <div className="icons">
                    <Link to={veterinar.facebook} className="icon">
                      <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link to={veterinar.instagram} className="icon">
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link to={veterinar.twitter} className="icon">
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

export default Veterinaries;
