import { FC } from 'react'

interface SectionToursCardBackProps {
    backContainerClasses?: string
}

const SectionToursCardBack:FC<SectionToursCardBackProps> = ({backContainerClasses}) => {
    return (
        <div className={backContainerClasses}>
            BACK
        </div>
    )
}

export default SectionToursCardBack