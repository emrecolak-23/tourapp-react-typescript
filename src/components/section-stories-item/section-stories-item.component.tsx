import './section-stories-item.styles.scss'
import SectionStoriesItemImg from '../section-stories-item-img/section-stories-item-img.component'
import SectionStoriesItemText from '../section-stories-item-text/section-stories-item-text.component'

import { FC } from 'react'
import { Story } from '../section-stories-list/section-stories-list.component'

interface SectionStoriesItemProp {
    story: Story
}


const SectionStoriesItem:FC<SectionStoriesItemProp> = ({story}) => {
    return (
    <div className="row">
             <div className="story">
            <SectionStoriesItemImg image={story.image} name={story.name} />
            <SectionStoriesItemText comment={story.comment} />
        </div>    
    </div>   
    )
}

export default SectionStoriesItem