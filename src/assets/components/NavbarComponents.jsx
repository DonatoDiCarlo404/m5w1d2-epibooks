import React, { useContext, useMemo } from 'react'
import { Navbar, NavDropdown, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../modules/context';
import allBooks from '../books/allBooks';

export default function NavbarComponents({ search, onSearchChange }) {

  const [theme, setTheme] = useContext(ThemeContext)
  const navigate = useNavigate()

  const genres = useMemo(() => {
    const oneGenre = new Set(allBooks.map((book) => book.category))
    return Array.from(oneGenre).sort()
  }, [])

  const handleGenreSelect = (genre) => {
    navigate(`/genre/${genre}`)
  }

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
            <Link to="/" className='nav-link'>Home</Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browser</Nav.Link>
          </Nav>
          <NavDropdown title="Genres" id="basic-nav-dropdown" className={`text-${theme === 'light' ? 'dark' : 'light'} me-4`}>
            {genres.map((genre, i) => (
              <NavDropdown.Item key={i} onClick={() => handleGenreSelect(genre)}>{genre}</NavDropdown.Item>))}
            </NavDropdown>
          <Button variant="secondary" className='me-2' onClick={() => {
            if (theme === 'light') {
              setTheme('dark')
            } else {
              setTheme('light')
          }}
          }>
            <span><i className="bi bi-sun me-2"></i></span>Theme</Button>
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
