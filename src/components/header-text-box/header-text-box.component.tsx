import './header-text-box.styles.scss'
import PrimaryButton from '../button-primary/button-primary.component'
import HeaderTextBoxTitle from '../header-text-box-title/header-text-box-title.component'
const HeaderTextBox = () => {
    return (
    <div className='header__text-box'>
        <HeaderTextBoxTitle />
        <PrimaryButton color='white' >
            Discover Our Tours
        </PrimaryButton>
    </div>
    )
}

export default HeaderTextBox