import photo1 from '../../assets/img/nat-1-large.jpg'
import photo2 from '../../assets/img/nat-2-large.jpg'
import photo3 from '../../assets/img/nat-3-large.jpg'

import './image-composition.styles.scss'

const ImageComposition = () => {
    return <div className="composition">
        <img src={photo1} alt="Photo 1" className="composition__photo composition__photo--p1" />
        <img src={photo2} alt="Photo 2" className="composition__photo composition__photo--p2" />
        <img src={photo3} alt="Photo 3" className="composition__photo composition__photo--p3" />
    </div>
}

export default ImageComposition