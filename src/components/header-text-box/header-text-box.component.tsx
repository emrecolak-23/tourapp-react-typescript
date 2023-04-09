import './header-text-box.styles.scss'
import PrimaryButton from '../button-primary/button-primary.component'
import HeaderTextBoxTitle from '../header-text-box-title/header-text-box-title.component'
const HeaderTextBox = () => {
    return (
    <div className='header__text-box'>
        <HeaderTextBoxTitle />
        <PrimaryButton colorClass='btn--white' />
    </div>
    )
}

export default HeaderTextBox