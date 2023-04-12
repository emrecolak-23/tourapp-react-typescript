import './navigation-list.styles.scss'
import NavigationItem from '../navigation-item/navigation-item.component'
const NavigationList = () => {

    const navigations = [
        {
            id: 1,
            name: 'About Natours',
            to: ''
        },
        {
            id: 2,
            name: 'Your Benefits',
            to: ''
        },
        {
            id: 3,
            name: 'Popular Tours',
            to: ''
        },
        {
            id: 4,
            name: 'Stories',
            to: ''
        },
        {
            id: 5,
            name: 'Book now',
            to: ''
        }
    ]

    return (
    <nav className="navigation_nav">
        <ul className="navigation__list">
           {
             navigations.map(navigation => {
                return (
                    <NavigationItem key={navigation.id} name={navigation.name} id={navigation.id} />
                )
             })
           }
        </ul>
    </nav>
    )
}

export default NavigationList