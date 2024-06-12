import React from 'react'
import Search from './Search'
import ShopCetgory from './ShopCetgory'
import ShopCards from './ShopCards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Shopping = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <section id='shopping'>
        <div className="container">
            <Search/>
            <ShopCetgory/>
            <ShopCards/>
        </div>
        <div className="toTop" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </section>
  )
}

export default Shopping