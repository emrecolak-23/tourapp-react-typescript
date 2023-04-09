import './button-detail.styles.scss'
import { FC } from "react"

interface ButtonDetailProps {
    title: string
}

const ButtonDetail:FC<ButtonDetailProps> = ({title}) => {
    return <a href="#" className="btn-text">{title} &rarr;</a>
}

export default ButtonDetail