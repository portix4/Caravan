import { Navbar } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <Navbar className='sticky-nav'>
      {/* Contenido de tu barra de navegación */}
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        {/* ...otros elementos de la barra de navegación */}
      </ul>
    </Navbar>
  )
}

export default Navigation
