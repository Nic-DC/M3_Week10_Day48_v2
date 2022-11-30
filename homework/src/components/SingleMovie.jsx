import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleMovie = ({ movie }) => {
  return (
    <Card>
      <Link to={"/movie-details/" + movie.imdbID}>
        <Card.Img variant="top" src={movie.Poster} id="img" />
      </Link>

      <Card.Body>
        <Card.Title className="line-clamp">{movie.Title}</Card.Title>
        {/* <Button variant="primary">See details</Button> */}
      </Card.Body>
    </Card>
  );
};
export default SingleMovie;
