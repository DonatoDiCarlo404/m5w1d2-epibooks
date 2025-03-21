import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasyBooks from '../books/fantasy.json';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import SingleBookComponent from './SingleBookComponent';


export default function AllTheBooksComponents() {
  const [visibleBooks, setvisibleBooks] = useState(8);
  
  const loadMoreBooks = () => {
  setvisibleBooks(prevVisibleBooks => prevVisibleBooks + 8 )}

  const [books, setBooks] = useState(fantasyBooks)

  const [search, setSearch] = useState()

  const handleSearch = (event) => {
    setSearch (event.target.value)
    // console.log(search)

    const filteredBooks = fantasyBooks.filter(book => book.title.toLowerCase().includes(event.target.value.toLowerCase()))
    setBooks(filteredBooks)  
  }

  return (
    <>
    <Container className="mt-4">
      <Form>
        <Row>
          <Col>
            <h4 className="text-light">Search Titles</h4>
            <Form.Control className="w-25" placeholder="Search..." onChange={handleSearch}/>
          </Col>
        </Row>
      </Form>
        <Row className="mt-5 mb-4">
          <Col>
            <h2 className="fw-bold text-light">Libri Fantasy</h2>
          </Col>
        </Row>
        <Row>
          {books.slice(0, visibleBooks).map((book) => (
            <SingleBookComponent key={book.asin} book={book} />
          ))}
        </Row>
        {visibleBooks < fantasyBooks.length && (
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
