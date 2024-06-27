import React, { useState } from "react";
import "./basket.scss";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { DecBasket, DeleteAllBas, DeleteBasket, IncBasket } from "../../Redux/Slices/basketSlice";
import { ToastContainer} from 'react-toastify';
import SmoothScrollComponent from "../../hook/SmoothScrollComponent";


const Basket = () => {
  const fadeIn = SmoothScrollComponent();
  const basket = useSelector((state) => state.basket.arr);
  const dispatch = useDispatch()
  const handleInc=(elem,e)=>{
    e.preventDefault(); 
    dispatch(IncBasket(elem));
  }
  const handleDec=(elem,e)=>{
    e.preventDefault(); 
    dispatch(DecBasket(elem));

  }
  const handleDel=(elem,e)=>{
    e.preventDefault(); 
    dispatch(DeleteBasket(elem));

  }
  const handleCount=()=>{
    return basket.reduce((acc, elem) => {
      return acc + elem.count;
    }, 0);
  }
  const handleSum = () => {
    return Math.round(basket.reduce((acc, elem) => {
      return acc + (elem.count * (elem.price*(100-elem.discount)/100));

    }, 0) * 100) / 100;
  };
  const handleDeleteAll=()=>{
     dispatch(DeleteAllBas())

  }

  return (
    <section id="basket">
      <div ref={fadeIn.ref} className="container">
        <div className="title">
          <h2>Shopping Card </h2>
          <h2>{handleCount()} items</h2>
        </div>
        {basket.length !==0 ? (
           <div className="basket">
           <div className="leftSide">
             {basket && basket.map(data=>{
               return(
                 <Link key={data._id} to={`/${data._id}`} onClick={()=> window.scrollTo(0, 0)}  className="product">
                 <div className="col">
                   <div className="imgBox">
                     <img src={data.image} alt="product" />
                   </div>
   
                   <h4>{data.title}</h4>
                 </div>
                 <div className="col">
                   <h5>${Math.round((data.price - (data.price * data.discount / 100)) * 100) / 100}</h5>
                 </div>
                 <div className="col">
                   <div onClick={(e)=> handleDec(data,e)} className="minus">-</div>
                   <span>{data.count}</span>
                   <div onClick={(e)=> handleInc(data,e)} className="plus">+</div>
                 </div>
                 <div className="col">
                   <div className="total">
                     <h5>Total:</h5>
                     <h5>${Math.round((data.count*(data.price - (data.price * data.discount / 100))) * 100) / 100}</h5>
                   </div>
                 </div>
                 <button onClick={(e)=> handleDel(data,e)} className="button">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 69 14"
                     className="svgIcon bin-top"
                   >
                     <g clipPath="url(#clip0_35_24)">
                       <path
                         fill="black"
                         d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                       />
                     </g>
                     <defs>
                       <clipPath id="clip0_35_24">
                         <rect fill="white" height={14} width={69} />
                       </clipPath>
                     </defs>
                   </svg>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 69 57"
                     className="svgIcon bin-bottom"
                   >
                     <g clipPath="url(#clip0_35_22)">
                       <path
                         fill="black"
                         d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                       />
                     </g>
                     <defs>
                       <clipPath id="clip0_35_22">
                         <rect fill="white" height={57} width={69} />
                       </clipPath>
                     </defs>
                   </svg>
                 </button>
               </Link>
               )
             })}
            
             
           </div>
           <div className="rightSide">
             <div className="top">
               <div className="row">
                 <h5>Subtotal</h5>
                 <h4>$ {handleSum()}</h4>
               </div>
               <div className="row">
                 <h5>Shipping</h5>
                 <h4>$ 5</h4>
               </div>
             </div>
             <div className="bottom">
               <div className="row">
                 <h5>Total</h5>
                 <h4>$ {handleSum()+5}</h4>
               </div>
               <button >Check out</button>
               <button onClick={handleDeleteAll} style={{backgroundColor:"red"}}>Delete All</button>

             </div>
           </div>
         </div>

        ):(
          <h3 style={{ color: "gray", fontSize: "2.5rem", textAlign:"center" }}>Empty</h3>
        )}
  
       
      </div>
      <ToastContainer/>
    </section>
  );
};

export default Basket;
