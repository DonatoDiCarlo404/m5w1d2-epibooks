import React, { useState } from 'react';
import { Col, Card } from 'react-bootstrap';
import CommentAreaComponent from './CommentAreaComponent';

export default function SingleBookComponent({book}) {
  const [selected, setSelected] = useState(false)


  return (
    <Col key={book.asin} md={3} xs={6}>
      <Card className="mb-4" onClick={() => setSelected(!selected)} style={{ border: selected ? "3px solid red" : "none" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {selected && <CommentAreaComponent asin={book.asin} />}
    </Col>
  )
}