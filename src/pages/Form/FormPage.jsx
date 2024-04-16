import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    textContext: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5005/api', formData)
      console.log('Formulario enviado:', response.data)
      // Aquí podrías añadir más lógica, como limpiar el formulario o mostrar un mensaje de éxito/error
    } catch (error) {
      console.error('Error al enviar formulario:', error)
    }
  }

  return (
    <div className='InfoForm'>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Group className='mb-3 emailText' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            className='loginControl'
            type='email'
            value={formData.email}
            onChange={handleChange}
            name='email'
          />
        </Form.Group>
        <Form.Group className='mb-3 passwordText' controlId='password'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            className='loginControl'
            type='text'
            value={formData.name}
            onChange={handleChange}
            name='name'
          />
        </Form.Group>
        <Form.Group className='mb-3 descriptionText' controlId='description'>
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            className='loginControl'
            as='textarea'
            rows={3}
            value={formData.textContext}
            onChange={handleChange}
            name='textContext'
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit{' '}
        </Button>
      </Form>
    </div>

    // {/* <Form>
    //   <Form.Group className='mb-3' controlId='formBasicEmail'>
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type='email' placeholder='Enter email' />
    //     <Form.Text className='text-muted'>
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className='mb-3' controlId='formBasicPassword'>
    //     <Form.Label>Nombre</Form.Label>
    //     <Form.Control type='text' placeholder='Name' />
    //   </Form.Group>
    //   <Form.Group className='mb-3' controlId='formBasicCheckbox'></Form.Group>
    //   <Button variant='primary' type='submit'>
    //     Submit
    //   </Button>
    // </Form> */}
  )
}

export default FormPage
