import './App.css'
import BgVideo from './pages/BgVideo/BgVideo'
import Navigation from './pages/NavBar/Navigation'
import { Router } from 'react-router-dom'
import Rates from './pages/Rates/Rates'
import Rating from './pages/Rating/Rating'
import FormPage from './pages/Form/FormPage'

function App() {
  return (
    <div className='App'>
      <BgVideo />
      <Navigation />
      <Rates />
      <Rating />
      <FormPage />
    </div>
  )
}

export default App
