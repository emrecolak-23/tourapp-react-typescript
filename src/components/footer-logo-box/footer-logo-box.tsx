import './footer-logo-box.styles.scss'
import Logo2x from '../../assets/img/logo-green-2x.png'
import Logo1x from '../../assets/img/logo-green-1x.png'
import LogoSmall1x from '../../assets/img/logo-green-small-1x.png'
import LogoSmall2x from '../../assets/img/logo-green-small-2x.png'

const FooterLogoBox = () => {
    return (
    <div className="footer__logo-box">
        <picture className='footer__logo'>
            <source srcSet={`${LogoSmall1x} 1x, ${LogoSmall2x} 2x`} media='(max-width: 37.5em)' />
            <img srcSet={`${Logo1x} 1x, ${Logo2x} 2x`} alt="Full Logo" className='footer__logo' src={Logo2x} />
        </picture>
    </div>
    )
}

export default FooterLogoBox