import {
  categories,
  MovieObject,
  PersonObject,
  TVShowObject,
} from "../../Types";
import { Error } from "../Error";
import { ResultLineMovie } from "./ResultLineMovie";
import { ResultLinePerson } from "./ResultLinePerson";
import { ResultLineTV } from "./ResultLineTV";

export const ResultLine = ({
  result,
  category,
}: {
  result: MovieObject | TVShowObject | PersonObject;
  category: categories;
}) => {
  let ResultLineComponent = () => <></>;
  if (category === categories.movie) {
    ResultLineComponent = () => (
      <ResultLineMovie result={result as MovieObject} />
    );
  } else if (category === categories.tv) {
    ResultLineComponent = () => (
      <ResultLineTV result={result as TVShowObject} />
    );
  } else if (category === categories.person) {
    ResultLineComponent = () => (
      <ResultLinePerson result={result as PersonObject} />
    );
  } else {
    ResultLineComponent = () => (
      <Error>Error: ResultSlide category not found</Error>
    );
  }

  return <ResultLineComponent />;
};
