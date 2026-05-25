import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../services/tmdb";
import type { TrendingMoviesResponse } from "../types/movie";

export const useTrendingMovies = () =>
  useQuery<TrendingMoviesResponse, Error>({
    queryKey: ["trending", "movies", "week"],
    queryFn: getTrendingMovies,
    staleTime: 60 * 60 * 1000,
  });
