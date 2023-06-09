import './section-tours.styles.scss'
import SectionTitle from "../section-title/section-title.component"
import SectionToursCard from '../section-tours-card/section-tours-card.component'
import PrimaryButton from '../button-primary/button-primary.component'
const SectionTours = () => {

    const tours = [
        {
            no: 1,
            title: 'The sea explorer',
            details: ['3 day tours', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hotels', 'Difficulty: easy'],
            price: 497
        },
        {
            no: 2,
            title: 'The forest hiker',
            details: ['7 day tours', 'Up to 50 people', '6 tour guides', 'Sleep in provided tents', 'Difficulty: medium'],
            price: 497
        },
        {
            no: 3,
            title: 'The snow adventurer',
            details: ['5 day tours', 'Up to 15 people', '3 tour guides', 'Sleep in provided tenst', 'Difficulty: hard'],
            price: 897
        }
    ]

    return (
        <section className="section-tours" id='section-tours'>
                <SectionTitle text='Most popular tours' extraClass="u-margin-bottom-big" />
                <div className="row">
                    {
                        tours.map(tour => {
                            return <SectionToursCard 
                            key={tour.no}
                            title={tour.title}
                            details={tour.details}
                            cardNo={tour.no}
                            price={tour.price}
                            />
                        })
                    }
                </div>
                <div className="u-center-text u-margin-top-huge">
                    <PrimaryButton color='green' >
                        Discover All Tours
                    </PrimaryButton>
                </div>
        </section>
    )
}

export default SectionTours