import { useMemo } from "react";
import { styled } from "styled-components";
import { ResultSlide } from "../CommonComponents/ResultSlide";
import { categories, MovieObject, QueryResultPagesType } from "../Types";
import { SearchMoreButton } from "./SearchMoreButton";

export const SearchResult = ({
  useQueryResult,
  category,
}: {
  useQueryResult: QueryResultPagesType;
  category: categories;
}) => {
  const { data } = useQueryResult;

  const results = useMemo<MovieObject[]>(() => {
    if (!data || !data.pages) return [];
    return (data?.pages as any).reduce(
      (
        results: MovieObject[],
        pageResult: { data: { page: number; results: MovieObject[] } }
      ) => [...results, ...pageResult.data.results],
      []
    );
  }, [data]);

  const resultsArray = Array.isArray(results) ? results : [];

  return (
    <>
      <Wrapper>
        {resultsArray.map((result) => (
          <ResultSlide key={result.id} result={result} category={category} />
        ))}
      </Wrapper>
      <SearchMoreButton useQueryResult={useQueryResult} />
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media only screen and (max-width: 1024px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
