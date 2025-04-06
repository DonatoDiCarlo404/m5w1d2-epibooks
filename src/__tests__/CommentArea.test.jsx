import { render, screen, waitFor } from '@testing-library/react'
import { describe, test, expect, beforeEach, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContext } from '../modules/context'
import CommentAreaComponent from '../assets/components/CommentAreaComponent'

describe('CommentAreaComponent', () => {
    beforeEach(() => {
      // Mock della fetch API
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve([])
        })
      )
    })

    test('verifica il corretto montaggio del componente', async () => {
      render(
        <BrowserRouter>
          <ThemeContext.Provider value={['light', () => {}]}>
            <CommentAreaComponent asin="test123" />
          </ThemeContext.Provider>
        </BrowserRouter>
      )
      // Verifica la presenza del titolo iniziale
      expect(screen.getByText(/Leave a comment for your favourite book!/i)).toBeInTheDocument()
      
      // Attendi che il form sia caricato e verifica tutti gli elementi
      await waitFor(async () => {
        // Form inputs
        const commentLabel = await screen.findByText(/Comment/i)
        expect(commentLabel).toBeInTheDocument()
        
        const ratingLabel = await screen.findByText(/Rating/i)
        expect(ratingLabel).toBeInTheDocument()
        
        // Submit button
        const submitButton = await screen.findByRole('button', { 
          name: /Send Comment/i 
        })
        expect(submitButton).toBeInTheDocument()
      }, { timeout: 2000 })
    })
})