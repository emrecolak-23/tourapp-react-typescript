import './section-features.styles.scss'
import SectionFeaturesBox from "../section-features-box/section-features-box.component"

const  SectionFeatures = () => {

    const features = [
        {
            title: 'Explore the world',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente eligendi, quisquam culpa sequi,',
            icon: 'icon-basic-world'
        },
        {
            title: 'Meet nature',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente eligendi, quisquam culpa sequi,',
            icon: 'icon-basic-compass'
        },
        {
            title: 'Find your way',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente eligendi, quisquam culpa sequi,',
            icon: 'icon-basic-map'
        },
        {
            title: 'Live a healthier life',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente eligendi, quisquam culpa sequi,',
            icon: 'icon-basic-heart'
        }
    ]

    return (
        <section className="section-features">
            <div className="row">
                {
                    features.map(feature => {
                        return <SectionFeaturesBox key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
                    })
                }
            </div>
        </section>
    )
}

export default SectionFeatures