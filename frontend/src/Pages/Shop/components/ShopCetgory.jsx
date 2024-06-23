import React from 'react'
import cat from "../../../assets/images/cat-psfohq519m9ha6coxp9o3h7n8nk2ta72kzszvmo1kw.png"
import dog from "../../../assets/images/bone-psfohp772s86yke236v1izg6n9opll3c8v5iecpfr4.png"
import bird from "../../../assets/images/macaw-psfohwpwlgihjg34va422xjvecnnb5x6xwde8keadc.png"
import fish from "../../../assets/images/fish-psfohuu87sfww85v69asxy0y7kwwvrpq9n2fa0h2ps.png"
import peptile from "../../../assets/images/chameleon-psfohr2vggarlsbbs7oanyz3u1fg0zasx4ghcwmneo.png"
import farm from "../../../assets/images/cow-psfohs0pnac1xe9ymq2x8gqkffat8oej993yu6l98g.png"
import { useDispatch, useSelector } from 'react-redux'
import { FilterPet} from '../../../Redux/Slices/productSlice'
const ShopCetgory = () => {
  const dispatch = useDispatch();

  return (
    <div className='shopCategories'>
            <div className="sections">
                <div className="section" onClick={()=>dispatch(FilterPet("Cat"))} >
                    <img src={cat} alt="cat" />
                    <h4>Cats</h4>
                </div>
                <div className="section" onClick={()=>dispatch(FilterPet("Dog"))}>
                <img src={dog} alt="dog" />
                <h4>Dogs</h4>
                </div>
                <div className="section">
                <img src={bird} alt="bird" onClick={()=>dispatch(FilterPet("Bird"))} />
                <h4>Birds</h4>
                </div>
                <div className="section">
                <img src={fish} alt="" onClick={()=>dispatch(FilterPet("Fish"))} />
                <h4>Fish</h4>
                </div>
                <div className="section">
                <img src={peptile} alt="" onClick={()=>dispatch(FilterPet("Peptile"))} />
                <h4>Peptile</h4>
                </div>
                <div className="section">
                <img src={farm} alt="" onClick={()=>dispatch(FilterPet("Other"))} />
                <h4>Others</h4>
                </div>
            </div>
        
    </div>
  )
}

export default ShopCetgory