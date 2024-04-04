import { Col, Container, Row } from 'react-bootstrap'
import './Rates.css'
import RatesCard from '../../components/RatesCard/RatesCard'

const Rates = () => {
  const RATES = [
    {
      name: 'Temporada Alta',
      description: 'Verano (Julio - Agosto) y puentes',
      color: 'rgb(255, 0, 0)',
      rate: '160€'
    },
    {
      name: 'Temporada Media',
      description: 'Junio - Septiembre y festivos',
      color: 'rgb(255, 187, 0)',
      min: '7 días',
      rate: '130€'
    },
    {
      name: 'Temporada Baja',
      description: 'Resto del año',
      color: 'rgb(0, 255, 0)',
      min: '3 días',
      rate: '110€'
    }
  ]

  return (
    <div className='rates-container'>
      <Container>
        <h2>Consulta nuestras tarifas</h2>
        <p>
          Los precios de las tarifas varian según la temporada, la duración del viaje y la
          antelación con la que hagas la reserva. Por lo que te animamos a que nos
          contactes por teléfono o por email, nos comentes cual es tu viaje, y te damos el
          precio ajustado
        </p>
        <Row className='rates-card-row'>
          {RATES.map(e => {
            return (
              <Col key={e.id} lg={4} className='rate-card'>
                <RatesCard {...e} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Rates
