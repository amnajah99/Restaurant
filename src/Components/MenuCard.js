import tick from '../images/tick.svg'
import './MenuCard.css';

const MenuCard = ({ name, price }) => {
    return (
        <div className="menu-card">
            <div className='menu-card-title'>{name}</div>
            <div className='menu-card-details'>
                <div className='menu-card-price'>Rs. {price}</div>
                <div className='menu-card-amount'><img src={tick} /> 1X</div>
            </div>
            <button className='add-to-cart-btn'>ADD TO CART</button>
        </div>
    );
}
export default MenuCard;