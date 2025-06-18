import { useState, useEffect } from 'react'
import MovieGrid from './components/MovieGrid';
import FilterBar from './components/FilterBar';
import type { Movie } from './types/index';
import { Box, Typography } from '@mui/material';

function App() {

  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [filterMovies, setFilterMovies] = useState('');

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

  const displayedMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filterMovies.toLowerCase()))

  if (isLoading) return 
  if (error) return 

  return (
    <>
      <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          minWidth: '100vh',
          }}
        >
        <Box component="header" sx={{ 
            p:2,
            display:'flex',
            justifyContent: 'center',
          }}>
          <FilterBar value={filterMovies} onChange={(e)=> setFilterMovies(e.target.value)}/>
        </Box>

        <Box sx={{
          display:'flex',
          justifyContent:'center'
        }}
          >
          {isLoading ? (
            <Typography>Loading Movies...</Typography>
          ) : error ? (
            <Typography color="error">Error: {error}</Typography>
          ) : displayedMovies.length > 0 ?(
            <MovieGrid movies={displayedMovies}/>
          ) : (
            <Typography>No movies available.</Typography>
          )}
        </Box>
      </Box>
    </>
  )
}

export default App
