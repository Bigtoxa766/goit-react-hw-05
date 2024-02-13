import { useEffect, useState } from "react"
import { fetchApiCast } from "../api"
import { useParams } from "react-router-dom";

export const MovieCast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState([])
  
  useEffect(() => {
    async function getCast() {
      try {
        const fetchCast = await fetchApiCast(movieID);
        setCast(fetchCast.cast)
      } catch (error) {
        console.log(error)
      }
    }
    getCast()
  }, [movieID]);

  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map(item => (
            <li key={item.cast_id}>
              <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
        alt={ item.name} />
              <p>{item.name }</p>
            </li>
          ) )}
        </ul>
      ) : <p>No cast information</p>
      }
    </div>
  )
}