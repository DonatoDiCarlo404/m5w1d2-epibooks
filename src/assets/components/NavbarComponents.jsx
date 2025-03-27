import React from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap';

export default function NavbarComponents({ search, onSearchChange }) {
  const handleSubmit = (e) => {
    e.preventDefault()
  }


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
