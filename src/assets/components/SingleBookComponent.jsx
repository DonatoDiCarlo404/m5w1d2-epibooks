import React from 'react';
import { Col, Card } from 'react-bootstrap';

export default function SingleBookComponent({ book, selected, onBookSelect }) {
  
  return (
    <Col md={3} xs={6}>
      <Card className="mb-4" onClick={() => onBookSelect(book)} style={{ border: selected ? "3px solid red" : "none" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}