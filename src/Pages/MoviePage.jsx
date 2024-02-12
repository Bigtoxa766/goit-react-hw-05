
import { Link } from "react-router-dom"
import { CirclesWithBar } from "react-loader-spinner";
import { useEffect, useState } from "react"
import { fachApiBySearch } from "../api"
import { SearchForm } from "../components/SearchForm"



export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('')
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1)

  const searchMovie = async (searchQuery) => {
    setQuery(searchQuery)
    setError(false)
    setMovies([])
    setloading(true)
  };

  const handleLoadMore = () => {
    setPage(page +1)
  }

  useEffect(() => {
    if (query === '') {
      return
    }
      
    async function fetchMovie() {
      try {
        const searchByQuery = await fachApiBySearch(query, page);
        setMovies(prevMovie => {
          return [...prevMovie, ...searchByQuery.results]
        })
      
      } catch (error) {
        setError(true)
      } finally {
        setloading(false)
      }
    }
    fetchMovie()
  }, [query, page]);

  return (
    <div>
      <h2>Movie page</h2>
      <SearchForm onSearch={searchMovie} />
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
      {error && <b>OOPS! Something went wrong. Try to reload the page...</b>}
      <ul>
      { (
        movies.map(movie => (
          <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}><p>{ movie.title}</p></Link>
            </li>
        ))
      )}
      </ul>
      {movies.length > 0 && <button onClick={handleLoadMore}>Load more</button>}
    </div>
  )
}