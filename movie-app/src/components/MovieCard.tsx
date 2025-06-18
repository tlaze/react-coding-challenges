import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import type { Movie } from '../types/index';

interface MovieCardProps { movie: Movie }

function MovieCard( { movie } : MovieCardProps){
    return(
        <Card>
            <CardMedia
                componenet="img"
                title={movie.title}
                alt={movie.title}
                sx={{ height: 300, backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`, backgroundSize: 'contain', backgroundPosition: 'center' }}
            />
            <CardContent sx={{ textAlign:'center'}}>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="subtitle2">{movie.release_date}</Typography>
                <Typography variant="body2">{movie.overview.length > 100 ? movie.overview.slice(0,100) + '...' : movie.overview}</Typography>
                
            </CardContent>
        </Card>
    )
}
export default MovieCard