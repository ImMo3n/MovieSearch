import { Option } from "./ComboboxList";
import { categories, MovieObject } from "../../Types";

export const MovieList = ({ data }: { data: MovieObject[] }) => {
  const movies = data
    ? data
        .filter((movie) => movie.poster_path)
        .map(({ poster_path, title, id }) => ({ poster_path, title, id }))
        .slice(0, 5)
    : [];

  return (
    <>
      {movies.map(({ poster_path, title, id }) => {
        return (
          <Option
            key={id}
            id={id}
            imgPath={poster_path ?? ""}
            title={title}
            category={categories.movie}
          />
        );
      })}
    </>
  );
};
