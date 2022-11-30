import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
// import Genres from './Component/Genres';
import NavbarComponent from "./components/NavbarComponent";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genre from "./components/Genre";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Genre />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<TvShows />} path="/tv-shows" />
          <Route element={<MovieDetails />} path="/movie-details/:movieID" />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
