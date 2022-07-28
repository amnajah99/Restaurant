import CartItem from './CartItem';
import icon from '../images/cart-icon.svg';
import './Cart.css';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cartItemsArr, removeFromCart }) => {

    const [grandTotal, setGrandTotal] = useState(0);

    const onCancel = () => {
        // cartItemsArr = []
        // for(var i; i < cartItemsArr ;i++) {
        //     removeFromCart(cartItemsArr[i].itemCode)
        // }
        // cartItemsArr.map((item) => {
        //     removeFromCart(item.itemCode)
        // })
        // cartItemsArr.forEach(item => {
        //     removeFromCart(item.itemCode)
        // });
    }

    const getGrandTotal = (total) => {
        setGrandTotal(grandTotal + total)
    }

    const mapCart = cartItemsArr.map((item, index) => {
        return (<CartItem key={index} item={item} removeFromCart={removeFromCart} getGrandTotal={getGrandTotal} />);
    })

    const mobileCart = () => {
        document.getElementById('cart-responsive').style.display = "inline";
        document.getElementById('close-cart-div').style.display = "block"
    }
    
    const closeCart = () => {
        document.getElementById('cart-responsive').style.display="none"
        document.getElementById('close-cart-div').style.display = "none"
    }

    return (
        <div id="cart" className="cart">
            <div className="cart-head">
                <div className="cart-head-left">
                    <span id='cart-head-title' className='cart-head-title'>Cart Items</span>
                    <span className='cart-head-count'>{cartItemsArr.length}</span>
                </div>
                <div className="cart-head-right">
                    <span className='cart-head-num'>004</span>
                    <span className='cart-head-icon' onClick={mobileCart}><img className='cart-head-img' src={icon} /></span>
                </div>
            </div>
            <div id='cart-responsive' className='cart-responsive'>
                <span id='close-cart-div'>
                    <FontAwesomeIcon
                        id='close-cart'
                        icon={faXmark}
                        onClick={closeCart}
                    />
                </span>
                <div id='cart-items-mob' className='cart-items'>
                    {mapCart}
                </div>

                <div id='cart-total-mob' className='cart-total'>
                    <div className='cart-total-head'>
                        <div className='grand-total-title'>Grand Total</div>
                        <div className='grand-total-price'>Rs.{grandTotal}</div>
                    </div>
                    <div className='cart-total-btns'>
                        <button className='cancel-btn' onClick={onCancel}>Cancel</button>
                        <button className='proceed-btn'>Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;