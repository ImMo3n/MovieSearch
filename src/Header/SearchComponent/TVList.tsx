import { Option } from "./ComboboxList";
import { categories, TVShowObject } from "../../Types";

export const TVList = ({ data }: { data: TVShowObject[] }) => {
  const TVs = data
    ? data
        .filter((tv) => tv.poster_path)
        .map(({ poster_path, name, id }) => ({ poster_path, name, id }))
        .slice(0, 5)
    : [];

  return (
    <>
      {TVs.map(({ poster_path, name, id }) => {
        return (
          <Option
            key={id}
            id={id}
            imgPath={poster_path ?? ""}
            title={name}
            category={categories.movie}
          />
        );
      })}
    </>
  );
};
