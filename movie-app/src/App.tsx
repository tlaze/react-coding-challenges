import { useState, useEffect } from 'react'
import MovieGrid from './components/MovieGrid';
import FilterBar from './components/FilterBar';
import Moviecard from './components/MovieCard';


function App() {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const api_key = import.meta.env.VITE_API_KEY;
  console.log(api_key)

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`);
      const data = await response.json();
      console.log(data)
    }
    fetchMovies();
  },[])

  return (
    <>
      <FilterBar/>
      <MovieGrid/>
      <Moviecard/>
    </>
  )
}

export default App
