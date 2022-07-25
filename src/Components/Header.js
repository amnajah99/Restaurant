import './Header.css'
import icon from '../images/cesar-img.jpg'
import bell from '../images/bell.png';

const Header = () => {
    return (
        <div className='header'>
            <h4 className='header-title'>Rest<span>aurant</span></h4>
            <div className='header-user'>
                <span className='header-bell'>
                    <img src={bell} />
                </span>
                <span className='header-icon'>
                    Adam Lane
                    <img src={icon} />
                </span>
            </div>

        </div>
    );
}
export default Header;