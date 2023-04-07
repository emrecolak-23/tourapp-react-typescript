import './header-logo-box.styles.css'
import logo from '../../assets/img/logo-white.png';

const HeaderLogoBox = () => {
    return <div className='logo-box'>
    <img className='logo' src={logo} alt="Logo" />
</div>
}

export default HeaderLogoBox