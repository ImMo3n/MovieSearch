import { getImageURL } from "../../CommonFunctions";
import { categories, MovieObject } from "../../Types";
import { PosterImage } from "../PosterImage";
import { Article, InfoWrapper, Title } from "./ResultCard";
import { VoteRating } from "../VoteRating";
import { useUpdateModalObject } from "../../ModalObjectProvider";

export const ResultCardMovie = ({ result }: { result: MovieObject }) => {
  const title = "title" in result ? result.title : "";
  const vote = "vote_average" in result ? result.vote_average : null;
  const posterPath = "poster_path" in result ? result.poster_path : null;

  const posterURL = getImageURL(posterPath);

  const updateMovieID = useUpdateModalObject();

  return (
    <Article
      onClick={() => {
        updateMovieID({ id: result.id, category: categories.movie });
      }}
    >
      <figure>
        <PosterImage url={posterURL} alt={title} category={categories.movie} />
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
