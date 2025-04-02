import React from 'react'
import WelcomeComponent from '../components/WelcomeComponent'
import MainComponent from '../components/MainComponent'

export default function HomePage({ books, selectedAsin, setSelectedAsin }) {
  return (
    <>
    <WelcomeComponent />
    <MainComponent books={books} selectedAsin={selectedAsin} setSelectedAsin={setSelectedAsin}/>
    </>
  )
}
