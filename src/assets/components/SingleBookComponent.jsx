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
    <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
      <Card className="h-100 shadow-sm" onClick={handleBookClick} style={{ border: selectedAsin === book.asin ? "3px solid red" : "none", transition: "transform 0.2s", minHeight: "400px" }}>
        <Card.Img variant="top" src={book.img} style={{ height: '200px', objectFit: 'contain', padding: '10px', '@media (maxWidth: 573px)': {height: '150px'} }}/>
        <Card.Body className='d-flex flex-column justify-content-between'>
          <Card.Title className='h6' style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis', minHeight: '2.5rem'}}>
            {book.title}</Card.Title>
          <div className='text-center mt-2'>
          <Button variant={theme} className='border border-black border-1 px-3' onClick={handleDetails}>
            <span><i className="bi bi-eyeglasses me-2"></i></span>See Details</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}