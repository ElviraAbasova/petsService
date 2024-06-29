import React from "react";
import "./404Page.scss"
import { Link } from "react-router-dom";
const NoPage = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! Page is not found.</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default NoPage;
