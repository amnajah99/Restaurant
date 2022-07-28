import { useEffect, useState } from 'react';
import tick from '../images/tick.svg'
import './MenuCard.css';

const MenuCard = ({ item, showCartItems, removedItem }) => {
    const [inCart, setInCart] = useState(false);
    // console.log(item.itemName,'is in cart: ',inCart)

    // useEffect(()=>{
    //     if (item.itemCode == removedItem) {
    //         setInCart(false);
    //     }
    // },[removedItem])

    // useEffect(()=>{
    //     if(inCart) {
    //         console.log("In cart",item);
    //         showCartItems(item);
    //     } else {
    //         console.log("not in cart")
    //     }
    // }, [inCart]);

    // []

    // [{'food': 'biryani'}]


    return (
        <div className="menu-card">
            <div className='menu-card-title'>{item.itemName}</div>
            <div className='menu-card-stuff'>
                <div className='menu-card-details'>
                    <div className='menu-card-price'>Rs. {item.price}</div>
                    <div className='menu-card-amount'><img src={tick} /> 1X</div>
                </div>
                <button className='add-to-cart-btn' onClick={() => showCartItems(item)}>ADD TO CART</button>
            </div>
        </div>
    );
}
export default MenuCard;