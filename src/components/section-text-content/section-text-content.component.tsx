import './section-text-content.styles.scss'
import { FC } from "react"
import classNames from 'classnames'

interface SectionTextContentProp {
    title: string,
    paragraph: string,
    extraHeadingClass?: string
}

const SectionTextContent:FC<SectionTextContentProp> = ({title, paragraph, extraHeadingClass}) => {
   
   const headingClass = classNames('heading-tertiary', extraHeadingClass)
    
   return (
        <>
            <h3 className={headingClass}>
                {title}
            </h3>
            <p className="paragraph">
                {paragraph}
            </p>
        </>
    )
}

export default SectionTextContent