import CategoryItem from './CategoryItem';
import './Category.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Category = ({ menu_categories, showMenu }) => {

    const cat_list = menu_categories.map((cat, index) => <CategoryItem key={index} name={cat.name} items={cat.items} showMenu={showMenu} />)

    const mobilebtn = document.getElementsByClassName('category-hamburger');
    // const nav = document.getElementById('category-nav');

    const mobileVersion = () => {
        var nav = document.getElementById('category-nav').style.display="block"
    }
    const closeNav = () => {
        var nav = document.getElementById('category-nav').style.display="none"
    }
    
    return (
        <div className="category">
            <FontAwesomeIcon icon={faBars} className='category-hamburger' onClick={mobileVersion}/>
            <div id="category-nav" className='category-items'>
                <div className="category-head">
                    <div className='category-title'>Categories</div>
                    <div className='category-count'>
                        ({cat_list.length})
                        <span className='close-nav-div'><FontAwesomeIcon id='close-nav' icon={faXmark} onClick={closeNav}/></span>
                    </div>
                </div>
                {cat_list}
            </div>
        </div>
    );
}
export default Category;