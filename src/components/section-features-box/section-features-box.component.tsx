import './section-features-box.scss'
import { FC } from 'react'

import classNames from 'classnames'

interface SectionFeaturesBoxProps {
    title: string,
    description: string,
    icon: string
}

const SectionFeaturesBox:FC<SectionFeaturesBoxProps> = ({title, description, icon}) => {

    const iconClass = classNames('feature-box__icon', icon)

    return (
    <div className="col-1-of-4">
        <div className="feature-box">
            <i className={iconClass}></i>
            <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
            <p className="feature-box__text">
               {description}
            </p>
        </div>
    </div>
    )
}

export default SectionFeaturesBox