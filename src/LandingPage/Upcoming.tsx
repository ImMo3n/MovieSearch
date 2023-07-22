import { useCallback } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { MovieSlide } from "../CommonComponents/MovieSlide";
import { apiKey, baseURL } from "../CommonVariables";
import { categories } from "../Types";

export const Upcoming = () => {
  const fetchUpcoming = useCallback(async () => {
    const url = new URL(baseURL);
    url.pathname = "/3/movie/upcoming";
    url.searchParams.append("api_key", apiKey);
    const result = await axios.get(url.toString());
    return result;
  }, []);

  const { data, isLoading } = useQuery(["Upcoming"], fetchUpcoming);

  return (
    <>
      <MovieSlide
        category={categories.movie}
        title="🎬 Upcoming Movies"
        movies={data?.data?.results}
        isLoading={isLoading}
      />
    </>
  );
};
