import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContext } from '../modules/context'
import WelcomeComponent from '../assets/components/WelcomeComponent'

describe('WelcomeComponent', () => {
  test('verifica il corretto montaggio del componente', () => {
    render(
      <BrowserRouter>
        <ThemeContext.Provider value={['light', () => {}]}>
          <WelcomeComponent />
        </ThemeContext.Provider>
      </BrowserRouter>
    )
    
    // Verifica il contenuto dell'alert-heading
    const welcomeTitle = screen.getByText(/Hey, nice to see you in EpiBooks!/i)
    expect(welcomeTitle).toBeInTheDocument()
    
    // Verifica il testo del paragrafo principale
    const welcomeText = screen.getByText(/Welcome to the world's #1 bookstore/i)
    expect(welcomeText).toBeInTheDocument()
    
    // Verifica il testo finale
    const finalText = screen.getByText(/Whatever you are looking for/i)
    expect(finalText).toBeInTheDocument()
  })
})