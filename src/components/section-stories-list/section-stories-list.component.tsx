import SectionStoriesItem from "../section-stories-item/section-stories-item.component"
import { FC } from "react"

export interface Story {
    id: number,
    name: string,
    comment: {
        title: string,
        content: string
    },
    image: string
}


interface SectionStoriesListProp {
    stories: Story[]
}

const SectionStoriesList:FC<SectionStoriesListProp> = ({stories}) => {
    return (
        <>
           { stories.map(story => {
            return (
                <div className="row" key={story.id}
                >
                    <SectionStoriesItem 
                        story={story}
                    />
                </div>
            )
            
           })}
        </>
    )
}

export default SectionStoriesList