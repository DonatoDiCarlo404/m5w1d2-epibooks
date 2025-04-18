import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import scifiBooks from '../books/scifi.json';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SingleBookComponent from './SingleBookComponent';
import { ThemeContext } from '../../modules/context';



export default function AllTheBooksComponents({ books, selectedAsin, setSelectedAsin }) {
  const [theme, setTheme] = useContext(ThemeContext)
  const [visibleBooks, setvisibleBooks] = useState(8);
  const location = useLocation()
  
  const getCurrentGenre = () => {
    if (location.pathname === '/') return 'All Books'
    const genre = location.pathname.split('/genre/')[1]
    return genre ? genre.charAt(0).toUpperCase() + genre.slice(1) : 'All Books'
  }
  
  const loadMoreBooks = () => {
  setvisibleBooks(prevVisibleBooks => prevVisibleBooks + 8 )}


  return (
    <>
    <Container className="mt-4">
        <Row className="mt-5 mb-4">
          <Col>
            <h2 className={`text-${theme === 'dark' ? 'dark' : 'light'} fw-bold text-center`}>{getCurrentGenre()} Section</h2>
          </Col>
        </Row>
        <Row>
          {books.slice(0, visibleBooks).map((book) => (
            <SingleBookComponent key={book.asin} book={book} selectedAsin={selectedAsin} setSelectedAsin={setSelectedAsin} />
          ))}
        </Row>
        {visibleBooks < scifiBooks.length && (
          <Row className="mt-4">
            <Col className="text-center">
              <Button variant={theme} onClick={loadMoreBooks}>
                <span><i className="bi bi-download me-2"></i></span>Set More</Button>
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}
