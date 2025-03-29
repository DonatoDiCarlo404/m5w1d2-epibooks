import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import scifiBooks from '../books/scifi.json';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SingleBookComponent from './SingleBookComponent';
import { ThemeContext } from '../../modules/context';



export default function AllTheBooksComponents({ books, selectedBook, onBookSelect }) {
  const [theme, setTheme] = useContext(ThemeContext)
  const [visibleBooks, setvisibleBooks] = useState(8);
  
  const loadMoreBooks = () => {
  setvisibleBooks(prevVisibleBooks => prevVisibleBooks + 8 )}


  return (
    <>
    <Container className="mt-4">
        <Row className="mt-5 mb-4">
          <Col>
            <h2 className={`text-${theme === 'dark' ? 'dark' : 'light'} fw-bold text-center`}>Sci-Fi Section</h2>
          </Col>
        </Row>
        <Row>
          {books.slice(0, visibleBooks).map((book) => (
            <SingleBookComponent key={book.asin} book={book} selected={selectedBook?.asin === book.asin} onBookSelect={onBookSelect} />
          ))}
        </Row>
        {visibleBooks < scifiBooks.length && (
          <Row className="mt-4">
            <Col className="text-center">
              <Button variant={theme} onClick={loadMoreBooks}>Set More</Button>
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}
