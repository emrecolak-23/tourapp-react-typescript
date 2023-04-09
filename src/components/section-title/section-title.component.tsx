import './section-title.styles.scss'
import { FC } from 'react'
import classNames from 'classnames'

interface SectionTitleProps {
  text: string
  extraClass: string
}

const SectionTitle:FC<SectionTitleProps> = ({text, extraClass}) => {

    const containerClass = classNames('u-center-text', extraClass)

    return (
     <div className={containerClass}>
        <h2 className="heading-secondary">
            {text}
        </h2>
      </div>   
    )
}

export default SectionTitle