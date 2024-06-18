import React from 'react'
import cat from "../../../assets/images/cat-psfohq519m9ha6coxp9o3h7n8nk2ta72kzszvmo1kw.png"
import dog from "../../../assets/images/bone-psfohp772s86yke236v1izg6n9opll3c8v5iecpfr4.png"
import bird from "../../../assets/images/macaw-psfohwpwlgihjg34va422xjvecnnb5x6xwde8keadc.png"
import fish from "../../../assets/images/fish-psfohuu87sfww85v69asxy0y7kwwvrpq9n2fa0h2ps.png"
import peptile from "../../../assets/images/chameleon-psfohr2vggarlsbbs7oanyz3u1fg0zasx4ghcwmneo.png"
import farm from "../../../assets/images/cow-psfohs0pnac1xe9ymq2x8gqkffat8oej993yu6l98g.png"
import { Link } from 'react-router-dom';
const ShopCetgory = () => {
  return (
    <div className='shopCategories'>
            <div className="sections">
                <Link to="/shop" target='_parent' className="section">
                    <img src={cat} alt="" />
                    <h4>Cats</h4>
                </Link>
                <Link to="/shop" target='_parent' className="section">
                <img src={dog} alt="" />
                <h4>Dogs</h4>
                </Link>
                <Link to="/shop" target='_parent' className="section">
                <img src={bird} alt="" />
                <h4>Birds</h4>
                </Link>
                <Link to="/shop" target='_parent' className="section">
                <img src={fish} alt="" />
                <h4>Fish</h4>
                </Link>
                <Link to="/shop" target='_parent' className="section">
                <img src={peptile} alt="" />
                <h4>Peptile</h4>
                </Link>
                <Link to="/shop" target='_parent' className="section">
                <img src={farm} alt="" />
                <h4>Farm Animal</h4>
                </Link>
            </div>
        
    </div>
  )
}

export default ShopCetgory