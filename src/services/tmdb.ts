import type { TrendingMoviesResponse } from "../types/movie";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export function getPosterUrl(posterPath: string): string {
  return `${TMDB_IMAGE_BASE}${posterPath}`;
}

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export async function getTrendingMovies(): Promise<TrendingMoviesResponse> {
  const response = await fetch(
    `${TMDB_BASE_URL}/trending/movie/week?api_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  return response.json();
}