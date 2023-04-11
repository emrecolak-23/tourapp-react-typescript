import './section-stories.styles.scss'
import SectionTitle from '../section-title/section-title.component'
import SectionStoriesList from '../section-stories-list/section-stories-list.component'
import ButtonDetail from '../button-detail/button-detail.component'
const SectionStories = () => {

    const stories = [
        {
            id: 1,
            name: 'Mary Smith',
            comment: {
                title: 'I HAD THE BEST WEEK EVER WITH MY FAMILY',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam similique iste quo est facilis, officiis dolorem molestiae consectetur quasi aut obcaecati porro non nobis tenetur velit. Similique, dolores magnam.'
            },
            image: 'nat-8.jpg'
        },
        {
            id: 2,
            name: 'Jack Wilson',
            comment: {
                title: 'WOW! MY LIFE IS COMPLETELY DIFFERENT NOW',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.'
            },
            image: 'nat-9.jpg'
        },
    ]

    return (
        <section className="section-stories">
            <SectionTitle text="We make people genuily happy" extraClass="u-margin-bottom-big" />
            <SectionStoriesList stories={stories} />
            <div className='u-center-text u-margin-top-huge'>
                <ButtonDetail title='Read all stories' />
            </div>
        </section>
    )
}

export default SectionStories