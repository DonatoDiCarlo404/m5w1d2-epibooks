import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap'
import allBooks from '../books/allBooks'
import { ThemeContext } from '../../modules/context'
import CommentAreaComponent from './CommentAreaComponent'

export default function BookDetailsComponent() {
  const { asin } = useParams()
  const [book, setBook] = useState(null)
  const [theme, setTheme] = useContext(ThemeContext)

  useEffect(() => {
    const selectedBook = allBooks.find(book => book.asin === asin)
    setBook(selectedBook)  
}, [asin])

  if (!book) {
    return <div>Loading...</div>
}


  return (
    <>
      <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" className='detailed-card' src={book.img} />
          </Card>
        </Col>
        <Col md={8}>
          <h2 className={`text-${theme === 'dark' ? 'dark' : 'light'}`}>{book.title}</h2>
          <p className={`text-${theme === 'dark' ? 'dark' : 'light'}`}>Category: {book.category}</p>
          <p className={`text-${theme === 'dark' ? 'dark' : 'light'}`}>Price: ${book.price}</p>
          <div className="mt-4">
              <CommentAreaComponent asin={asin} />
          </div>
        </Col>
      </Row>
      </Container>
    </>
  )
}
