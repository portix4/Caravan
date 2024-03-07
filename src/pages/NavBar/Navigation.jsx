import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect>
      <Container className='navbar-container'>
        <Navbar.Brand as={Link} to='/'>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
