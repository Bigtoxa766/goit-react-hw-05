import { Link } from "react-router-dom";

export default function NotFoundPage(){
  return (
    <>
      <h2>Sorry, page not found</h2>
      <Link to={'/'}>Back to Home</Link>
    </>
  );
}