import React, { useState } from 'react';
import paw from "../../../assets/images/pngwing.com (29).png";
import cat from "../../../assets/images/cat-psfohq519m9ha6coxp9o3h7n8nk2ta72kzszvmo1kw.png";
import dog from "../../../assets/images/bone-psfohp772s86yke236v1izg6n9opll3c8v5iecpfr4.png";
import bird from "../../../assets/images/macaw-psfohwpwlgihjg34va422xjvecnnb5x6xwde8keadc.png";
import fish from "../../../assets/images/fish-psfohuu87sfww85v69asxy0y7kwwvrpq9n2fa0h2ps.png";
import peptile from "../../../assets/images/chameleon-psfohr2vggarlsbbs7oanyz3u1fg0zasx4ghcwmneo.png";
import farm from "../../../assets/images/cow-psfohs0pnac1xe9ymq2x8gqkffat8oej993yu6l98g.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FilterPet } from "../../../Redux/Slices/productSlice";
import SmoothScrollComponent from '../../../hook/SmoothScrollComponent';

const Categories = () => {
  const fadeIn = SmoothScrollComponent();
  const dispatch = useDispatch();
  const [delayActive, setDelayActive] = useState(false);

  const handleFilter = (petType) => {
    if (!delayActive) {
      setDelayActive(true);
      setTimeout(() => {
        dispatch(FilterPet(petType));
        setDelayActive(false);
      }, 150); 
    }
    window.scrollTo(0, 800);
  };

  return (
    <section id='categories'>
      <div ref={fadeIn.ref}  className="container">
        <div className="title">
          <h3>Shop By Pet</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="sections">
          <Link to="/shop" onClick={() => handleFilter("cat")} className="section">
            <img src={cat} alt="cat" />
            <h4>Cats</h4>
          </Link>
          <Link to="/shop" onClick={() => handleFilter("dog")} className="section">
            <img src={dog} alt="dog" />
            <h4>Dogs</h4>
          </Link>
          <Link to="/shop" onClick={() => handleFilter("bird")} className="section">
            <img src={bird} alt="bird" />
            <h4>Birds</h4>
          </Link>
          <Link to="/shop" onClick={() => handleFilter("fish")} className="section">
            <img src={fish} alt="fish" />
            <h4>Fish</h4>
          </Link>
          <Link to="/shop" onClick={() => handleFilter("peptile")} className="section">
            <img src={peptile} alt="peptile" />
            <h4>Peptile</h4>
          </Link>
          <Link to="/shop" onClick={() => handleFilter("Other")} className="section">
            <img src={farm} alt="farm" />
            <h4>Others</h4>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
