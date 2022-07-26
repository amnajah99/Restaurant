import CategoryItem from './CategoryItem';
import './Category.css';

const Category = ({menu_categories}) => {
    
    const cat_list = menu_categories.map((cat) => <CategoryItem name={cat.name} items={cat.items} />)
    return (
        <div className="category">
            <div className="category-head">
                <div className='category-title'>Categories</div>
                <div className='category-count'>({cat_list.length})</div>
            </div>
            {cat_list}
        </div>
    );
}
export default Category;