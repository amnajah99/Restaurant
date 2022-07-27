import CartItem from './CartItem';
import icon from '../images/cart-icon.svg';
import './Cart.css';

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart-head">
                <div className="cart-head-left">
                    <span className='cart-head-title'>Cart Items</span>
                    <span className='cart-head-count'>3</span>
                </div>
                <div className="cart-head-right">
                    <span className='cart-head-num'>004</span>
                    <span className='cart-head-icon'><img className='cart-head-img' src={icon} /></span>
                </div>
            </div>
            <div className='cart-items'>
                <CartItem />
            </div>
        </div>
    );
}
export default Cart;