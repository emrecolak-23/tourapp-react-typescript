import './navigation.styles.scss'
import NavigationButton from '../navigation-button/navigation-button.component'
import NavigationBackground from '../navigation-background/navigation-background.component'
import NavigationList from '../navigation-list/navigation-list.component'
const Navigation = () => {
    return <div className="navigation">
       <NavigationButton/>
       <NavigationBackground />
       <NavigationList />
    </div>
}

export default Navigation