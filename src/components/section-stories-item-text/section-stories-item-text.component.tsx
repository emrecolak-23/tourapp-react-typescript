import './section-stories-item-text.styles.scss'
import { FC } from 'react'

interface SectionStoriesItemTextProps {
    comment: {
        title: string,
        content: string
    }
}

const SectionStoriesItemText:FC<SectionStoriesItemTextProps> = ({comment}) => {
    return (
    <div className="story__text">
        <h3 className="heading-tertiary u-margin-bottom-small">
            {comment.title}
        </h3>
        <p>
            {comment.content}
        </p>
    </div>
    )
}

export default SectionStoriesItemText