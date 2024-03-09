import React, { useEffect, useContext, useState, useCallback } from "react";
import { MovieDetail } from "../App";
import { Link } from "react-router-dom";
import { Form, Card, Container, Row, Col } from "react-bootstrap";

// import classes from "./MainPage.module.css";
const MainPage = () => {
  // const [movie, setMovie] = useState([]);
  const [movie, setMovie] = useContext(MovieDetail);

  const [name, setName] = useState("");
  // const apiKey = "c35508a8";

  // console.log(name);
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const response = await fetch(
  //       `http://www.omdbapi.com/?apikey=c35508a8&s=Avengers`
  //     );
  //     const data = await response.json();
  //     setMovie(data.Search);
  //   };
  //   fetchMovies();
  // }, []);
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const response = await fetch(` http://www.omdbapi.com/?apikey=c35508a8/`);
  //     const data = await response.json();
  //     setMovie(data.results);
  //   };

  //   fetchMovies();
  // }, []);

  const fetchData = async () => {
    console.log(name);
    const response = await fetch(
      ` http://www.omdbapi.com/?apikey=c35508a8&s=${name}`
    );
    const data = await response.json();
    setMovie(data.Search);
  };
  // const handleClickOpen = useCallback(() => {
  //   // fetchData(name);
  // }, [name]);
  // console.log(name);
  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  return (
    <>
      <main>
        {/* <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button onClick={fetchData}>Search</button>
        <ul>
          {movie &&
            movie.length > 0 &&
            movie.map((element) => (
              <li className="poster" key={element.imdbID}>
                {element.Title}
                <img src={element.Poster} alt="poster" />
              </li>
            ))}
        </ul> */}
        <Form className="d-flex gap-2 mx-auto my-2 w-50">
          <Form.Control
            type="text"
            placeholder="Type Here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              fetchData();
            }}
          >
            Search
          </button>
        </Form>
        {/* <input
          type="text"
          placeholder="Type Here..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={fetchData}>Search</button> */}

        <Container className="mx-auto my-5 w-100 ">
          <Row>
            {movie &&
              movie.length > 0 &&
              movie.map((element) => (
                <Col key={element.imdbID}>
                  <Link to={`/${element.imdbID}`}>
                    <Card style={{ width: "18rem" }} className="mb-2">
                      <Card.Img
                        variant="top"
                        src={element.Poster}
                        alt="poster"
                      />
                      <Card.Body>
                        <Card.Title>{element.Title.slice(0, 15)}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
          </Row>
        </Container>
      </main>
    </>
  );
};

export default MainPage;
