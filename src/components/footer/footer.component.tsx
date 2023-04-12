import './footer.styles.scss'
import FooterLogoBox from '../footer-logo-box/footer-logo-box'
import FooterNavigation from '../footer-navigation/footer-navigation.component'
import FooterCopyRight from '../footer-copyright/footer-copyright.component'
const Footer = () => {
    return <footer className="footer">
        <FooterLogoBox />
        <div className="row">
            <FooterNavigation />
            <FooterCopyRight />
        </div>
    </footer>
}

export default Footer