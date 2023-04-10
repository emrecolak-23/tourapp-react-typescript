import './section-tours-card.styles.scss'
import { FC } from 'react'

import SectionToursCardBack from '../section-tours-card-back/section-tours-card-back.component'
import SectionToursCardFront from '../section-tours-card-front/section-tours-card-front.component'

interface SectionToursCardProps {
    cardNo: number,
    title: string,
    details: string[],
    price: number
}

const SectionToursCard:FC<SectionToursCardProps> = ({cardNo, title, details, price}) => {
  
    return (
    <div className="col-1-of-3">
       <div className="card">
            <SectionToursCardFront 
            cardNo={cardNo}
            title={title}
            details={details} 
            />
            <SectionToursCardBack cardNo={cardNo} price={price} />
       </div>
    </div>
    )
}

export default SectionToursCard