import { useContext } from "react";
// import { useHistory } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import { MovieDetail } from "../App";
import Figure from "react-bootstrap/Figure";
import { Button } from "react-bootstrap";

// import MainPage from "./MainPage";

const SingleMoviePage = () => {
  const { id } = useParams();
  const [movie] = useContext(MovieDetail);
  // const backButton = () => {};
  const navigate = useNavigate();
  const pictureDetail = movie.find((element) => id === element.imdbID);
  console.log(pictureDetail);

  if (!pictureDetail) {
    return <p>Loading... </p>;
  }
  return (
    <>
      <Figure className="d-flex flex-column justify-contents-center align-items-center mt-5">
        <Figure.Image
          width={300}
          height={300}
          alt={pictureDetail.Title}
          src={pictureDetail.Poster}
        />
        <Figure.Caption>
          <h2>{pictureDetail.Title}</h2>
          <h2>{pictureDetail.Year}</h2>
          <h2>{pictureDetail.Type}</h2>
        </Figure.Caption>
      </Figure>

      <div className="d-flex  mx-auto my-2 w-50 justify-content-center">
        {/* <Button variant="success" as={Link} to="/">
         */}
        <Button variant="success" onClick={() => navigate("/")}>
          Back to Previous
        </Button>
      </div>
    </>
  );
};

export default SingleMoviePage;
