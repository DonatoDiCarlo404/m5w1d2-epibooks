import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import scifiBooks from '../books/scifi.json';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import SingleBookComponent from './SingleBookComponent';


export default function AllTheBooksComponents({ books }) {
  const [visibleBooks, setvisibleBooks] = useState(8);
  
  const loadMoreBooks = () => {
  setvisibleBooks(prevVisibleBooks => prevVisibleBooks + 8 )}


  return (
    <>
    <Container className="mt-4">
        <Row className="mt-5 mb-4">
          <Col>
            <h2 className="fw-bold text-light text-center">Sci-Fi Section</h2>
          </Col>
        </Row>
        <Row>
          {books.slice(0, visibleBooks).map((books) => (
            <SingleBookComponent key={books.asin} book={books} />
          ))}
        </Row>
        {visibleBooks < scifiBooks.length && (
          <Row className="mt-4">
            <Col className="text-center">
              <Button variant="dark" onClick={loadMoreBooks}>Set More</Button>
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}
