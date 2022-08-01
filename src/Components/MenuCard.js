import { faL } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import tick from '../images/tick.svg'
import './MenuCard.css';

const MenuCard = ({ item, showCartItems, isCartEmpty }) => {

    const [inCart, setInCart] = useState(false)

    useEffect(()=>{
        if(item.amount <= 0 || isCartEmpty) {
            setInCart(false)
        } 
    },[item.amount, isCartEmpty])

    const addToCart = () => {
        showCartItems(item);
        setInCart(true)
    }

    return (
        <div className="menu-card">
            <div className='menu-card-title'>{item.itemName}</div>
            
            <div className='menu-card-stuff'>
                <div className='menu-card-details'>
                    <div className='menu-card-price'>Rs. {item.price}</div>
                    <div id='menu-card-amount' style={{display : inCart ? 'inline' : 'none'}}>
                        <img src={tick} />
                        {item.amount}X
                    </div>
                </div>
                
                <button className='add-to-cart-btn' onClick={addToCart}>ADD TO CART</button>
            </div>
        </div>
    );
}
export default MenuCard;