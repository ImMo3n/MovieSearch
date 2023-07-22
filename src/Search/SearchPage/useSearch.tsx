import { useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiKey, baseURL } from "../../CommonVariables";
import { categories } from "../../Types";

export const useSearch = (category: categories, searchTerm: string) => {
  const fetchFn = useCallback(
    async (page: number) => {
      const url = new URL(baseURL);
      url.pathname = `/3/search/${category}`;
      url.searchParams.append("api_key", apiKey);
      url.searchParams.append("query", searchTerm);
      url.searchParams.append("page", page.toString());
      const result = await axios(url.toString());
      return result;
    },
    [category, searchTerm]
  );

  const result = useInfiniteQuery(
    ["SearchQuery", searchTerm, category],
    ({ pageParam = 1 }) => fetchFn(pageParam),
    {
      getNextPageParam: (response) => {
        const { total_pages: totalPages, page } = response.data;
        const nextPage = page < totalPages ? page + 1 : false;
        return nextPage;
      },
    }
  );

  return result;
};
