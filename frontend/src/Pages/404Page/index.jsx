import React from "react";
import "./404Page.scss"
import { Link } from "react-router-dom";
import pet from "../../assets/images/404-n.png"
const NoPage = () => {
  return (
    <div id="error">
      <div className="container error">
      <div className="left">
      <h1>404</h1>
      <p>Oops! Page is not found.</p>
      <Link className="link" to="/">Go back to home</Link>
      </div>
      <div className="right">
        <img src={pet} alt="pet" />
      </div>
   
    </div>
    </div>
    
  );
};

export default NoPage;
