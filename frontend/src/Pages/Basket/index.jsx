import React from 'react'
import "./basket.scss"
import post from "../../assets/images/ps-3-p-1-300x300.png"
const Basket = () => {
  return (
    <section id='basket'>
        <div className="container">
            <div className="title">
            <h2>Shopping Card </h2>
            <h2>1 items</h2>
            </div>
            <div className="basket">
            <div className="leftSide">
                
                <div className="product">
                    <div className="col"> 
                        <div className="imgBox">
                        <img src={post} alt="" />
                        </div>
                            
                        <h4>DEEP DISH CUDDLER</h4>
                    </div>
                    <div className="col">        
                        <h5>$20</h5>
                    </div>
                    <div className="col">        
                        <div className="minus">-</div>
                        <span>1</span>
                        <div className="plus">+</div>
                    </div>
                    <div className="col"> 
                        <div className="total">
                            <h5>Total:</h5>
                             <h5>$34</h5>

                            </div>       
                    </div>
                </div>
                <div className="product">
                    <div className="col">
                       <div className="imgBox">
                       <img src={post} alt="" />
                       </div>
                           
                        <h4>DEEP dddddddddddddddddddddddddddddddDISH CUDDLER</h4>
                    </div>
                    <div className="col">        
                        <h5>$20</h5>
                    </div>
                    <div className="col">        
                        <div className="minus">-</div>
                        <span>1</span>
                        <div className="plus">+</div>
                    </div>
                    <div className="col">        
                    <div className="total">
                            <h5>Total</h5>
                             <h5>$34</h5>

                            </div>  
                    </div>
                </div>
                </div>
                <div className="rightSide">
                    <div className="top">
                    <div className="row">
                    <h5>Subtotal</h5>
                    <h4>$100</h4>
                </div>
                <div className="row">
                    <h5>Shipping</h5>
                    <h4>$4.99</h4>
                </div>
                    </div>
                    <div className="bottom">
                        <div className="row">
                        <h5>Total</h5>
                        <h4>$15</h4>
                        </div>
                        <button>Check out</button>
                    </div>
            </div>
            </div>    
            </div>
           
        
    </section>
  )
}

export default Basket