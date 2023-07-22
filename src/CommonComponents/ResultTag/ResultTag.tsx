import { categories } from "../../Types";
import { MovieObject, TVShowObject, PersonObject } from "../../Types";

import { ResultTagMovie } from "./ResultTagMovie";
import { ResultTagPerson } from "./ResultTagPerson";
import { ResultTagTV } from "./ResultTagTV";

import { Error } from "../Error";

export const ResultTag = ({
  result,
  category,
}: {
  result: MovieObject | TVShowObject | PersonObject;
  category: categories;
}) => {
  let TagComponent = () => <></>;
  if (category === categories.movie) {
    TagComponent = () => <ResultTagMovie result={result as MovieObject} />;
  } else if (category === categories.tv) {
    TagComponent = () => <ResultTagTV result={result as TVShowObject} />;
  } else if (category === categories.person) {
    TagComponent = () => <ResultTagPerson result={result as PersonObject} />;
  } else {
    TagComponent = () => <Error>Error: ResultSlide category not found</Error>;
  }

  return <TagComponent />;
};
