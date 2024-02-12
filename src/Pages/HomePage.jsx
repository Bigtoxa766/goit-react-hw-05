
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fachApi } from "../api";

export default function HomePage() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function fetchMovie() {
      try {
         const getMovie = await fachApi()
        setMovies(getMovie)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovie()
    
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}><p>{ movie.title}</p></Link>
            </li>
          ))}
        </ul>
     )}
    </div>
  )
}