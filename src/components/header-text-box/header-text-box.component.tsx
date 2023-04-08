import './header-text-box.styles.scss'
import HeaderTextBoxButton from '../header-text-box-button/header-text-box-button.component'
import HeaderTextBoxTitle from '../header-text-box-title/header-text-box-title.component'
const HeaderTextBox = () => {
    return (
    <div className='header__text-box'>
        <HeaderTextBoxTitle />
        <HeaderTextBoxButton />
    </div>
    )
}

export default HeaderTextBox