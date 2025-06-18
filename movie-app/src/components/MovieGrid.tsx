import Grid from '@mui/material/Grid';
import MovieCard from './MovieCard';
import type { Movie } from '../types/index';

interface MovieGridProps { movies: Movie []; }

function MovieGrid({ movies } : MovieGridProps){
  return (
    <Grid container spacing={2}>
      {movies.map(movie => (
        <Grid 
            size={{ xs: 12, sm: 6 }} 
            key={movie.id}
          >
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}
export default MovieGrid