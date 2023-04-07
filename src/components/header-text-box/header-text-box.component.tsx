import './header-text-box.styles.css'
import HeaderTextBoxButton from '../header-text-box-button/header-text-box-button.component'

const HeaderTextBox = () => {
    return (
    <div className='text-box'>
        <h1 className='heading-primary'>
            <span className='heading-primary-main'>Outdoors</span>
            <span className='heading-primary-sub'>is where life happens</span>
        </h1>
        <HeaderTextBoxButton />
    </div>
    )
}

export default HeaderTextBox