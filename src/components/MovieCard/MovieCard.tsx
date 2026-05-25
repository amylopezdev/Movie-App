import { useState } from "react";
import type { MovieCardProps } from "../../types/movie";
import { getPosterUrl } from "../../services/tmdb";
import "./MovieCard.css";

const MovieCard = ({ movie }: MovieCardProps) => {
  const [posterError, setPosterError] = useState(false);

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  const rating = movie.vote_average.toFixed(1);

  return (
    <article className="movie-card">
      <div className="movie-card-poster-wrapper">
        {movie.poster_path && !posterError ? (
          <img
            className="movie-card-poster"
            src={getPosterUrl(movie.poster_path)}
            alt={`${movie.title} poster`}
            onError={() => setPosterError(true)}
          />
        ) : (
          <div className="movie-card-no-poster">No image available</div>
        )}
      </div>
      <div className="movie-card-info">
        <h2 className="movie-card-title">{movie.title}</h2>
        <div className="movie-card-meta">
          <span>{releaseYear}</span>
          <span>
            <span aria-hidden="true">⭐</span> {rating}
          </span>
        </div>
        <p className="movie-overview">{movie.overview}</p>
      </div>
    </article>
  );
};

export default MovieCard;
