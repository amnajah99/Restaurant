import { useEffect, useState } from 'react';
import './CartItem.css';

const CartItem = ({item, removeFromCart, getGrandTotal, getCartItemAmount}) => {
    const [count, setCount] = useState(1);

    const changeCount = (item ,val) => {
        getGrandTotal(item.price * val)
        if(count == 1 & val == -1) {
            getCartItemAmount(item.itemCode, 0)
            return removeFromCart(item.itemCode)
        }
        setCount(count + val)
    }

    useEffect(()=>{
        getGrandTotal(item.price);
    },[])
    
    useEffect(()=>{
        getCartItemAmount(item.itemCode, count)
    }, [count])

    return (
        <div className="cart-item">
            <div className="ci-name">{item.itemName}</div>
            <div className="ci-total">Total</div>
            <div className='ci-item-details'>
                <div className='ci-amount'>
                    <button className='ci-amount-btn' onClick={() => changeCount(item, -1)}>-</button>
                    <input className='ci-amount-num' value={count} readOnly/>
                    <button className='ci-amount-btn' onClick={() => changeCount(item, 1)}>+</button>
                </div>
                <div className='ci-quantity'>Regular</div>
                <div className='ci-price'>{count * item.price}</div>
            </div>
        </div>
    );
}
export default CartItem;