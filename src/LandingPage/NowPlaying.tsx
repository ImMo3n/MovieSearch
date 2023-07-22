import { useCallback } from "react";

import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import { MovieSlide } from "../CommonComponents/MovieSlide";
import { apiKey, baseURL } from "../CommonVariables";
import { categories } from "../Types";

export const NowPlaying = () => {
  const fetchPlaying = useCallback(async () => {
    const url = new URL(baseURL);
    url.pathname = "/3/movie/now_playing";
    url.searchParams.append("api_key", apiKey);
    const result = await axios.get(url.toString());
    return result;
  }, []);

  const { data, isLoading } = useQuery(["NowPlaying"], fetchPlaying);

  return (
    <>
      <MovieSlide
        title="▶ Now Playing Movies"
        category={categories.movie}
        movies={data?.data?.results}
        isLoading={isLoading}
      />
    </>
  );
};
