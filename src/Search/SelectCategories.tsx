import { styled } from "styled-components";
import { categoryOptions } from "../CommonVariables";
// import { categories, categories_label } from "../CommonVariables";
import {
  categories,
  MoviePagesResponse,
  PersonPagesResponse,
  QueryResultPagesType,
  TVPagesResponse,
} from "../Types";

export const SelectCategories = ({
  setCategory,
  categorySelected,
  results,
}: {
  setCategory: React.Dispatch<React.SetStateAction<categories | undefined>>;
  categorySelected: categories;
  results: [MoviePagesResponse, TVPagesResponse, PersonPagesResponse];
}) => {
  const resultCounts = results.map((result: QueryResultPagesType) =>
    getResultCount(result)
  );
  const [movieCount, tvCount, peopleCount] = resultCounts;

  return (
    <Wrapper>
      {categoryOptions.map(({ id, name }) => (
        <NavItem
          key={id}
          className={id === categorySelected ? "active" : undefined}
          onClick={() => {
            setCategory(id as categories);
          }}
          data-count={
            id === categories.movie
              ? movieCount
              : id === categories.tv
              ? tvCount
              : id === categories.person
              ? peopleCount
              : ""
          }
        >
          {name}
        </NavItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: fit-content;
  display: flex;
  gap: 1rem;
  margin-block: 1rem;
  background-color: #151515;
  padding: 1rem;
  border-radius: 10px;
  border: 3px solid #262626;

  &:hover,
  &:focus-within {
    border-color: #626262;
  }

  & .active {
    color: #ffffff;
    background-color: #626262;
  }
`;

const NavItem = styled.button`
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #3a3a3a;
  position: relative;

  &:hover {
    background-color: #525252;
  }

  &::before {
    content: attr(data-count);
    position: absolute;
    top: -10px;
    right: -12px;
    background-color: #7f0000;
    border-radius: 100vw;
    padding: 4px;
    font-size: 0.75rem;
  }
`;

function getResultCount(resultObject: QueryResultPagesType) {
  if (resultObject.isLoading === true) return null;
  return resultObject.data?.pages?.at(0)?.data?.total_results ?? null;
}
