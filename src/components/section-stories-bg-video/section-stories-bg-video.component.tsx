import './section-stories-bg-video.styles.scss'
import VideoMP4 from '../../assets/img/video.mp4'
import VideoWebm from '../../assets/img/video.webm'

const SectionStoriesBgVideo = () => {
    return (
    <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
            <source src={VideoMP4} type='video/mp4'/>
            <source src={VideoWebm} type="video/webm" />
            Your browser is not supported!
        </video>
    </div>
    )   
}

export default SectionStoriesBgVideo