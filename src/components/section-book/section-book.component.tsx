import './section-book.styles.scss'
import SectionBookForm from '../section-book-form/section-book-form.component'
const SectionBook = () => {
    return (
        <section className="section-book">
            <div className="row">
                <div className="book">
                    <SectionBookForm />
                </div>
            </div>
        </section>
    )
}

export default SectionBook