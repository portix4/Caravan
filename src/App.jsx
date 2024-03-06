import './App.css'
import BgVideo from './pages/BgVideo/BgVideo'
import Navigation from './pages/NavBar/Navigation'
import { Router } from 'react-router-dom'
import Rates from './pages/Rates/Rates'

function App() {
  return (
    <div className='App'>
      <BgVideo />
      <Navigation />
      <Rates />
    </div>
  )
}

export default App
