import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fachApiById } from "../api";


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
    popularity, overview,
} = movie;
  return (
    <div>
      {movie && (
        <div>
          <h2>{original_title}</h2>
          <img/>
          <ul>Genres: {genres && genres.map(data => (
            <li key={data.id}>{ data.name}</li>
          ))}</ul>
          <p>Relise date: {release_date}</p>
          <p>Runtime: {runtime}</p>
          <p>User score: {popularity}</p>
          <p>{overview }</p>
        </div>
      )}
    </div>
    
  )
}