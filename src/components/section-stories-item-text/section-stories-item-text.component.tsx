import './section-stories-item-text.styles.scss'
import { FC } from 'react'
import SectionTextContent from '../section-text-content/section-text-content.component'

interface SectionStoriesItemTextProps {
    comment: {
        title: string,
        content: string
    }
}

const SectionStoriesItemText:FC<SectionStoriesItemTextProps> = ({comment}) => {
    return (
    <div className="story__text">
       <SectionTextContent title={comment.title} paragraph={comment.content} extraHeadingClass='u-margin-bottom-small' />
    </div>
    )
}

export default SectionStoriesItemText