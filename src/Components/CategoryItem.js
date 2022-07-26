import { useEffect, useState } from 'react';
import chevron from '../images/chevron_right.svg';
import './CategoryItem.css';


const CategoryItem = ({name, items, showMenu}) => {
    const [menuList, setMenuList] = useState([]);
    // const itemList = items.map((i)=>i.itemName);

    useEffect(()=>{
        setMenuList(items)
    },[])

    const showMenuItems = () => {
        showMenu(name, menuList);
    }
    // console.log(menuList)

    return (
        <div className='cat-item' onClick={showMenuItems}>
            <div className='cat-item-name'>{name}</div>
            <div className='cat-item-arrow'><img src={chevron} /></div>
        </div>
    );
}
export default CategoryItem;  