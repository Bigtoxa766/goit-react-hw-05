import { Link } from "react-router-dom"

export const MovieList = ({data}) => {
  return (
    <ul>
      {data.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`}><p>{movie.title}</p></Link>
        </li>
      ))}
    </ul>
  )
};