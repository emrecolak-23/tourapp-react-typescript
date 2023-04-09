import SectionTextContent from "../section-text-content/section-text-content.component"
import ButtonDetail from "../button-detail/button-detail.component"
const SectionAboutContent = () => {

    const contents = [
        {
            title: "You're going to fall in love with nature",
            paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet necessitatibus incidunt sunt possimus inventore ducimus labore repudiandae facilis, distinctio ab laudantium veniam recusandae cupiditate quo cum deleniti optio aspernatur assumenda."
        },
        {
            title: "Live adventures like you never have before",
            paragraph: "Sit amet consectetur adipisicing elit. Amet necessitatibus incidunt sunt possimus inventore ducimus labore repudiandae facilis, distinctio ab laudantium veniam recusandae cupiditate quo cum deleniti optio aspernatur assumenda."
        }
    ]


    return (
      <div className="row">
        <div className="col-1-of-2">
            {
                contents.map(content => {
                    return <SectionTextContent
                    key={content.title} 
                    title={content.title} 
                    paragraph={content.paragraph} 
                    extraHeadingClass="u-margin-bottom-small"
                    />
                })
            }
            <ButtonDetail title="Read more" />
        </div>
        <div className="col-1-of-2">Image Composition</div>
      </div>
    )
}

export default SectionAboutContent