import './section-stories-item-img.styles.scss'
import Profile1 from '../../assets/img/nat-8.jpg';
import Profile2 from '../../assets/img/nat-9.jpg';

import { FC } from 'react';

interface SectionStoriesItemImgProp {
    name: string,
    image: string
}


const SectionStoriesItemImg:FC<SectionStoriesItemImgProp> = ({image, name}) => {

    const profileImage = Profile1.split('/').splice(-1)[0] === image ? Profile1 : Profile2 

    return (
    <figure className="story__shape">
        <img src={profileImage} alt="Person on a tour" className='story__image'/>
        <figcaption className='story__caption'>
            {name}
        </figcaption>
    </figure>
    )
}

export default SectionStoriesItemImg