
import { useEffect, useState } from "react";
import { fachApi } from "../api";
import { MovieList } from "../components/MovieList";

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
      {movies.length > 0 && (<MovieList data={movies}/>)}
    </div>
  )
}