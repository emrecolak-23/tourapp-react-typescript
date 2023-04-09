import './section-about.styles.scss'

import SectionTitle from '../section-title/section-title.component'
import SectionAboutContent from '../section-about-content/section-about-content.component'

const SectionAbout = () => {
    return (
    <section className="section-about">
      <SectionTitle text='Exiting tours for adcenturous people' extraClass="u-margin-bottom-big" />
      <SectionAboutContent />
    </section>
    )
}

export default SectionAbout