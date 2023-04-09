import './section-tours-card.styles.scss'
import { FC } from 'react'
import classNames from 'classnames'

import SectionToursCardBack from '../section-tours-card-back/section-tours-card-back.component'
import SectionToursCardFront from '../section-tours-card-front/section-tours-card-front.component'

interface SectionToursCardProps {
    backContainerColor?: string,
    frontPictureClass: string
}

const SectionToursCard:FC<SectionToursCardProps> = ({backContainerColor, frontPictureClass}) => {

    const frontPictureContainerClass = classNames('card__picture', frontPictureClass)
    const backContainerClass = classNames('card__side card__side--back', backContainerColor)

    return (
    <div className="col-1-of-3">
       <div className="card">
            <SectionToursCardFront />
            <SectionToursCardBack backContainerClasses={backContainerClass} />
       </div>
    </div>
    )
}

export default SectionToursCard