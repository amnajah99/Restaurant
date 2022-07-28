import { useState } from "react";
import MenuCard from "./MenuCard";
import './Menu.css';

const Menu = ({ items, showCartItems, removedItem }) => {
    // console.log('items.length: ', items.length);

    const [term, setTerm] = useState('');

    const filteredItems = items.filter((i)=>i.itemName.toLowerCase().includes(term));
    const menuCard = filteredItems.map((item, index) => {
        return (
            <MenuCard key={index} item={item} showCartItems={showCartItems} removedItem={removedItem} />
        );
    })
    return (
        <div className="menu">
            <div className="search-bar">
                <input
                    className="search-bar-input"
                    type={term}
                    value={term}
                    placeholder='Search Item'
                    onChange={(e) => setTerm(e.target.value)}
                />
            </div>
            <span className="menu-span">{menuCard}</span>
        </div>
    );
}
export default Menu;