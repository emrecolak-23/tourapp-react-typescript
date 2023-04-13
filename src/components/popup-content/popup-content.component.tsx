import './popup-content.styles.scss'
import Photo1 from '../../assets/img/nat-8.jpg'
import Photo2 from '../../assets/img/nat-9.jpg'

import SectionTitle from '../section-title/section-title.component'
import SectionTextContent from '../section-text-content/section-text-content.component'
import PrimaryButton from '../button-primary/button-primary.component'

const PopupContent = () => {
    return (
        <div className="popup__content">
            <div className="popup__left">
                <img src={Photo1} alt="Tour photo" className='popup__img' />
                <img src={Photo2} alt="Tour photo" className='popup__img' />
            </div>
            <div className="popup__right">
                <SectionTitle text='Start booking now' extraClass='u-margin-bottom-medium'/>
                <SectionTextContent 
                title='Important &ndash; Please read these terms before booking'
                paragraph='Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Nam aliquam eum vero nulla? Incidunt reiciendis numquam esse saepe, 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Nam aliquam eum vero nulla? Incidunt reiciendis numquam esse saepe,
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Nam aliquam eum vero nulla? Incidunt reiciendis numquam esse saepe,
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                praesentium omnis repellendus aspernatur et totam vero quae alias!' 
                extraHeadingClass="u-margin-bottom-small"
                extraParagraphClass='popup__text'
                />
                <PrimaryButton color='green'>
                    Book Now!
                </PrimaryButton>
            </div>
        </div>
    )
}

export default PopupContent