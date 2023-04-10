import { FC } from 'react'
import classNames from 'classnames'

interface SectionToursCardBackProps {
    cardNo?: number
}

const SectionToursCardBack:FC<SectionToursCardBackProps> = ({cardNo}) => {

    const backContainerClass = classNames('card__side card__side--back', {
        'card__side--back-1': cardNo === 1,
        'card__side--back-2': cardNo === 2,
        'card__side--back-3': cardNo === 3,
    })


    return (
        <div className={backContainerClass}>
            BACK
        </div>
    )
}

export default SectionToursCardBack