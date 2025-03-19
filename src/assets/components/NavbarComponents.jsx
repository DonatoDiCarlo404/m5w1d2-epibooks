import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavbarComponents() {
  return (
    <Navbar  expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#" className="text-light">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="text-light">Home</Nav.Link>
            <Nav.Link href="#" className="text-light">About</Nav.Link>
            <Nav.Link href="#" className="text-light">Browser</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
