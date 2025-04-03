import React, { useContext }from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../../modules/context';
import BookDetailsComponent from '../components/BookDetailsComponent';


export default function DetailPage() {
  const navigate = useNavigate()
  const [theme, setTheme] = useContext(ThemeContext)

  const handleBack = () => {
    navigate('/')
  }
  return (
    <>
    <div className='d-flex flex-column align-items-center justify-content-center'> 
    <BookDetailsComponent />
    <Button variant={theme} onClick={handleBack} className='mt-3'>
          <span><i className="bi bi-skip-backward me-2"></i></span>
          HomePage
    </Button>
    </div>
    </>
  )
}
