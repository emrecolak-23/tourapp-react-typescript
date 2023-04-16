import photo1 from '../../assets/img/nat-1-large.jpg'
import photo2 from '../../assets/img/nat-2-large.jpg'
import photo3 from '../../assets/img/nat-3-large.jpg'

import photo1Normal from '../../assets/img/nat-1.jpg'
import photo2Normal from '../../assets/img/nat-2.jpg'
import photo3Normal from '../../assets/img/nat-3.jpg'

import './image-composition.styles.scss'

const ImageComposition = () => {
    return <div className="composition">

        <img 
        srcSet={`${photo1Normal} 300w, ${photo1} 1000w`} 
        sizes='(max-width: 900x) 20vw, (max-width: 600px) 30vw, 300px'
        className="composition__photo composition__photo--p1"
        src={photo1}
        />
         <img 
        srcSet={`${photo2Normal} 300w, ${photo2} 1000w`} 
        sizes='(max-width: 900x) 20vw, (max-width: 600px) 30vw, 300px'
        className="composition__photo composition__photo--p2"
        src={photo2}
        />
         <img 
        srcSet={`${photo3Normal} 300w, ${photo3} 1000w`} 
        sizes='(max-width: 900x) 20vw, (max-width: 600px) 30vw, 300px'
        className="composition__photo composition__photo--p2"
        src={photo3}
        />

        {/* <img src={photo1} alt="Photo 1" className="composition__photo composition__photo--p1" />
        <img src={photo2} alt="Photo 2" className="composition__photo composition__photo--p2" />
        <img src={photo3} alt="Photo 3" className="composition__photo composition__photo--p3" /> */}
    </div>
}

export default ImageComposition