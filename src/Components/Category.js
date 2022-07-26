import CategoryItem from './CategoryItem';
import './Category.css';

const Category = () => {
    const menu_categories = [{
        name: 'BBQ',
    },
    {
        name: 'BURGER',
    },
    {
        name: 'CHINESE',
    },
    {
        name: 'DRINKS',
    },
    {
        name: 'FRESH JUICE',
    },
    {
        name: 'ICE CREAM',
    },
    {
        name: 'MEATY',
    },
    {
        name: 'PIZZA',
    },
    {
        name: 'SALADS',
    },
    {
        name: 'SEA FOOD',
    },
    {
        name: 'SOUPS',
    },
    {
        name: 'SWEETS',
    },
    ]
    const cat_list = menu_categories.map((cat) => <CategoryItem name={cat.name} />)
    return (
        <div className="category">
            <div className="category-head">
                <div className='category-title'>Categories</div>
                <div className='category-count'>(12)</div>
            </div>
            {cat_list}
        </div>
    );
}
export default Category;