import React, { useContext }from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../../modules/context';


export default function DetailPage() {
  const navigate = useNavigate()
  const [theme, setTheme] = useContext(ThemeContext)

  const handleBack = () => {
    navigate('/')
  }
  return (
    <Button variant={theme} onClick={handleBack}>
          <span><i className="bi bi-skip-backward me-2"></i></span>
          HomePage
    </Button>
  )
}
