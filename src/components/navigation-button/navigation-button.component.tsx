import './navigation-button.styles.scss'

const NavigationButton = () => {
    return (
        <>
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">
                
            </span>
        </label>
        </>
    )
}

export default NavigationButton