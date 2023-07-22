import { getImageURL } from "../../CommonFunctions";
import { useUpdateModalObject } from "../../ModalObjectProvider";
import { categories, MovieObject } from "../../Types";
import { GenreTag } from "../GenreTag";
import { PosterImage } from "../PosterImage";
import {
  Article,
  Figure,
  InfoWrapper,
  Overview,
  Title,
  Vote,
} from "./ResultSlide";

export const ResultSlideMovie = ({ result }: { result: MovieObject }) => {
  const title = "title" in result ? result.title : "";
  const vote = "vote_average" in result ? result.vote_average : 0;
  const posterPath = "poster_path" in result ? result.poster_path : null;
  const posterURL = getImageURL(posterPath);

  const updateModalID = useUpdateModalObject();

  return posterPath ? (
    <Article
      onClick={() => {
        updateModalID({ id: result.id, category: categories.movie });
      }}
    >
      <Figure>
        <PosterImage url={posterURL} alt={title} category={categories.movie} />
        <InfoWrapper>
          <button>
            <Title>{title}</Title>
          </button>
          {vote > 0 && (
            <Vote>
              <span>{vote.toFixed(1)}</span> / 10
            </Vote>
          )}
          <GenreTag genreArray={result.genre_ids} />
          <Overview>{result?.overview}</Overview>
        </InfoWrapper>
      </Figure>
    </Article>
  ) : (
    <></>
  );
};
