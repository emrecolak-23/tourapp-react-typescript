import './section-text-content.styles.scss'
import { FC } from "react"
import classNames from 'classnames'

interface SectionTextContentProp {
    title: string,
    paragraph: string,
    extraHeadingClass?: string,
    extraParagraphClass?: string
}

const SectionTextContent:FC<SectionTextContentProp> = ({title, paragraph, extraHeadingClass, extraParagraphClass}) => {
   
   const headingClass = classNames('heading-tertiary', extraHeadingClass)
   const paragraphClass = classNames('paragraph', extraParagraphClass)
    
   return (
        <>
            <h3 className={headingClass}>
                {title}
            </h3>
            <p className={paragraphClass}>
                {paragraph}
            </p>
        </>
    )
}

export default SectionTextContent