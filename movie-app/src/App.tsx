import { useState } from 'react'
import MovieGrid from './components/MovieGrid';
import FilterBar from './components/FilterBar';
import Moviecard from './components/MovieCard';
import './App.css'

function App() {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  return (
    <>
      <FilterBar/>
      <MovieGrid/>
      <Moviecard/>
    </>
  )
}

export default App
