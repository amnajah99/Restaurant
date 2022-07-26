import chevron from '../images/chevron_right.svg';
import './CategoryItem.css';

const CategoryItem = () => {
    return (
        <div className='cat-item'>
            <div className='cat-item-name'>ITEM NAME</div>
            <div className='cat-item-arrow'><img src={chevron} /></div>
        </div>
    );
}
export default CategoryItem;  