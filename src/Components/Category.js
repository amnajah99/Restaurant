import CategoryItem from './CategoryItem';
import './Category.css';

const Category = () => {
    return (
        <div className="category">
            <div className="category-head">
                <div className='category-title'>Categories</div>
                <div className='category-count'>(12)</div>
            </div>
            <CategoryItem />
        </div>
    );
}
export default Category;