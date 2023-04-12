import './footer-navigation.styles.scss'
import FooterLink from '../footer-link/footer-link.component'

const FooterNavigation = () => {

    const menus = [
        {
            id: 1,
            to: '',
            name: 'Company'
        },
        {
            id: 2,
            to: '',
            name: 'Contact Us'
        },
        {
            id: 3,
            to: '',
            name: 'Careers'
        },
        {
            id: 4,
            to: '',
            name: 'Privacy Policy'
        },
        {
            id: 5,
            to: '',
            name: 'Terms'
        },
    ]

    return (
        <div className="col-1-of-2">
                <div className="footer__navigation">
                    <ul className='footer__list'>
                       {
                            menus.map(menu => {
                                return (
                                <li className="footer__item" key={menu.id}>
                                    <FooterLink>
                                        {menu.name}
                                    </FooterLink>
                                </li>
                                )
                            })
                       }
                    </ul>
                </div>
            </div>
    )
}

export default FooterNavigation