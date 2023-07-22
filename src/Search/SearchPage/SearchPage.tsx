import { useEffect, useState } from "react";
import { SelectCategories } from "../SelectCategories";
import {
  categories,
  MoviePagesResponse,
  PersonPagesResponse,
  QueryResultPagesType,
  TVPagesResponse,
} from "../../Types";
import { useSearch } from "./useSearch";

import { SearchResult } from "../SearchResult";
import { useParams } from "react-router-dom";
import { categoryOptions } from "../../CommonVariables";

export const SearchPage = () => {
  const { searchTerm, categorySelected } = useParams();
  const urlSearchFor = decodeURIComponent(searchTerm ?? "");
  const urlCategory = decodeURIComponent(categorySelected ?? "");

  const [category, setCategory] = useState<categories>();

  useEffect(() => {
    setCategory(getCategory(urlCategory));
  }, [urlCategory]);

  const movieResult = useSearch(
    categories.movie,
    urlSearchFor
  ) as unknown as MoviePagesResponse;

  const tvResult = useSearch(
    categories.tv,
    urlSearchFor
  ) as unknown as TVPagesResponse;

  const personResult = useSearch(
    categories.person,
    urlSearchFor
  ) as unknown as PersonPagesResponse;

  let resultObject;
  if (category === categories.movie) {
    resultObject = movieResult;
  } else if (category === categories.tv) {
    resultObject = tvResult;
  } else if (category === categories.person) {
    resultObject = personResult;
  } else {
    resultObject = movieResult;
  }

  return (
    <>
      <SelectCategories
        categorySelected={category as categories}
        setCategory={setCategory}
        results={[movieResult, tvResult, personResult]}
      />
      {category ? (
        <SearchResult
          useQueryResult={resultObject as QueryResultPagesType}
          category={category}
        />
      ) : (
        <></>
      )}
    </>
  );
};

function getCategory(urlCategory: string) {
  const selectedCategory = categoryOptions.find(
    (category) => category.id === urlCategory
  );
  if (selectedCategory) return selectedCategory?.id as categories;
  return categories.movie;
}
