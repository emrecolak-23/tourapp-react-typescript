import './footer-copyright.styles.scss'
import FooterLink from '../footer-link/footer-link.component'
const FooterCopyRight = () => {
    return (
        <div className="col-1-of-2">
            <p className="footer__copyright">
                Built my <FooterLink>Emre ÇOLAK</FooterLink>
            </p>
        </div>
    )
}

export default FooterCopyRight