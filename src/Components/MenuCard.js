import './MenuCard.css';

const MenuCard = ({ name, price }) => {
    return (
        <div className="menu-card">
            <div>{name}</div>
            <div>
                <div>{price}</div>
                <div>1X</div>
            </div>
        </div>
    );
}
export default MenuCard;