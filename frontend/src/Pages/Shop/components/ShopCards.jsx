import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";
import {
  faBasketShopping,
  faStar,
  faPaw,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllData, patchData } from "../../../Service/requests";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Addfav } from "../../../Redux/Slices/favoriteSlice";
import { AddBasket } from "../../../Redux/Slices/basketSlice";
import { ToastContainer } from "react-toastify";
import {
  AddProducts,
  FilterCategory,
  FilterDiscount,
  FilterPrice,
  FilterRating,
  FilterSeller,
  FilterTags,
} from "../../../Redux/Slices/productSlice";
import Swal from "sweetalert2";

const ShopCards = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const filter = useSelector((state) => state.product.filter);
  const datas = useSelector((state) => state.product.arr);

  const fav = useSelector((state) => state.favorite.arr);
  const dispatch = useDispatch();

  const [priceRange, setPriceRange] = useState([0, 500]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const cardsPerPage = 9;

  useEffect(() => {
    getAllData("products").then((res) => {
      dispatch(AddProducts(res));
      setLoading(false);
    });
  }, [dispatch]);

  const onSliderChange = (value) => {
    setPriceRange(value);
  };

  const onMinPriceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPriceRange([value, priceRange[1]]);
  };

  const onMaxPriceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPriceRange([priceRange[0], value]);
  };

  const totalCards = filter.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filter.slice(indexOfFirstCard, indexOfLastCard);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFav = async (elem, e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "You need to log in to add to favorites.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f47107",
        cancelButtonColor: "#8D19E8",
        confirmButtonText: "Log in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      dispatch(Addfav(elem));
    }
  };

  const handleColor = (id) => {
    return fav.find((elem) => elem._id === id);
  };

  const handleBasket = async (elem, e) => {
    e.preventDefault();
    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "You need to log in to add to basket.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f47107",
        cancelButtonColor: "#8D19E8",
        confirmButtonText: "Log in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      dispatch(AddBasket(elem));
    }
  };

  const handleDiscCount = (disc) => {
    return datas.filter((elem) => elem.discount >= disc).length;
  };

  const handleRatingCount = (min, max) => {
    return datas.filter((elem) => elem.rating >= min && elem.rating < max)
      .length;
  };

  const handleCategoryCount = (category) => {
    return datas.filter((elem) => elem.category === category).length;
  };

  const handleBestCount = () => {
    return datas.filter((elem) => elem.seller >= 30).length;
  };
  return (
    <div className="shops">
      <div className="leftSide">
        <div className="filters">
          <h3>Popular Category</h3>
          <div className="row" onClick={() => dispatch(FilterDiscount(50))}>
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Discounts 50% +</h4>
            </div>
            <span>({handleDiscCount(50)})</span>
          </div>
          <div className="row" onClick={() => dispatch(FilterDiscount(30))}>
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Discounts 30% +</h4>
            </div>
            <span>({handleDiscCount(30)})</span>
          </div>
          <div className="row" onClick={() => dispatch(FilterDiscount(1))}>
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>All Discounts</h4>
            </div>
            <span>({handleDiscCount(1)})</span>
          </div>
          <div className="row" onClick={() => dispatch(FilterSeller(30))}>
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Best Sellers</h4>
            </div>
            <span>({handleBestCount()})</span>
          </div>
        </div>

        <div className="filters">
          <h3>Filter By Price</h3>
          <Slider
            range
            min={0}
            max={500}
            defaultValue={[0, 500]}
            value={priceRange}
            onChange={onSliderChange}
            className="slider"
          />
          <div className="row">
            <p>
              Price
              <input
                type="number"
                value={priceRange[0]}
                onChange={onMinPriceChange}
              />
              $ -
              <input
                type="number"
                value={priceRange[1]}
                onChange={onMaxPriceChange}
              />{" "}
              $
            </p>
            <button className="filterPrice" onClick={() => dispatch(FilterPrice({ min: priceRange[0], max: priceRange[1] }))}>Filter</button>
          </div>
        </div>

        <div className="filters">
          <h3>Product Categories</h3>
          <div className="row" onClick={() => dispatch(FilterCategory("Food"))}>
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Foods</h4>
            </div>
            <span>({handleCategoryCount("Food")})</span>
          </div>
          <div
            className="row"
            onClick={() => dispatch(FilterCategory("Clothes"))}
          >
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Clothes</h4>
            </div>
            <span>({handleCategoryCount("Clothes")})</span>
          </div>
          <div className="row" onClick={() => dispatch(FilterCategory("Toys"))}>
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Toys</h4>
            </div>
            <span>({handleCategoryCount("Toys")})</span>
          </div>
          <div
            className="row"
            onClick={() => dispatch(FilterCategory("Cleaning"))}
          >
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Cleaning</h4>
            </div>
            <span>({handleCategoryCount("Cleaning")})</span>
          </div>
          <div
            className="row"
            onClick={() => dispatch(FilterCategory("Medical"))}
          >
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Medical</h4>
            </div>
            <span>({handleCategoryCount("Medical")})</span>
          </div>
          <div
            className="row"
            onClick={() => dispatch(FilterCategory("Clumbing"))}
          >
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Clumbing</h4>
            </div>
            <span>({handleCategoryCount("Clumbing")})</span>
          </div>
          <div className="row">
            <div
              className="title"
              onClick={() => dispatch(FilterCategory("Bed"))}
            >
              <FontAwesomeIcon icon={faPaw} />
              <h4>Beds</h4>
            </div>
            <span>({handleCategoryCount("Bed")})</span>
          </div>
        </div>

        <div className="filters">
          <h3>Filter By Rating</h3>
          <div
            className="row"
            onClick={() => dispatch(FilterRating({ min: 5, max: 6 }))}
          >
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>
                5 <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              </h4>
            </div>
            <span>({handleRatingCount(5, 6)})</span>
          </div>
          <div
            className="row"
            onClick={() => dispatch(FilterRating({ min: 4, max: 5 }))}
          >
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>
                {" "}
                4-5{" "}
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              </h4>
            </div>
            <span>({handleRatingCount(4, 5)})</span>
          </div>
          <div
            className="row"
            onClick={() => dispatch(FilterRating({ min: 3, max: 4 }))}
          >
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>
                {" "}
                3-4{" "}
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              </h4>
            </div>
            <span>({handleRatingCount(3, 4)})</span>
          </div>
          <div
            className="row"
            onClick={() => dispatch(FilterRating({ min: 0, max: 3 }))}
          >
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>
                {" "}
                0-3{" "}
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              </h4>
            </div>
            <span>({handleRatingCount(0, 3)})</span>
          </div>
        </div>

        <div className="filters">
          <h3>Filter By Tags</h3>
          <div className="tags">
            {[...new Set(datas.flatMap((data) => data.tags))].map(
              (elem, index) => (
                <div
                  className="tag"
                  key={index}
                  onClick={() => dispatch(FilterTags(elem))}
                >
                  {elem}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="cards">
        {loading
          ? Array.from({ length: cardsPerPage }).map((_, index) => (
              <div className="card" key={index}>
                <div className="imgBox">
                  <Skeleton height={200} style={{ width: "100%" }} />
                </div>
                <div className="prices">
                  <Skeleton width={100} />
                  <Skeleton width={50} />
                </div>
                <p className="about">
                  <Skeleton count={2} />
                </p>
                <div className="stars">
                  <Skeleton width={100} />
                  <Skeleton width={50} />
                </div>
              </div>
            ))
          : currentCards.map((card) => (
              <Link onClick={()=> window.scrollTo(0, 0)} to={`/${card._id}`} className="card" key={card._id}>
                <div className="imgBox">
                  <img src={card.image} alt="product" />
                  <div className="transition">
                    <div
                      onClick={(e) => handleFav(card, e)}
                      style={{
                        color: handleColor(card._id) ? "white" : "#f47107",
                        backgroundColor: handleColor(card._id)
                          ? "#f47107"
                          : "white",
                      }}
                      className="circle"
                    >
                      <FontAwesomeIcon className="like" icon={faHeart} />
                    </div>
                    <div
                      onClick={(e) => handleBasket(card, e)}
                      className="basket"
                    >
                      <FontAwesomeIcon
                        className="basketIcon"
                        icon={faBasketShopping}
                      />
                      Add to Card
                    </div>
                  </div>
                  {card.discount != 0 ? (<div className="disc">-{card.discount}%</div> ): null}
        
                </div>
                <div className="prices">
                  <h4 className="price">
                    $
                    {Math.round(
                      (card.price - (card.price * card.discount) / 100) * 100
                    ) / 100}
                  </h4>
                  {card.discount != 0 ? ( <div className="oldPrice">${card.price}</div>): null}
                 
                </div>
                <p className="about">{card.title}</p>
                <div className="stars">
                  <div className="star">
                     <p>{card.rating}  </p>  <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p>({card.comments.length} reviews)</p>
                </div>
              </Link>
            ))}
      <div className="arrows" style={{ display: totalPages > 1 ? 'block' : 'none' }}>
  <button
    className="arrow next"
    onClick={prevPage}
    disabled={currentPage === 1}
  >
    <FontAwesomeIcon icon={faArrowLeft} />
  </button>
  <button
    className="arrow before"
    onClick={nextPage}
    disabled={currentPage === totalPages}
  >
    <FontAwesomeIcon icon={faArrowRight} />
  </button>
</div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShopCards;
