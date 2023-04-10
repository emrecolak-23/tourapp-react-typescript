import './section-tours-card-back.styles.scss'
import { FC } from 'react'
import classNames from 'classnames'
import PrimaryButton from '../button-primary/button-primary.component'

interface SectionToursCardBackProps {
    cardNo?: number,
    price: number
}

const SectionToursCardBack:FC<SectionToursCardBackProps> = ({cardNo, price}) => {

    const backContainerClass = classNames('card__side card__side--back', {
        'card__side--back-1': cardNo === 1,
        'card__side--back-2': cardNo === 2,
        'card__side--back-3': cardNo === 3,
    })


    return (
        <div className={backContainerClass}>
            <div className='card__cta'>
                <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">
                        ${price}
                    </p>
                </div>
                <PrimaryButton colorClass='btn--white' >
                    Book Now!
                </PrimaryButton>
            </div>
        </div>
    )
}

export default SectionToursCardBack