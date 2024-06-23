import React, { useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { SearchProduct } from '../../../Redux/Slices/productSlice';
const Search = () => {
  let inputValue = useRef()
  const dispatch = useDispatch()
  return (
    <div className="searchBar">
          <input type="text" placeholder="Search product" ref={inputValue} onChange={()=>dispatch(SearchProduct(inputValue.current.value))} />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
  )
}

export default Search