import { useState } from 'react';
import './CartItem.css';

const CartItem = () => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        if(count>0){
            setCount(count-1)
        }
    }

    return (
        <div className="cart-item">
            <div className="ci-name">Item Name</div>
            <div className="ci-total">Total</div>
            <div className='ci-item-details'>
                <div className='ci-amount'>
                    <button className='ci-amount-btn' onClick={decrement}>-</button>
                    <input className='ci-amount-num' value={count} />
                    <button className='ci-amount-btn' onClick={() => setCount(count+1)}>+</button>
                </div>
                <div className='ci-quantity'>2 kg</div>
                <div className='ci-price'>RS 700</div>
            </div>
        </div>
    );
}
export default CartItem;