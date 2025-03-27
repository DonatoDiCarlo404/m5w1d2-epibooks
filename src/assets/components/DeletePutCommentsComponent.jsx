import React, { useState } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap'
import CommentAreaComponent from './CommentAreaComponent';

const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMWE5ZTFlMTQwNjAwMTUzMTRkYjUiLCJpYXQiOjE3NDI4MzY0NTIsImV4cCI6MTc0NDA0NjA1Mn0.8x21mRjvNq7-6l5XoAkm-OX-qtIsBS3XpW9JdDIqhWM'

export default function DeletePutCommentsComponent( { comment, onCommentUpdate }) {

  const putDelurl = `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`;

  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);
  const [editedRate, setEditedRate] = useState(comment.rate);
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    try {
      const response = await fetch(putDelurl, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      }
    )
    if (response.ok) {
      alert('Comment deleted!')
      onCommentUpdate()
    }
  } catch (error) {
    console.log('Error:', error)
  }
}

  const handleEdit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const response = await fetch(putDelurl, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
        body: JSON.stringify({ comment: editedComment, rate: editedRate,}),
      }
    )
     if (response.ok) {
       setIsEditing(false)
       alert('Comment updated!')
       onCommentUpdate()
     }
    } catch (error) {
      console.log('Error:', error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="d-flex align-items-center justify-content-between mt-2">
      {isEditing ? (
        <Form onSubmit={handleEdit} className="w-100">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              min="1"
              max="5"
              value={editedRate}
              onChange={(e) => setEditedRate(parseInt(e.target.value))}
            />
          </Form.Group>
          <Button type="submit" size='sm' variant="warning" className="me-2" disabled={loading}>
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
            'Save changes'
          )}
          </Button>
          <Button variant="secondary" size='sm' onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </Form>
        ) : (
          <>
            <Button variant="warning" size='sm' onClick={() => setIsEditing(true)} className="me-2">
              Edit
            </Button>
            <Button variant="danger" size='sm' onClick={handleDelete}>
              Delete
            </Button>
          </>
        )}
      </div>
  )
}
