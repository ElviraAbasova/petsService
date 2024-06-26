import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import meal from "../../../assets/images/rev_home2_01.png";
import dogs from "../../../assets/images/rev_home2_2.png";
import back1 from "../../../assets/images/pngwing.com (32e).png";
import cat from "../../../assets/images/rev_home7_16.png";
import back2 from "../../../assets/images/rev_home7_15.png";
import dog from "../../../assets/images/rev_home3 (1).png";
import back3 from "../../../assets/images/rev_home3_6.png";
import "../home.scss";
import { FilterCategory } from "../../../Redux/Slices/productSlice";
import { useDispatch } from "react-redux";


const Hero = () => {
  
  const dispatch = useDispatch()
  const slides = [
    {
      content: (
        <>
          <h2>Best Foods For Your Pets</h2>
          <p>Help your dog maintain a healthier weight with </p>
          <Link
            onClick={() => {
              window.scrollTo(0, 800);
              setTimeout(() => {
                dispatch(FilterCategory("food"));
              }, 200);
            }}
            to="/shop"
            className="shop"
          >
            Shop Now
          </Link>
        </>
      ),
      mealImg: meal,
      dogsImg: dogs,
      backImg: back1,
      color: "#ebeefc",
    },
    {
      content: (
        <>
          <h2>Comfortable Beds For Your Pets</h2>
          <p>Keep your pets happy and healthy with our treats</p>
          <Link  onClick={() =>{
             window.scrollTo(0, 800);
             setTimeout(() => {
              dispatch(FilterCategory("bed"));
            }, 200)
          }
          
             
            } to="/shop" className="shop">
            Shop Now
          </Link>
        </>
      ),
      dogsImg: cat,
      backImg: back2,
      color: "#F6E2E4",
    },
    {
      content: (
        <>
          <h2>New & Exclusive Pet Clothings</h2>
          <p>Give your pets the best with our options</p>
          <Link onClick={() =>
          {
            window.scrollTo(0, 800);
            setTimeout(() => {
              dispatch(FilterCategory("clothes"));
            }, 200)
          } 

          }
              to="/shop" className="shop">
            Shop Now
          </Link>
        </>
      ),
      dogsImg: dog,
      backImg: back3,
      color: "#E3F5FD",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeProp, setFadeProp] = useState("fade-in");
  const intervalTime = 5000;
  const startX = useRef(0);
  const endX = useRef(0);

  const handlePrevClick = () => {
    setFadeProp("fade-out");
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setFadeProp("fade-in");
    }, 500);
  };

  const handleNextClick = () => {
    setFadeProp("fade-out");
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setFadeProp("fade-in");
    }, 500);
  };

  const goToSlide = (index) => {
    setFadeProp("fade-out");
    setTimeout(() => {
      setCurrentSlide(index);
      setFadeProp("fade-in");
    }, 500);
    setIsPaused(true);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      handleNextClick();
    } else if (endX.current - startX.current > 50) {
      handlePrevClick();
    }
  };

  const handleMouseDown = (e) => {
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (startX.current) {
      endX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (startX.current - endX.current > 50) {
      handleNextClick();
    } else if (endX.current - startX.current > 50) {
      handlePrevClick();
    }
    startX.current = 0;
    endX.current = 0;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        handleNextClick();
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);

  return (
    <section
   
      id="hero"
      className={fadeProp}
      style={{ backgroundColor: slides[currentSlide].color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="container">
        <div className="content">{slides[currentSlide].content}</div>
        {slides[currentSlide].mealImg && (
          <div className="meal">
            <img src={slides[currentSlide].mealImg} alt="Meal" />
          </div>
        )}
        <div className="dogs">
          <img src={slides[currentSlide].dogsImg} alt="Dogs" />
        </div>
        <div className="back">
          <img src={slides[currentSlide].backImg} alt="Background" />
        </div>
      </div>
      <div className="arrow left" onClick={handlePrevClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="arrow right" onClick={handleNextClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
