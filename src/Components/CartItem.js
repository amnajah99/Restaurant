import { useEffect, useState } from 'react';
import './CartItem.css';

const CartItem = ({item, removeFromCart}) => {
    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(count*item.price)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if(count>1){
            setCount(count - 1)
        }
        else if(count == 1) {
            setCount(0)
            removeFromCart(item.itemName)
        }
    }

    useEffect(()=>{
        setTotalPrice(count * item.price)
    },[count])

    return (
        <div className="cart-item">
            <div className="ci-name">{item.itemName}</div>
            <div className="ci-total">Total</div>
            <div className='ci-item-details'>
                <div className='ci-amount'>
                    <button className='ci-amount-btn' onClick={decrement}>-</button>
                    <input className='ci-amount-num' value={count} readOnly/>
                    <button className='ci-amount-btn' onClick={increment}>+</button>
                </div>
                <div className='ci-quantity'>2 kg</div>
                <div className='ci-price'>{totalPrice}</div>
            </div>
        </div>
    );
}
export default CartItem;