import './App.css'
import video from './assets/video.mp4'
import BgVideo from './components/BgVideo'
import Navigation from './components/NavBar/Navigation'
import { Router } from 'react-router-dom'
import Rubbish from './components/rubbish/rubbish'

function App() {
  return (
    <div className='App'>
      <BgVideo />
      <Navigation />
      <Rubbish />
    </div>

    // <div className='main'>
    //   <div className='overlay'>
    //     <video src={video} autoPlay loop muted />
    //     <div className='content'>
    //       <h1>CaravanPDS</h1>
    //       <p>Te vas a morir sin pillar la bicha!!</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default App
