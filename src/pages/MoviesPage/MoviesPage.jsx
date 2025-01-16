import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../services/api";
import styles from "./MoviesPage.module.css";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("query") || "";
    if (searchQuery) {
      searchMovies(searchQuery).then(setMovies);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <div>
      <h1 className={styles.title}>Search Movies</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
