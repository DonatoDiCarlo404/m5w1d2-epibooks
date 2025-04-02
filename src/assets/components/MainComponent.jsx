import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AllTheBooksComponents from './AllTheBooksComponents'
import CommentAreaComponent from './CommentAreaComponent'

export default function MainComponent({ books, selectedAsin, setSelectedAsin }) {

  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <AllTheBooksComponents 
            books={books}
            selectedAsin={selectedAsin}
            setSelectedAsin={setSelectedAsin}
          />
        </Col>
        <Col md={4}>
          {selectedAsin && (
            <div className="sticky-top pt-3">
              <CommentAreaComponent asin={selectedAsin} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}
