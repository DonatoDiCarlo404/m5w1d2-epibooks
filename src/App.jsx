import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponents from './assets/components/NavbarComponents';
import FooterComponent from './assets/components/FooterComponent';
import WelcomeComponent from './assets/components/WelcomeComponent';
import AllTheBooksComponents from './assets/components/AllTheBooksComponents';
import scifiBooks from './assets/books/scifi.json';
import { ThemeContext } from './modules/context';


function App() {

  const [books, setBooks] = useState(scifiBooks)
  const [search, setSearch] = useState('')
  const [theme, setTheme] = useState('light')
  
  const handleSearch = (searchValue) => {
      setSearch (searchValue)
      
      const filteredBooks = scifiBooks.filter(book => book.title.toLowerCase().includes(searchValue.toLowerCase()))
      setBooks(filteredBooks)  
    }
  

  return (
    <>
      <ThemeContext.Provider value={[ theme, setTheme ]}>
      <NavbarComponents search={search} onSearchChange={handleSearch} />
      <WelcomeComponent />
      <AllTheBooksComponents books={books}/>
      <FooterComponent />
      </ThemeContext.Provider>
    </>
  )
}

export default App
