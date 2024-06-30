import React, { useState, useEffect, useRef } from "react";
import "../navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  faCartShopping,
  faBars,
  faHeart,
  faUser,
  faChevronDown,
  faArrowUp,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.svg";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const Navbar = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  const [select, setSelect] = useState(false);
  const [menu, setMenu] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const messagesEndRef = useRef(null);

  const fav = useSelector((state) => state.favorite.arr);
  const basket = useSelector((state) => state.basket.arr);

  const openMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prevChat) => [...prevChat, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const msgData = {
        message,
        id: socket.id,
      };
      socket.emit("send_message", msgData);
      setMessage("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleCount = () => {
    return basket.reduce((acc, elem) => {
      return acc + elem.count;
    }, 0);
  };

  return (
    <nav>
      <div className="container">
        <Link to="/">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        </Link>

        <ul className={menu ? "show" : ""}>
          <li className={location.pathname === "/" ? "choose" : ""}>
            <Link to="/" className="link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={location.pathname === "/shop" ? "choose" : ""}>
            <Link to="/shop" className="link" onClick={closeMenu}>
              Shop
            </Link>
          </li>
          <li className={location.pathname === "/contact" ? "choose" : ""}>
            <Link to="/contact" className="link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li
            className={`services ${select ? "active" : ""}`}
            onMouseEnter={() => setSelect(true)}
            onMouseLeave={() => setSelect(false)}
          >
            <span className="link">Services</span>
            <FontAwesomeIcon icon={faChevronDown} />
            {select && (
              <ul className="dropdown">
                <li
                  className={location.pathname === "/grooming" ? "choose" : ""}
                >
                  <Link to="/grooming" className="link" onClick={closeMenu}>
                    Grooming
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/veterinary" ? "choose" : ""
                  }
                >
                  <Link to="/veterinary" className="link" onClick={closeMenu}>
                    Veterinary
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {user && user.user.toUpperCase() === "ADMIN" ? (
            <li className={location.pathname === "/admin" ? "choose" : ""}>
              <Link to="/admin" className="link" onClick={closeMenu}>
                Admin
              </Link>
            </li>
          ) : null}
        </ul>

        <div className="LogoBar">
          <Link
            to={user ? "/profile" : "/login"}
            className={`logo ${location.pathname === "/login" ? "choose" : ""}`}
          >
            <FontAwesomeIcon className="user" icon={faUser} />
          </Link>
          <Link
            to="/favorite"
            className={`logo ${
              location.pathname === "/favorite" ? "choose" : ""
            }`}
          >
            <FontAwesomeIcon className="like" icon={faHeart} />
            <div className="number">{fav.length}</div>
          </Link>
          <Link
            to="/basket"
            className={`logo ${
              location.pathname === "/basket" ? "choose" : ""
            }`}
          >
            <FontAwesomeIcon className="shop" icon={faCartShopping} />
            <div className="number">{handleCount()}</div>
          </Link>
        </div>
        <FontAwesomeIcon onClick={openMenu} icon={faBars} className="burger" />
      </div>
      <div className="toTop" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
      <div className="chat" onClick={() => setShowChat(!showChat)}>
        <FontAwesomeIcon icon={faCommentDots} />
      </div>
      {showChat && (
  <div className="chatModal">
    <div className="chatHeader">
      <h4>Chat</h4>
      <button onClick={() => setShowChat(false)}>Close</button>
    </div>
    <div className="chatBody">
      {chat.map((msg, index) => (
        <div
          key={index}
          className={`chatMessage ${
            msg.id === socket.id ? "right" : "left"
          }`}
        >
          <div className="chatName">
            {msg.id === socket.id ? user.name : "Asistan"}
          </div>
          <div className="chatText">{msg.message}</div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
    <form className="chatFooter" onSubmit={sendMessage}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  </div>
)}

    </nav>
  );
};

export default Navbar;
