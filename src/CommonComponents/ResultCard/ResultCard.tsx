import { styled } from "styled-components";
import { categories } from "../../Types";
import { MovieObject, PersonObject, TVShowObject } from "../../Types";

import { ResultCardMovie } from "./ResultCardMovie";
import { ResultCardPerson } from "./ResultCardPerson";
import { ResultCardTV } from "./ResultCardTV";

export const ResultCard = ({
  result,
  category,
}: {
  result: MovieObject | PersonObject | TVShowObject;
  category: categories;
}) => {
  let CardComponent = () => <></>;
  if (category === categories.movie) {
    CardComponent = () => <ResultCardMovie result={result as MovieObject} />;
  } else if (category === categories.tv) {
    CardComponent = () => <ResultCardTV result={result as TVShowObject} />;
  } else if (category === categories.person) {
    CardComponent = () => <ResultCardPerson result={result as PersonObject} />;
  } else {
    CardComponent = () => (
      <p style={{ fontSize: "2rem", color: "red" }}>
        Error: ResultCard category not found
      </p>
    );
  }

  return <CardComponent />;
};

export const Article = styled.article`
  cursor: pointer;

  & img {
    max-width: 100%;
  }

  & figure {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &:hover,
  &:focus-within {
    outline: 3px solid #b8b8b8;
    transition: transform 0.25s ease-in-out;
    transform: scale(1.1);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Title = styled.figcaption``;
