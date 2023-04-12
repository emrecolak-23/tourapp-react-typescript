import './footer-logo-box.styles.scss'
import Logo from '../../assets/img/logo-green-2x.png'

const FooterLogoBox = () => {
    return (
    <div className="footer__logo-box">
        <img src={Logo} alt="Full Logo" className='footer__logo' />
    </div>
    )
}

export default FooterLogoBox