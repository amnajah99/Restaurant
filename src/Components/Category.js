import CategoryItem from './CategoryItem';
import './Category.css';

const Category = ({ menu_categories, showMenu }) => {

    const cat_list = menu_categories.map((cat, index) => <CategoryItem key={index} name={cat.name} items={cat.items} showMenu={showMenu} />)
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