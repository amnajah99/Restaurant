import './Header.css'
import icon from '../images/cesar-img-2.jpg'
import bell from '../images/bell.png';
import logo from '../images/Logo.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-title'>Rest<span className='header-title-color'>aurant</span></div>
            
            <div className='header-user'>
                <img className='header-bell-img' src={bell} />
                <span className='header-icon'>
                    <span className='header-text'>Adam Lane</span>
                    <img className='header-img' src={icon} />
                </span>
            </div>
        </div>
    );
}
export default Header;