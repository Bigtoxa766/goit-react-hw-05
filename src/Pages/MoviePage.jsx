
import { CirclesWithBar } from "react-loader-spinner";
import { useEffect, useState } from "react"
import { fachApiBySearch } from "../api"
import { SearchForm } from "../components/SearchForm"
import { MovieList } from "../components/MovieList";
import { ErrorMessage } from "../components/ErrorMessage";
import { useSearchParams } from "react-router-dom";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();
  const search = params.get('search') ?? '';

  const searchMovie = async (searchQuery) => {
    setParams({search: searchQuery})
   
    setError(false)
    setMovies([])
    setloading(true)
  };

  useEffect(() => {
    if (search  === '') {
      return
    }
      
    async function fetchMovie() {
      try {
        const searchByQuery = await fachApiBySearch(search);
        setMovies([...searchByQuery.results])
      
      } catch (error) {
        setError(true)
      } finally {
        setloading(false)
      }
    }
    fetchMovie()
  }, [search]);

  return (
    <div>
      <h2>Movie page</h2>
      <SearchForm
        value={search}
        onSearch={searchMovie} />
      {loading && <CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  outerCircleColor="#4fa94d"
  innerCircleColor="#4fa94d"
  barColor="#4fa94d"
  ariaLabel="circles-with-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
      />}
      {error && <ErrorMessage/>}
      <MovieList data={movies}/>
    </div>
  )
}