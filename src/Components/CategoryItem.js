import chevron from '../images/chevron_right.svg';

const CategoryItem = () => {
    return (
        <div className='cat-item'>
            <div className='cat-item-name'>Item name</div>
            <div className='cat-item-arrow'><img src={chevron} /></div>
        </div>
    );
}
export default CategoryItem;  