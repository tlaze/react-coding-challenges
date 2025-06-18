import { Box, Grid } from '@mui/material';
import MovieCard from './MovieCard';
import type { Movie } from '../types/index';

interface MovieGridProps { movies: Movie []; }

function MovieGrid({ movies } : MovieGridProps){
  return (
    <Box>

    <Grid container spacing={3}>
      {movies.map(movie => (
        <Grid 
        size={{ xs: 12, sm: 6 }} 
        key={movie.id}
        >
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
      </Box>
  );
}
export default MovieGrid