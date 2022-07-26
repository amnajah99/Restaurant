import chevron from '../images/chevron_right.svg';
import './CategoryItem.css';

const CategoryItem = ({name}) => {
    return (
        <div className='cat-item'>
            <div className='cat-item-name'>{name}</div>
            <div className='cat-item-arrow'><img src={chevron} /></div>
        </div>
    );
}
export default CategoryItem;  