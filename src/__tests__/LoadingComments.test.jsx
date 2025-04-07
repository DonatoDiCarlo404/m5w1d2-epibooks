import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContext } from '../modules/context'
import SingleBookComponent from '../assets/components/SingleBookComponent'
import CommentAreaComponent from '../assets/components/CommentAreaComponent'

describe('Book Comments Loading', () => {
  test('verifica il caricamento dei commenti al click del libro', async () => {
    // Setup
    const mockComment = { comment: "Great book!", rate: 5 }
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([mockComment])
      })
    )

     // Render
     render(
        <BrowserRouter>
          <ThemeContext.Provider value={['light', () => {}]}>
            <div className="d-flex">
              <SingleBookComponent 
                book={{ asin: "123", title: "Test Book", img: "test.jpg" }}
                selectedAsin={null}
                setSelectedAsin={() => {}}
              />
              <CommentAreaComponent asin="123" />
            </div>
          </ThemeContext.Provider>
        </BrowserRouter>
      )
  
      // Test
      const listItems = await screen.findByText(/Great book!/i)
      expect(listItems).toBeInTheDocument()
    })
  })