import React, { useEffect, useRef, useState } from "react";
import glass from "../../assets/images/zooming-magnifying-glass-svgrepo-com.svg";
import { ToastContainer, toast } from "react-toastify";
import "./detail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBasketShopping,
  faHeart,
  faStar,
  faTrashCan,
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
import { getAllData, patchData } from "../../Service/requests";
import { AddUsers } from "../../Redux/Slices/userSlice";
import { UpdateProducts } from "../../Redux/Slices/productSlice";

const Detail = () => {
  let profile = JSON.parse(localStorage.getItem("user"))
  const data = useSelector((state) => state.product.arr);
  const users = useSelector((state) => state.user.arr);
  const comment = useRef()
  const { id } = useParams();
  let find = data.find((elem) => elem._id == id);
  const fav = useSelector((state) => state.favorite.arr);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [selectedRating, setSelectedRating] = useState(1);
   
  useEffect(() => {
    getAllData("users").then((res) => {
      dispatch(AddUsers(res));
    
    });
  }, [dispatch]);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.current.value.trim()) {
      toast.error("Please enter a non-empty comment.");
      return;
    }

    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  
    const newComment = {
      _id: profile._id,
      comment: comment.current.value,
      rating: selectedRating,
      date: formattedDate, 
    };
  
    try {
      const updatedProduct = { ...find, comments: [...find.comments, newComment] };
      dispatch(UpdateProducts(updatedProduct));
      await patchData("products", find._id, {
        comments: [...find.comments, newComment],
      });
  
      toast.success("Comment submitted successfully!");
      comment.current.value = "";
      setSelectedRating(1)
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error("Failed to submit comment. Please try again.");
    }
  };

  const handleDeleteComment= async(comment)=>{
    try {
      const updatedComments = find.comments.filter(
        (elem) => elem !== comment
      );
      const updatedProduct = { ...find, comments: updatedComments };
      dispatch(UpdateProducts(updatedProduct));
      await patchData("products", find._id, { comments: updatedComments });
      toast("Comment deleted successfully!");
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("Failed to delete comment. Please try again.");
    }

  } 
  return (
    <section id="detail">
      <div className="container">
        <div className="top">
          <Link className="back" to="/" target="_parent">
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Back
          </Link>

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
          <h3 className="title">Review ({find.comments.length})</h3>
          <div className="comments">
          {find.comments.length === 0 ? (
              <p style={{ fontSize:"1.4rem", color:"gray"}} >No comments yet.</p>
            ) : (
              find.comments.map((elem) => {
                const user = users.find((el) => el._id === elem._id);
                return user ? (
                  <div className="comment" key={elem._id}>
                    <div className="profile">
                      <img src={user.image} alt="" />
                    </div>
                    <div className="right">
                      <div className="stars">
                        <p>{elem.rating}</p>
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="from">
                        <h5>
                          {user.name} {user.surname}
                        </h5>
                        <p className="date">{elem.date}</p>
                        {profile._id == user._id ? (
                          <FontAwesomeIcon
                            onClick={() => handleDeleteComment(elem)}
                            icon={faTrashCan}
                            style={{
                              color: "red",
                              fontSize: "1.3rem",
                              cursor: "pointer",
                            }}
                          />
                        ) : null}
                      </div>
                      <p className="commentText">{elem.comment}</p>
                    </div>
                  </div>
                ) : null;
              })
            )}
            <form onSubmit={handleSubmit} action="">
              <div className="ratingStar">
                <p>Your Rating</p>
                <div className="rating">
                  <input
                    defaultValue={5}
                    name="rate"
                    id="star5"
                    type="radio"
                    onChange={() => setSelectedRating(5)}
                    checked={selectedRating === 5}
                  />
                  <label title="5 stars" htmlFor="star5" />
                  <input
                    defaultValue={4}
                    name="rate"
                    id="star4"
                    type="radio"
                    onChange={() => setSelectedRating(4)}
                    checked={selectedRating === 4}
                  />
                  <label title="4 stars" htmlFor="star4" />
                  <input
                    defaultValue={3}
                    name="rate"
                    id="star3"
                    type="radio"
                    onChange={() => setSelectedRating(3)}
                    checked={selectedRating === 3}
                  />
                  <label title="3 stars" htmlFor="star3" />
                  <input
                    defaultValue={2}
                    name="rate"
                    id="star2"
                    type="radio"
                    onChange={() => setSelectedRating(2)}
                    checked={selectedRating === 2}
                  />
                  <label title="2 stars" htmlFor="star2" />
                  <input
                    defaultValue={1}
                    name="rate"
                    id="star1"
                    type="radio"
                    onChange={() => setSelectedRating(1)}
                    checked={selectedRating === 1}
                  />
                  <label title="1 star" htmlFor="star1" />
                </div>
              </div>
              <textarea ref={comment} placeholder="Your Review"></textarea>
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
