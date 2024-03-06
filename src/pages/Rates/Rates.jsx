import { Container } from 'react-bootstrap'
import './Rates.css'

const Rates = () => {
  const RATES = [
    {
      name: 'Temporada Alta',
      description: 'Fechas de verano (Julio - Agosto)',
      rate: '150€',
      URL: 'https://portix4.github.io/IH-Project1-Game2D/'
    }
  ]
  return (
    <div className='rates-container'>
      <Container>
        <h2>Consulta nuestras tarifas</h2>
      </Container>
    </div>
  )
}

export default Rates
