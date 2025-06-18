import { useState, useEffect } from 'react'
import MovieGrid from './components/MovieGrid';
import FilterBar from './components/FilterBar';
import type { Movie } from './types/index';
import { Box, FormControl, Typography, InputLabel, Select, MenuItem } from '@mui/material';

function App() {

  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [filterMovies, setFilterMovies] = useState('');
  const [sortBy, setSortBy] = useState<'title' | 'date'>('title');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

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

  const sortedMovies = [...displayedMovies].sort((a, b) => {
  let compare = 0;
  if (sortBy === 'title') {
    compare = a.title.localeCompare(b.title);
  } 
  else {
    compare = new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
  }
  return sortOrder === 'asc' ? compare : -compare;
});

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

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent:'center'}}>
          <FormControl size="small">
            <InputLabel>Sort By</InputLabel>
            <Select value={sortBy} label="Sort By" onChange={e => setSortBy(e.target.value as 'title' | 'date')}>
              <MenuItem value='title'>Title</MenuItem>
              <MenuItem value='date'>Release Date</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small">
            <InputLabel>Order</InputLabel>
              <Select value={sortOrder} label="Order" onChange={e => setSortOrder(e.target.value as 'asc' | 'desc')}>
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
              </Select>
          </FormControl>
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
            <MovieGrid movies={sortedMovies}/>
          ) : (
            <Typography>No movies available.</Typography>
          )}
        </Box>
      </Box>
    </>
  )
}

export default App
