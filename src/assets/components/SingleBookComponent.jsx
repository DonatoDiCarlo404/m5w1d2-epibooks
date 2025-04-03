import React from 'react';
import { useContext } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../modules/context';

export default function SingleBookComponent({ book, selectedAsin, setSelectedAsin }) {
  const [theme, setTheme] = useContext(ThemeContext)
  const navigate = useNavigate();

  const handleDetails = (e) => {
    e.stopPropagation() // non apre il form laterale al click del bottone Details
    navigate(`/details/${book.asin}`)
  }
  
  const handleBookClick = () => {
    if (selectedAsin === book.asin) {
      // Se il libro è già selezionato, lo deseleziona
      setSelectedAsin(null)
    } else {
      // Altrimenti seleziona il nuovo libro
      setSelectedAsin(book.asin)
    }
  }

  return (
    <Col md={3} xs={6}>
      <Card className="mb-4" onClick={handleBookClick} style={{ border: selectedAsin === book.asin ? "3px solid red" : "none" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body className='d-flex flex-column'>
          <Card.Title className='h6 mb-auto'>{book.title}</Card.Title>
          <div className='text-center mt-2'>
          <Button variant={theme} className='border border-black border-2' onClick={handleDetails}>
            <span><i className="bi bi-eyeglasses me-2"></i></span>See Details</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}