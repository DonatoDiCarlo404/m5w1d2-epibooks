import React from 'react';
import { Col, Card } from 'react-bootstrap';

export default function SingleBookComponent({ book, selectedAsin, onBookSelect }) {
  
  return (
    <Col md={3} xs={6}>
      <Card className="mb-4" onClick={() => onBookSelect(book.asin)} style={{ border: selectedAsin === book.asin ? "3px solid red" : "none" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}