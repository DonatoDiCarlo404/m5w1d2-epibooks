import React from 'react'
import { useContext } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { ThemeContext } from '../../modules/context';

export default function NavbarComponents({ search, onSearchChange }) {

  const [theme, setTheme] = useContext(ThemeContext)

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <Navbar  expand="lg" bg={theme} data-bs-theme={theme}>
      <Container fluid>
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" >Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browser</Nav.Link>
          </Nav>
          <Button variant="secondary" className='me-2' onClick={() => {
            if (theme === 'light') {
              setTheme('dark')
            } else {
              setTheme('light')
          }}
          }>Theme</Button>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Search your book..."
              className="me-2"
              value={search}
              aria-label="Search"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
