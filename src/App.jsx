import './App.css'
import video from './assets/video.mp4'

function App() {
  return (
    <div className='main'>
      <div className='overlay'></div>
      <video src={video} autoPlay loop muted />
      <div className='content'>
        <h1>CaravanPDS</h1>
        <p>Te vas a morir sin pillar la bicha!!</p>
      </div>
    </div>
  )
}

export default App
