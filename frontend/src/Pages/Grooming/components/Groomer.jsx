import React, { useEffect } from "react";
import paw from "../../../assets/images/pngwing.com (29).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../../Service/requests";
import { AddDatas } from "../../../Redux/Slices/datasSlice";

const Groomer = () => {
  const groomers = useSelector((state) => state.datas.arr);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllData("groomers").then((res) => dispatch(AddDatas(res)));
  }, [dispatch]);
  return (
    <section id="groomer">
      <div className="container">
        <div className="title">
          <h3>Our Groomers</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="groomers">
          {groomers && groomers.map(groomer=>{
            return(
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
            )
          })}
         
         
        </div>
      </div>
    </section>
  );
};

export default Groomer;
