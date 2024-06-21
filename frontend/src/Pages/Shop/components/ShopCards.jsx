import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';
import { faBasketShopping, faStar, faPaw, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllData,  patchData } from "../../../Service/requests";
import { AddProducts } from "../../../Redux/Slices/datasSlice";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Addfav } from "../../../Redux/Slices/favoriteSlice";
import { AddBasket } from "../../../Redux/Slices/basketSlice";
import { ToastContainer} from 'react-toastify';
const ShopCards = () => {
  const datas = useSelector((state) => state.datas.products);
  const fav = useSelector((state) => state.favorite.arr);

  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const cardsPerPage = 9;

  useEffect(() => {
    getAllData("products").then(res => {
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

  const totalCards = datas.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = datas.slice(indexOfFirstCard, indexOfLastCard);

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

  const handleFav = async(elem, e) => {
    e.preventDefault(); 
    dispatch(Addfav(elem));
  
}
 const handleColor = (id) =>{
    return fav.find(elem=> elem._id==id)
}
const handleBasket = async(elem, e) => {
  e.preventDefault(); 
  dispatch(AddBasket(elem));

}

  return (
    <div className="shops">
      <div className="leftSide">
        <div className="filters">
          <h3>Popular Category</h3>
          <div className="row">
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>New Products</h4>
            </div>
            <span>(8)</span>
          </div>
          <div className="row">
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Discounts</h4>
            </div>
            <span>(8)</span>
          </div>
          <div className="row">
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Best Sellers</h4>
            </div>
            <span>(8)</span>
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
              />$ - 
              <input 
                type="number" 
                value={priceRange[1]} 
                onChange={onMaxPriceChange} 
              /> $
            </p>
            <button className="filterPrice">Filter</button>
          </div>
        </div>

        <div className="filters">
          <h3>Product Categories</h3>
          <div className="row">
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Foods</h4>
            </div>
            <span>(8)</span>
          </div>
          <div className="row">
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Clothings</h4>
            </div>
            <span>(8)</span>
          </div>
          <div className="row">
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Toys</h4>
            </div>
            <span>(8)</span>
          </div>
        </div>

        <div className="filters">
          <h3>Filter By Brands</h3>
          <div className="row">
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Foods</h4>
            </div>
            <span>(8)</span>
          </div>
          <div className="row">
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Clothings</h4>
            </div>
            <span>(8)</span>
          </div>
          <div className="row">
            <div className="title">
              <FontAwesomeIcon icon={faPaw} />
              <h4>Toys</h4>
            </div>
            <span>(8)</span>
          </div>
        </div>

        <div className="filters">
          <h3>Filter By Tags</h3>
          <div className="tags">
            <div className="tag">Collection</div>
            <div className="tag">Food Pet</div>
            <div className="tag">Kitten Food</div>
            <div className="tag">Collection</div>
            <div className="tag">Food Pet</div>
            <div className="tag">Kitten Food</div>
          </div>
        </div>
      </div>

      <div className="cards">
        {loading ? (
          Array.from({ length: cardsPerPage }).map((_, index) => (
            <div className="card" key={index}>
              <div className="imgBox">
                <Skeleton height={200} style={{width:"100%"}}  />
              </div>
              <div className="prices">
                <Skeleton width={100} />
                <Skeleton width={50} />
              </div>
              <p className='about'>
                <Skeleton count={2} />
              </p>
              <div className="stars">
                <Skeleton width={100} />
                <Skeleton width={50} />
              </div>
            </div>
          ))
        ) : (
          currentCards.map(card => (
            <Link to={`/${card._id}`}  className="card" key={card._id}>
              <div className="imgBox">
                <img src={card.image} alt="product" />
                <div className="transition">
                  <div onClick={(e)=> handleFav(card,e)} style={{color: handleColor(card._id) ? "white" : "#f47107",backgroundColor: handleColor(card._id) ? "#f47107" : "white"}}  className="circle">
                    <FontAwesomeIcon className='like' icon={faHeart} />
                  </div>
                  <div onClick={(e)=> handleBasket(card,e)} className="basket">
                    <FontAwesomeIcon className='basketIcon' icon={faBasketShopping} />
                    Add to Card
                  </div>
                </div>
                <div className="disc">-{card.discount}%</div>
              </div>
              <div className="prices">
                <h4 className='price'>${Math.round((card.price - (card.price * card.discount / 100)) * 100) / 100}</h4>
                <div className="oldPrice">${card.price}</div>
              </div>
              <p className='about'>{card.description}</p>
              <div className="stars">
                <div className="star">
                {Array.from({ length: card.rating }, (_, index) => (
                    <FontAwesomeIcon icon={faStar} key={index} />
                  ))}
                </div>
                <p>({card.comments.length} reviews)</p>
              </div>
            </Link>
          ))
        )}
        <div className="arrows">
          <button className="arrow next" onClick={prevPage} disabled={currentPage === 1}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="arrow before" onClick={nextPage} disabled={currentPage === totalPages}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ShopCards;
