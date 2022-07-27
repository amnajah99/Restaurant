import { useState } from "react";
import MenuCard from "./MenuCard";
import './Menu.css';

const Menu = ({items, showCartItems}) => {
    // console.log('items.length: ', items.length);
    const menuCard = items.map((item, index)=>{
        return(
            <MenuCard key={index} item={item} showCartItems={showCartItems}/>
        );
    })
    return (
        <div className="menu">
            {menuCard}
        </div>
    );
}
export default Menu;