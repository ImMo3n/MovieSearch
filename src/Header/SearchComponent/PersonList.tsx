import { Option } from "./ComboboxList";
import { categories, PersonObject } from "../../Types";

export const PersonList = ({ data }: { data: PersonObject[] }) => {
  const people = data
    ? data
        .filter((person) => person.profile_path)
        .map(({ name, profile_path, id }) => ({ name, profile_path, id }))
        .slice(0, 5)
    : [];

  return (
    <>
      {people.map(({ profile_path, name, id }) => {
        return (
          <Option
            key={id}
            id={id}
            imgPath={profile_path ?? ""}
            title={name}
            category={categories.person}
          />
        );
      })}
    </>
  );
};
