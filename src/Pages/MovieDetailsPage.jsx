import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fachApiById } from "../api";
import { MovieDitails } from "../components/MovieDitails";

export default function MovieDetailsPage() {
  const {movieID} = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchedMovieId() {
      try {
        const getMovieById = await fachApiById(movieID);
        setMovie(getMovieById);
      } catch (error) { 
        console.log(error)
      }
    }
    fetchedMovieId()
  }, [movieID]);

  const { original_title, genres, release_date, runtime,
    popularity, overview, poster_path } = movie;
  
  return (
    <div>
      <div>
      {movie &&  
      <MovieDitails 
      original_title={original_title}
      poster_path={poster_path}
      genres={genres}
      release_date={release_date}
      runtime={runtime}
      popularity={popularity}
      overview={overview}/>
      }
      </div>
      <div>
        <NavLink to='cast'>Cast</NavLink>
        <NavLink to='reviews'>Reviews</NavLink>
      </div>
      <Outlet/>
    </div>
    
  )
}