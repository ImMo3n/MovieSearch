import { getImageURL } from "../../CommonFunctions";
import { categories, TVShowObject } from "../../Types";
import { PosterImage } from "../PosterImage";
import { Article, InfoWrapper, Title } from "./ResultCard";
import { VoteRating } from "../VoteRating";
import { useUpdateModalObject } from "../../ModalObjectProvider";

export const ResultCardTV = ({ result }: { result: TVShowObject }) => {
  const title = "name" in result ? result.name : "";
  const vote = "vote_average" in result ? result.vote_average : null;
  const posterPath = "poster_path" in result ? result.poster_path : null;

  const posterURL = getImageURL(posterPath);

  const updateMovieID = useUpdateModalObject();

  return (
    <Article
      onClick={() => {
        updateMovieID({ id: result.id, category: categories.tv });
      }}
    >
      <figure>
        <PosterImage url={posterURL} alt={title} category={categories.tv} />
        <InfoWrapper>
          <button>
            <Title>{title}</Title>
          </button>
          <VoteRating vote={vote} />
        </InfoWrapper>
      </figure>
    </Article>
  );
};
