import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';
import { faBasketShopping, faStar, faPaw, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import post from "../../../assets/images/ps-3-p-1-300x300.png"
const ShopCards = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

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

  const cards = [
   
    { id: 1, price: 100, oldPrice: 150, description: "Food for cat", discount: "-30%", reviews: 5 },
    { id: 2, price: 100, oldPrice: 150, description: "Food for cat", discount: "-30%", reviews: 5 },
    { id: 3, price: 100, oldPrice: 150, description: "Food for cat", discount: "-30%", reviews: 5 },
    { id: 4, price: 100, oldPrice: 150, description: "Food for cat", discount: "-30%", reviews: 5 },
    { id: 5, price: 100, oldPrice: 150, description: "Food for cat", discount: "-30%", reviews: 5 },
    { id: 6, price: 100, oldPrice: 150, description: "Food for cat", discount: "-30%", reviews: 5 },
    { id: 7, price: 100, oldPrice: 150, description: "Food for cat", discount: "-30%", reviews: 5 },
    { id: 8, price: 100, oldPrice: 150, description: "Food for cat", discount: "-30%", reviews: 5 },
    { id: 9, price: 100, oldPrice: 150, description: "Food for cat", discount: "-30%", reviews: 5 },
    { id: 10, price: 100, oldPrice: 150, description: "Food for cat", discount: "-30%", reviews: 5 },
    
  ];

  const totalCards = cards.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

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
        {currentCards.map(card => (
          <div className="card" key={card.id}>
            <div className="imgBox">
              <img src={post} alt="product" />
              <div className="transition">
                <div className="circle">
                  <FontAwesomeIcon className='like' icon={faHeart} />
                </div>
                <div className="basket">
                  <FontAwesomeIcon className='basketIcon' icon={faBasketShopping} />
                  Add to Card
                </div>
              </div>
              <div className="disc">{card.discount}</div>
            </div>
            <div className="prices">
              <h4 className='price'>${card.price}</h4>
              <div className="oldPrice">${card.oldPrice}</div>
            </div>
            <p className='about'>{card.description}</p>
            <div className="stars">
              <div className="star">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon icon={faStar} key={index} />
                ))}
              </div>
              <p>({card.reviews} reviews)</p>
            </div>
          </div>
        ))}
        <div className="arrows">
        <button className=" arrow next" onClick={prevPage} disabled={currentPage === 1}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className=" arrow before" onClick={nextPage} disabled={currentPage === totalPages}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
          
        </div>
      
    </div>
  );
};

export default ShopCards;
