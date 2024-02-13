import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApiReviews } from "../api";

export const MovieReviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([])

  useEffect(() => {

    async function getReviews() {
    try {
      const fetchReviews = await fetchApiReviews(movieID);
setReviews(fetchReviews.results)
    } catch (error) {
      console.log(error)
    }
  }
  getReviews()
  }, [movieID]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, id, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>Review: {content }</p>
            </li>
          ))}
        </ul>
      ) : <p>There is no reviews yet. You can be first</p>}
    </div>
  )
}