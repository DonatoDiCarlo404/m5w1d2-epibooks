import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AllTheBooksComponents from './AllTheBooksComponents'
import CommentAreaComponent from './CommentAreaComponent'

export default function MainComponent({ books }) {

  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <AllTheBooksComponents 
            books={books}
            selectedBook={selectedBook}
            onBookSelect={setSelectedBook}
          />
        </Col>
        <Col md={4}>
          {selectedBook && (
            <div className="sticky-top pt-3">
              <CommentAreaComponent asin={selectedBook.asin} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}
