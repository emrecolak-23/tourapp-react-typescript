import './section-tours.styles.scss'
import SectionTitle from "../section-title/section-title.component"
import SectionToursCard from '../section-tours-card/section-tours-card.component'

const SectionTours = () => {
    return (
        <section className="section-tours">
                <SectionTitle text='Most popular tours' extraClass="u-margin-bottom-big" />
                <div className="row">
                   <SectionToursCard 
                   frontPictureClass='card__picture--1'
                   backContainerColor='card__side--back-1' 
                   />
                   <SectionToursCard 
                   frontPictureClass='card__picture--1'
                   backContainerColor='card__side--back-2'
                   />
                   <SectionToursCard
                   frontPictureClass='card__picture--1' 
                   backContainerColor='card__side--back-3'
                   />
                </div>
        </section>
    )
}

export default SectionTours