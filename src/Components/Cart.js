import CartItem from './CartItem';
import icon from '../images/cart-icon.svg';
import './Cart.css';
import { useState } from 'react';

const Cart = ({ cartItemsArr, removeFromCart }) => {

    const [grandTotal, setGrandTotal] = useState(0);

    const getGrandTotal = (total) => {
        setGrandTotal(grandTotal + total)
    }

    const mapCart = cartItemsArr.map((item, index) => {
        return (<CartItem key={index} item={item} removeFromCart={removeFromCart} getGrandTotal={getGrandTotal} />);
    })

    const mobileCart = () => {
        var items = document.getElementById('cart-items-mob');
        if (items.style.display == "none") {
            document.getElementById('cart-total-mob').style.display = "block";
            document.getElementById('cart').style.width = "100%";
            document.getElementById('cart-head-title').style.display = "inline";
            items.style.display = "inline";
        }
        else {
            document.getElementById('cart-total-mob').style.display = "none";
            document.getElementById('cart').style.width = "10%";
            document.getElementById('cart-head-title').style.display = "none";
            items.style.display = "none";
        }
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
            <div id='cart-items-mob' className='cart-items'>
                {mapCart}
            </div>

            <div id='cart-total-mob' className='cart-total'>
                <div className='cart-total-head'>
                    <div className='grand-total-title'>Grand Total</div>
                    <div className='grand-total-price'>Rs.{grandTotal}</div>
                </div>
                <div className='cart-total-btns'>
                    <button className='cancel-btn'>Cancel</button>
                    <button className='proceed-btn'>Proceed</button>
                </div>
            </div>
        </div>
    );
}
export default Cart;