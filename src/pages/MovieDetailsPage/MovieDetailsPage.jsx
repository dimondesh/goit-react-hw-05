import { useEffect, useState } from "react";
import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import styles from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? "/movies";

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  //   return (
  //     <div className={styles.detailsContainer}>
  //       <Link to={backLink}>Go Back</Link>
  //       <h1>{movie.title}</h1>
  //       <p>{movie.overview}</p>
  //       <img
  //         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  //         alt={movie.title}
  //       />
  //       <div className={styles.links}>
  //         <Link to="cast" className={styles.link}>
  //           Cast
  //         </Link>
  //         <Link to="reviews" className={styles.link}>
  //           Reviews
  //         </Link>
  //       </div>
  //       <Routes>
  //         <Route path="cast" element={<MovieCast />} />
  //         <Route path="reviews" element={<MovieReviews />} />
  //       </Routes>
  //       <Outlet />
  //     </div>
  //   );
  // }

  // export default MovieDetailsPage;

  return (
    <div className={styles.detailsContainer}>
      <Link to={backLink}>Go Back</Link>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={styles.links}>
        {/* Используем абсолютные пути */}
        <Link to={`/movies/${movieId}/cast`} className={styles.link}>
          Cast
        </Link>
        <Link to={`/movies/${movieId}/reviews`} className={styles.link}>
          Reviews
        </Link>
      </div>
      {/* Рендер вложенных маршрутов */}
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
