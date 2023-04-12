import './navigation-link.styles.scss'
import { FC } from 'react'

interface NavigationLinkProp {
    id:number,
    name: string
}


const NavigationLink:FC<NavigationLinkProp> = ({name,id}) => {
    return <>
        <a href="#" className="navigation__link"><span>0{id}</span>{name}</a>
    </>
}

export default NavigationLink