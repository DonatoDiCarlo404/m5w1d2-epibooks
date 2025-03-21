import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function CommentAreaComponent() {
  return (
    <>
    <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
    </ListGroup>
    </>
  )
}
