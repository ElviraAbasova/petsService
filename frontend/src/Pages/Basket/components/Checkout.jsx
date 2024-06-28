import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import pay from "../../../assets/images/payyy.png";
import animals from "../../../assets/images/pngwing.com (33).png";
import { getAllData, patchData } from '../../../Service/requests';
import { useDispatch, useSelector } from 'react-redux';
import { Payment} from '../../../Redux/Slices/basketSlice';
import { AddProducts } from '../../../Redux/Slices/productSlice';

const Checkout = ({ isOpen, onClose, sum }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    let user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch()
    const basket = useSelector((state) => state.basket.arr);
    const datas = useSelector(state=> state.product.arr)

    useEffect(() => {
      getAllData('products').then((res) => {
        dispatch(AddProducts(res));

      });
    }, [dispatch]);
  
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateCardNumber(cardNumber)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Card Number',
                text: 'Please enter a valid 16-digit Visa or MasterCard number',
            });
            return;
        }

        const currentYear = new Date().getFullYear() % 100; 
        const [enteredMonth, enteredYear] = expiryDate.split('/');
        const formattedYear = Number(enteredYear);

        if (
            !(enteredMonth >= '01' && enteredMonth <= '12') 
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Expiry Date',
                text: 'Please enter a valid expiry date in MM/YY format',
            });
            return;
        }
        
        if (
          !(formattedYear >= currentYear && formattedYear <= currentYear + 30)
      ) {
          Swal.fire({
              icon: 'error',
              title: 'Invalid Expiry Date',
              text: 'Please enter a valid expiry date over 2023 year',
          });
          return;
      }

        if (cvv.length !== 3) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid CVV',
                text: 'CVV must be exactly 3 digits',
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Payment Successful',
            text: 'Your payment has been processed successfully',
        });
        const orders = [...user.orders, [...basket,sum]];
        patchData("users", user._id, {...user, orders: orders })
        basket.forEach(item => {
            const product = datas.find(p => p._id === item._id);
            if (product) {
                const updatedProduct = {
                    ...product,
                    stock: product.stock - item.count,
                    seller: product.seller + item.count
                };
                patchData("products", product._id, updatedProduct);
            }
        });
        dispatch(Payment())
        patchData("products")

        setCardNumber('');
        setExpiryDate('');
        setCvv('');
        onClose();
    };

    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); 
        if (value.length <= 16) {
            setCardNumber(value);
        }
    };

    const handleCvvChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); 
        if (value.length <= 3) {
            setCvv(value);
        }
    };

    const handleExpiryDateChange = (e) => {
        setExpiryDate(e.target.value);
    };

    const validateCardNumber = (cardNum) => {
        return /^4[0-9]{15}$|^5[1-5][0-9]{14}$/.test(cardNum);
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>X</button>
                <div className="imgs">
                    <div className="img">
                        <img src={pay} alt="pay" />
                    </div>
                    <div className="img">
                        <img src={animals} alt="animals" />
                    </div>
                </div>
                <div className="top">
                <h2>Payment Details</h2>
                <h2> Total Sum - <span>{sum} $</span> </h2>
                </div>
             
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Card Number</label>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            maxLength={16}
                            placeholder="Enter card number"
                            required
                        />
                    </div>
                    <div className="dateCvv">
                        <div className="input-group">
                            <label>Expiry Date (MM/YY)</label>
                            <input
                                type="text"
                                value={expiryDate}
                                onChange={handleExpiryDateChange}
                                placeholder="MM/YY"
                                pattern="\d\d/\d\d"
                                maxLength={5}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>CVV</label>
                            <input
                                type="text"
                                value={cvv}
                                onChange={handleCvvChange}
                                maxLength={3}
                                placeholder="CVV"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit">Pay</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
