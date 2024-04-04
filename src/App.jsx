import './App.css'
import BgVideo from './pages/BgVideo/BgVideo'
import Navigation from './pages/NavBar/Navigation'
import { Router } from 'react-router-dom'
import Rates from './pages/Rates/Rates'
import Rating from './pages/Rating/Rating'

function App() {
  return (
    <div className='App'>
      <BgVideo />
      <Navigation />
      <Rates />
      <Rating />
    </div>
  )
}

export default App
