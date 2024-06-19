import React, { useEffect } from "react";
import paw from "../../../assets/images/pngwing.com (29).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { AddDatas } from "../../../Redux/Slices/datasSlice";
import { Link } from "react-router-dom";
import { getAllData } from "../../../Service/requests";
const Veterinaries = () => {
  const veterinars = useSelector((state) => state.datas.arr);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllData("veterinars").then((res) => dispatch(AddDatas(res)));
  }, [dispatch]);
  return (
    <section id="veterinaries">
      <div className="container">
        <div className="title">
          <h3>Our Team</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="veterinars">
          {veterinars && veterinars.map(veterinar=>{
            return(
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

            )
          })}
        
        </div>
      </div>
    </section>
  );
};

export default Veterinaries;
