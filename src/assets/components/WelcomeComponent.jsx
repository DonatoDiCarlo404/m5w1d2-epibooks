import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function WelcomeComponent() {
  return (
    <Alert variant="success" className="text-center">
      <Alert.Heading>Hey, nice to see you in EpiBooks!</Alert.Heading>
      <p>
         Welcome to the world's #1 bookstore. Here you can find all the books you want,
         of any genre you want, from fantasy, to horror, from thriller to romance. You are in the right place.
      </p>
      <hr />
      <p className="mb-0">
        Whatever you are looking for, you will find it with us!
      </p>
    </Alert>
  )
}
