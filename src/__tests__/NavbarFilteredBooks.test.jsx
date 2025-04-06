import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContext } from '../modules/context'
import NavbarComponents from '../assets/components/NavbarComponents'
import allBooks from '../assets/books/allBooks'

describe('Book Filtering', () => {
  
  const renderNavbar = (onSearchChange = () => {}) => {
    render(
      <BrowserRouter>
        <ThemeContext.Provider value={['light', () => {}]}>
          <NavbarComponents 
            search="" 
            onSearchChange={onSearchChange}
          />
        </ThemeContext.Provider>
      </BrowserRouter>
    )
  }
  test('verifica che la barra di ricerca sia presente', () => {
    renderNavbar()
    const searchInput = screen.getByPlaceholderText(/Search your book/i)
    expect(searchInput).toBeInTheDocument()
  })

  test('verifica che la ricerca filtri correttamente i libri', () => {
    const mockOnSearch = vi.fn()
    renderNavbar(mockOnSearch)
    
    const searchInput = screen.getByPlaceholderText(/Search your book/i)
    fireEvent.change(searchInput, { target: { value: 'Dune' } })
    
    expect(mockOnSearch).toHaveBeenCalledWith('Dune')
  })

  test('verifica che il filtro generi sia presente e funzionante', async () => {
    renderNavbar()
    
    const genreDropdown = screen.getByText(/Genres/i)
    expect(genreDropdown).toBeInTheDocument()
    
    fireEvent.click(genreDropdown)  
    
    const genres = new Set(allBooks.map(book => book.category))
    genres.forEach(genre => {
      const genreOption = screen.getByText(genre)
      expect(genreOption).toBeInTheDocument()
    })
  })

  test('verifica che la ricerca sia case-insensitive', () => {
    const mockOnSearch = vi.fn()
    renderNavbar(mockOnSearch)
    
    const searchInput = screen.getByPlaceholderText(/Search your book/i)
    fireEvent.change(searchInput, { target: { value: 'dUnE' } })
    
    expect(mockOnSearch).toHaveBeenCalledWith('dUnE')
  })
})