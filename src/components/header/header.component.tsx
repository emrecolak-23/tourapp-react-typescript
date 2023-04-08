import './header.styles.scss'
import HeaderLogoBox from '../header-logo-box/header-logo-box.component'
import HeaderTextBox from '../header-text-box/header-text-box.component'
const Header = () => {
    return (
        <header className="header">
            <HeaderLogoBox />
            <HeaderTextBox />
        </header>
    )
}

export default Header