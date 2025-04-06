import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContext } from '../modules/context'
import SingleBookComponent from '../assets/components/SingleBookComponent'

describe('Book Selection', () => {
  const mockBooks = [
    {
      asin: "0123456789",
      title: "First Book",
      img: "test-image-1.jpg",
      category: "fantasy",
      price: 9.99
    },
    {
      asin: "9876543210",
      title: "Second Book",
      img: "test-image-2.jpg",
      category: "fantasy",
      price: 19.99
    }
  ]

  test('verifica il cambio del bordo tra due libri', () => {
    let selectedBookAsin = null
    const setSelectedAsin = (asin) => {
      selectedBookAsin = asin
      rerenderBooks()
    }

    const { rerender } = render(
        <BrowserRouter>
          <ThemeContext.Provider value={['light', () => {}]}>
            <div className="d-flex">
              <SingleBookComponent 
                book={mockBooks[0]}
                selectedAsin={selectedBookAsin}
                setSelectedAsin={setSelectedAsin}
              />
              <SingleBookComponent 
                book={mockBooks[1]}
                selectedAsin={selectedBookAsin}
                setSelectedAsin={setSelectedAsin}
              />
            </div>
          </ThemeContext.Provider>
        </BrowserRouter>
      )
  
      const rerenderBooks = () => {
        rerender(
          <BrowserRouter>
            <ThemeContext.Provider value={['light', () => {}]}>
              <div className="d-flex">
                <SingleBookComponent 
                  book={mockBooks[0]}
                  selectedAsin={selectedBookAsin}
                  setSelectedAsin={setSelectedAsin}
                />
                <SingleBookComponent 
                  book={mockBooks[1]}
                  selectedAsin={selectedBookAsin}
                  setSelectedAsin={setSelectedAsin}
                />
              </div>
            </ThemeContext.Provider>
          </BrowserRouter>
        )
      }

      // Trova entrambe le card
    const bookCards = screen.getAllByRole('img').map(img => img.closest('.card'))
    const [firstBook, secondBook] = bookCards

    // Verifica bordo iniziale di entrambi i libri
    expect(firstBook).toHaveStyle({ border: 'none' })
    expect(secondBook).toHaveStyle({ border: 'none' })

    // Clicca sul primo libro
    fireEvent.click(firstBook)
    expect(firstBook).toHaveStyle({ border: '3px solid red' })
    expect(secondBook).toHaveStyle({ border: 'none' })

    // Clicca sul secondo libro
    fireEvent.click(secondBook)
    expect(firstBook).toHaveStyle({ border: 'none' })
    expect(secondBook).toHaveStyle({ border: '3px solid red' })
  })
})