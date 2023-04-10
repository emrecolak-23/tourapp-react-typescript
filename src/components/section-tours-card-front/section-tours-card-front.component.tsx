import './section-tours-card-front.styles.scss'
import { FC } from "react"
import classNames from "classnames"


interface SectionToursCardFrontProps {
    cardNo: number
    title:string,
    details: string[]
}

const SectionToursCardFront:FC<SectionToursCardFrontProps> = ({cardNo, title, details}) => {


    const pictureClass = classNames('card__picture', {
        'card__picture--1': cardNo === 1,
        'card__picture--2': cardNo === 2,
        'card__picture--3': cardNo === 3
    })

    const cardHeadingClass = classNames('card__heading-span', {
        'card__heading-span--1': cardNo === 1,
        'card__heading-span--2': cardNo === 2,
        'card__heading-span--3': cardNo === 3
    })
    
    return (
        <div className="card__side card__side--front">
            <div className={pictureClass}>
                &nbsp;
            </div>
            <h4 className="card__heading">
                <span className={cardHeadingClass}>
                    {title}
                </span>
            </h4>
            <div className="card__details">
                <ul>
                    {
                        details.map(detail => {
                            return <li key={detail}>{detail}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SectionToursCardFront