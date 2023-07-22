import { styled } from "styled-components";
import { categories } from "../../Types";
import { MovieObject, PersonObject, TVShowObject } from "../../Types";
import { ResultSlideMovie } from "./ResultSlideMovie";
import { ResultSlidePerson } from "./ResultSlidePerson";
import { ResultSlideTV } from "./ResultSlideTV";

import { Error } from "../Error";

export const ResultSlide = ({
  result,
  category,
}: {
  result: MovieObject | TVShowObject | PersonObject;
  category: categories;
}) => {
  let SlideComponent = () => <></>;
  if (category === categories.movie) {
    SlideComponent = () => <ResultSlideMovie result={result as MovieObject} />;
  } else if (category === categories.tv) {
    SlideComponent = () => <ResultSlideTV result={result as TVShowObject} />;
  } else if (category === categories.person) {
    SlideComponent = () => (
      <ResultSlidePerson result={result as PersonObject} />
    );
  } else {
    SlideComponent = () => <Error>Error: ResultSlide category not found</Error>;
  }

  return <SlideComponent />;
};

export const Article = styled.article`
  background-color: #292929;
  padding: 1rem;
  border-radius: 10px;
  max-width: 100%;
  cursor: pointer;

  & img {
    max-width: 100%;
    transition: transform 0.25s ease-in-out;
  }

  /* & figure {
    display: flex;
    gap: 1.5rem;
  } */

  &:hover,
  &:focus-within {
    outline: 3px solid #626262;

    & img {
      transform: scale(1.1);
    }
  }

  /* @media only screen and (max-width: 600px) {
    --image-width: 200px;

    & figure {
      flex-direction: column;
    }

    & div:has(img) {
      width: 200px;
      margin: auto;
    }

    & div:has(img)::before {
      display: none;
    }
  } */
`;

export const Figure = styled.figure`
  --image-width: 140px;
  display: flex;
  gap: 1.5rem;

  @media (max-width: 600px) {
    --image-width: 200px;
    flex-direction: column;

    div:has(img) {
      width: var(--image-width);
      margin: auto;
    }

    img::before {
      display: none;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  flex: 1;
`;

export const Vote = styled.span`
  display: inline;
  border-radius: 100vw;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #161616;
  border: 1px solid #9d9d9d;
  width: fit-content;
  padding-block: 3px;

  & span {
    font-weight: bold;
  }
`;

export const Title = styled.figcaption`
  font-size: 1.5rem;
`;

export const Overview = styled.p`
  --max-lines: 3;
  --line-height: 1.3;

  line-height: var(--line-height);

  display: -webkit-box;
  -webkit-line-clamp: var(--max-lines);
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
