import { useTrendingMovies } from "../../hooks/useTrendingMovies";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import MovieCard from "../MovieCard/MovieCard";
import "./TrendingMovies.css";

const TrendingMovies = () => {
  const { data, isLoading, isError } = useTrendingMovies();

  return (
    <section>
      <h1>Trending Movies</h1>
      {isLoading && <Loading />}
      {isError && <Error />}
      {!isLoading && !isError && data?.results.length === 0 && (
        <p className="trending-status">No trending movies found.</p>
      )}
      {data?.results && data.results.length > 0 && (
        <ul className="movie-grid">
          {data.results.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TrendingMovies;
