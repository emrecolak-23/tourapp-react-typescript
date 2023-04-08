import './header-logo-box.styles.scss'
import logo from '../../assets/img/logo-white.png';

const HeaderLogoBox = () => {
    return <div className='header__logo-box'>
    <img className='header__logo' src={logo} alt="Logo" />
</div>
}

export default HeaderLogoBox