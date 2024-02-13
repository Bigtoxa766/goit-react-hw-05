
export const MovieDitails = ({ original_title, genres,
  release_date, runtime, popularity, overview, poster_path }) => {
  return (
    <div>
      <h2>{original_title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={original_title} />
      <ul>Genres: {genres && genres.map(data => (
        <li key={data.id}>{data.name}</li>
      ))}</ul>
      <p>Relise date: {release_date}</p>
      <p>Runtime: {runtime}</p>
      <p>User score: {popularity}</p>
      <p>{overview}</p>
    </div>
  )
}