import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContext } from '../modules/context'
import AllTheBooksComponents from '../assets/components/AllTheBooksComponents'
import allBooks from '../assets/books/allBooks'

describe('AllTheBooksComponents', () => {
  test('verifica che vengano renderizzate tutte le cards dei libri', () => {
    render(
      <BrowserRouter>
        <ThemeContext.Provider value={['light', () => {}]}>
          <AllTheBooksComponents 
            books={allBooks}
            selectedAsin={null}
            setSelectedAsin={() => {}}
          />
        </ThemeContext.Provider>
      </BrowserRouter>
    )

    // Tutte le card nel documento
    const bookCards = screen.getAllByRole('img')
    
    // Verifica che il numero di cards corrisponda al numero di libri, inizialmente vengono mostrati solo i primi 8 libri
    expect(bookCards).toHaveLength(8)
    
    // Verifica che almeno il primo libro sia presente
    expect(screen.getByText(allBooks[0].title)).toBeInTheDocument()
  })
})