import { useState, useEffect } from 'react'
import MovieGrid from './components/MovieGrid';
import FilterBar from './components/FilterBar';
import type { Movie } from './types/index';

function App() {

  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const api_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try{

        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`);
        const data = await response.json();
        // console.log(data.results)
        setMovies(data.results)
      }
      catch(error){
        console.error("Error: ", error)
        setError("Error fetching movies.")
      }
      finally{
        setIsLoading(false)
      }
    }
    fetchMovies();
  },[])

  if (isLoading) return <p>Loading Movies...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      <FilterBar/>
      {movies.length > 0 ? <MovieGrid movies={movies}/> : <p>No movies available.</p>}
    </>
  )
}

export default App
