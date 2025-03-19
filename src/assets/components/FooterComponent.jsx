import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function FooterComponent() {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
    <Container >
      <Row>
        <Col md={6}>
          <h5>EpiBooks</h5>
          <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        </Col>
        <Col md={6} className="text-md-end">
          <p>
            <a href="/privacy" className="text-light link-offset-2">
              Privacy
            </a>{" "}
            <a href="/policy" className="text-light link-offset-2">
              Policy
            </a>{" "}
            <a href="/references" className="text-light link-offset-2">
              References
            </a>{" "}
            |{" "}
            <a href="/follow" className="text-light text-decoration-none">
              Follow Us
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}
