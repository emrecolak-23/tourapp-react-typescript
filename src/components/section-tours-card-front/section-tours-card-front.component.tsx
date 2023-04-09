import './section-tours-card-front.styles.scss'
import { FC } from "react"
import classNames from "classnames"


interface SectionToursCardFrontProps {
    fronPictureClass: string
}

const SectionToursCardFront:FC<SectionToursCardFrontProps> = ({fronPictureClass}) => {

    const pictureClass = classNames('card__picture', fronPictureClass)

    return (
        <div className="card__side card__side--front">
            <div className={pictureClass}>
                &nbsp;
            </div>
            <div className="card__heading">
                Heaing
            </div>
            <div className="card__details">
                Details
            </div>
        </div>
    )
}

export default SectionToursCardFront