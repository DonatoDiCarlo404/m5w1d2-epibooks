import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContext } from '../modules/context'
import SingleBookComponent from '../assets/components/SingleBookComponent'

describe('Book Selection', () => {
  const mockBook = {
    asin: "0123456789",
    title: "Test Book",
    img: "test-image.jpg",
    category: "fantasy",
    price: 9.99
  }

  test('verifica il cambio del bordo al click del libro', () => {
    // Setup dello state
    let selectedBookAsin = null
    const setSelectedAsin = (asin) => {
      selectedBookAsin = asin
      rerender(
        <BrowserRouter>
          <ThemeContext.Provider value={['light', () => {}]}>
            <SingleBookComponent 
              book={mockBook}
              selectedAsin={selectedBookAsin}
              setSelectedAsin={setSelectedAsin}
            />
          </ThemeContext.Provider>
        </BrowserRouter>
      )
    }
    const { rerender } = render(
        <BrowserRouter>
          <ThemeContext.Provider value={['light', () => {}]}>
            <SingleBookComponent 
              book={mockBook}
              selectedAsin={selectedBookAsin}
              setSelectedAsin={setSelectedAsin}
            />
          </ThemeContext.Provider>
        </BrowserRouter>
      )
  
      // Trova la card del libro
      const bookCard = screen.getByRole('img').closest('.card')
      
      // Verifica bordo iniziale
      expect(bookCard).toHaveStyle({ border: 'none' })
  
      // Clicca sul libro
      fireEvent.click(bookCard)
  
      // Verifica che il bordo sia cambiato
      expect(bookCard).toHaveStyle({ border: '3px solid red' })
    })
  })