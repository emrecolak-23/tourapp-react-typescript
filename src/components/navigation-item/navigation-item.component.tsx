import './navigation-item.styles.scss'
import { FC } from 'react'
import NavigationLink from '../navigation-link/navigation-link.component'

interface NavigationItemProp {
    id: number,
    name: string
}


const NavigationItem:FC<NavigationItemProp> = ({name, id}) => {
    return (
        <li className="navigation__item">
            <NavigationLink name={name} id={id} />
               
         </li>
    )
}

export default NavigationItem