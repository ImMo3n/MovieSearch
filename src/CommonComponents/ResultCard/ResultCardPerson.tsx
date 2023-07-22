import { getImageURL } from "../../CommonFunctions";
import { useUpdateModalObject } from "../../ModalObjectProvider";
import { categories, PersonObject } from "../../Types";
import { PosterImage } from "../PosterImage";
import { Article, InfoWrapper, Title } from "./ResultCard";

export const ResultCardPerson = ({ result }: { result: PersonObject }) => {
  const title = "name" in result ? result.name : "";
  const posterPath = "profile_path" in result ? result.profile_path : null;

  const posterURL = getImageURL(posterPath);

  const updateMovieID = useUpdateModalObject();

  return (
    <Article
      onClick={() => {
        updateMovieID({ id: result.id, category: categories.person });
      }}
    >
      <figure>
        <PosterImage url={posterURL} alt={title} category={categories.person} />
        <InfoWrapper>
          <Title>{title}</Title>
        </InfoWrapper>
      </figure>
    </Article>
  );
};
