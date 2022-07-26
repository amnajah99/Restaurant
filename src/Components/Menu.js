import { useState } from "react";
import MenuCard from "./MenuCard";

const Menu = ({items}) => {
    console.log(items[0]);
    const menuCard = items.map((item)=>{
        return(
            <MenuCard name={item.itemName} price={item.price} />
        );
    })
    return (
        <div className="Menu">
            {menuCard}
        </div>
    );
}
export default Menu;