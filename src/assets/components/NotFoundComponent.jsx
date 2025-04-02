import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import { ThemeContext } from '../../modules/context';

export default function NotFoundComponent() {
  const [show, setShow] = useState(true);
  const [theme, setTheme] = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible className='error-alert text-center'>
        <Alert.Heading>Oh snap! You got an error!
          <span><i className="bi bi-sign-stop ms-3"></i></span>
        </Alert.Heading>
        <p>
        You are sailing in unsafe waters, go back to continue searching for your favorite book!
        </p>
        <Button variant={theme} onClick={handleBack}>
          <span><i className="bi bi-skip-backward me-2"></i></span>
          HomePage
        </Button>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

