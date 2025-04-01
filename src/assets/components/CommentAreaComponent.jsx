import React, { useEffect, useState, useContext } from 'react'
import { ListGroup, Form, Button, Spinner, Alert } from 'react-bootstrap'
import DeletePutCommentsComponent from './DeletePutCommentsComponent'
import { ThemeContext } from '../../modules/context'

const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMWE5ZTFlMTQwNjAwMTUzMTRkYjUiLCJpYXQiOjE3NDI4MzY0NTIsImV4cCI6MTc0NDA0NjA1Mn0.8x21mRjvNq7-6l5XoAkm-OX-qtIsBS3XpW9JdDIqhWM'

export default function CommentAreaComponent({ asin }) {

  const url = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`;

  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin
  })
  const [loading, setLoading] = useState(false)
  const [theme, setTheme] = useContext(ThemeContext)

  useEffect(() => {
    setNewComment(prev => ({ ...prev, elementId: asin }))
  }, [asin])

  useEffect(() => {
    fetchComments()
  }, [asin])

  
  const fetchComments = async () => {
    if (!asin) return
    setLoading(true)
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`,
          'Content-Type': 'application/json'
        }
      })
      if (response.ok) {
        const data = await response.json()
        setComments(data)
      }
    } catch (error) {
      console.log('Errore nel caricamento commenti:', error)
    } finally {
      setLoading(false)
    }
  }
  
  if (!asin) {
    return (<Alert variant='danger'>You haven't select a Book!</Alert>)
  }

  if (loading) {
    return (
      <div className='text-center my-3'>
        <Spinner animation='grow' role='status'>
        <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>  
    )  
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify({...newComment, elementId: asin})
    })

      if (response.ok) {
        
        // const updatedComment = await response.json()
        // setComments([...comments, updatedComment])
        await fetchComments()

        setNewComment({
          comment: "", rate: 1, elementId: asin,
        })
        alert('Comment was sent!')
      } else {
        const errorText = await response.text()
        console.log(response.status, errorText)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  
  return (
    <>
     <ListGroup as="ol" numbered bg={theme} data-bs-theme={theme}>
      {comments.map((comment, i) => (
       <ListGroup.Item key={i} as="li">
         {comment.comment} - Rating: {comment.rate}
         <DeletePutCommentsComponent comment={comment} onCommentUpdate={fetchComments} />
       </ListGroup.Item>
      ))}
    </ListGroup>

      <Form onSubmit={handleSubmit} className="my-4">
        <Form.Group className="mb-3">
          <Form.Label className='text-black'>Comment</Form.Label>
          <Form.Control
            type="text"
            value={newComment.comment}
            onChange={(e) => setNewComment({...newComment, comment: e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className='text-black'>Rating (1-5)</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="5"
            value={newComment.rate}
            onChange={(e) => {
              const value = e.target.value === '' ? 1 : parseInt(e.target.value)
              setNewComment({...newComment, rate:value})
            }}
          />
        </Form.Group>
        <Button type="submit" variant='success' disabled={loading}>
  {loading ? (
    <>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
        className="me-2"
      />
      Loading...
    </>
  ) : (
    'Send Comment'
  )}
</Button>
      </Form>
    </>
  )
}
