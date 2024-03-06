import video from './../../assets/video.mp4'
import './BgVideo.css'

const BgVideo = () => {
  return (
    <div className='bgContainer'>
      <div className='overlay'> </div>
      <video src={video} autoPlay loop muted />
      <div className='container-bg-text'>
        <h1>CARAVAN PDS</h1>
        <p>Te vas a morir sin pillar la bicha</p>
      </div>
    </div>
  )
}

export default BgVideo
