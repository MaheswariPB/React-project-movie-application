import "./App.css";
import React, { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import SingleMoviePage from "./components/SingleMoviePage";
const MovieDetail = createContext(null);
export { MovieDetail };
function App() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=c35508a8&s=Avengers`
      );
      const data = await response.json();
      setMovie(data.Search);
    };
    fetchMovies();
  }, []);
  return (
    <>
      <MovieDetail.Provider value={[movie, setMovie]}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<SingleMoviePage />} />
        </Routes>
      </MovieDetail.Provider>
    </>
  );
}

export default App;
// usecontext task
// import { useState } from "react";
// import "./App.css";
// import Form from "./components/Form";
// import { createContext } from "react";

// import Button from "./components/Button";

// const ThemeContext = createContext(null);

// export { ThemeContext };

// const App = () => {
//   const [theme, setTheme] = useState("dark");
//   return (
//     <ThemeContext.Provider value={theme}>
//       <Form />
//       <Button
//         onClick={() => {
//           setTheme("light");
//         }}
//       >
//         switch to light
//       </Button>
//     </ThemeContext.Provider>
//   );
// };
// export default App;
