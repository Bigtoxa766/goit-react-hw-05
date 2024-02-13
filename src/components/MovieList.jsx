import { Link, useLocation } from "react-router-dom"

export const MovieList = ({ data }) => {
  const location = useLocation()
  return (
    <ul>
      {data.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`} state={location}><p>{movie.title}</p></Link>
        </li>
      ))}
    </ul>
  )
};