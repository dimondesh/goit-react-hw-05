// File: src/pages/HomePage/HomePage.jsx
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../services/api";
import styles from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1 className={styles.headingHomePage}>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
