import React from 'react'
import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../../modules/context'

export default function FooterComponent() {

  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <footer className={`pt-4 mt-5 bg-${theme}`}>
    <Container >
      <Row>
        <Col md={6}>
          <h5 className={`text-${theme === 'light' ? 'dark' : 'light'}`}>EpiBooks</h5>
          <p className={`text-${theme === 'light' ? 'dark' : 'light'}`}>© {new Date().getFullYear()} All Rights Reserved.</p>
        </Col>
        <Col md={6} className="text-md-end">
          <p>
            <a href="/privacy" className={`text-${theme === 'light' ? 'dark' : 'light'} link-offset-2`}>
              Privacy
            </a>{" "}
            <a href="/policy" className={`text-${theme === 'light' ? 'dark' : 'light'} link-offset-2`}>
              Policy
            </a>{" "}
            <a href="/references" className={`text-${theme === 'light' ? 'dark' : 'light'} link-offset-2`}>
              References
            </a>{" "}
            |{" "}
            <a href="/follow" className={`text-${theme === 'light' ? 'dark' : 'light'} text-decoration-none`}>
              Follow Us
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}
