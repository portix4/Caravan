import { Container, Card } from 'react-bootstrap'

const RatesCard = ({ name, description, color, rate }) => {
  return (
    <div className='rate-card-container'>
      <Card style={{ backgroundColor: color }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Fechas: {description}</Card.Text>
          <Card.Text>Precio: {rate}</Card.Text>
          <Card.Link href='#'>Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RatesCard
