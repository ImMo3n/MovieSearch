import { styled } from "styled-components";
import { getImageURL } from "../../CommonFunctions";
import { ImageWidths } from "../../CommonVariables";
import { useUpdateModalObject } from "../../ModalObjectProvider";
import { categories, MovieObject, PersonObject } from "../../Types";
import { PosterImage } from "../PosterImage";
import { KnownFor } from "../Role";
import { Article, Figure, InfoWrapper, Title } from "./ResultSlide";

export const ResultSlidePerson = ({ result }: { result: PersonObject }) => {
  const title = "name" in result ? result.name : "";
  const role = result.known_for_department;
  const movies = result.known_for;
  const profilePath = "profile_path" in result ? result.profile_path : null;
  const posterURL = getImageURL(profilePath);

  const updateModalID = useUpdateModalObject();

  return profilePath ? (
    <Article
      onClick={() => {
        updateModalID({ id: result.id, category: categories.person });
      }}
    >
      <Figure>
        <PosterImage url={posterURL} alt={title} category={categories.person} />
        <InfoWrapper>
          <ActorInfo>
            <button>
              <Title>{title}</Title>
            </button>
            <KnownFor>{role}</KnownFor>
          </ActorInfo>
          <p>Movies:</p>
          <Movies movies={movies} />
        </InfoWrapper>
      </Figure>
    </Article>
  ) : (
    <></>
  );
};

const ActorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Movies = ({ movies }: { movies: MovieObject[] }) => {
  return (
    <MovieWrapper>
      {movies.map((movie) => {
        return (
          <Movie key={movie.id}>
            <img
              src={getImageURL(movie.poster_path, ImageWidths.XS)}
              alt={movie.title}
            />
          </Movie>
        );
      })}
    </MovieWrapper>
  );
};

const MovieWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Movie = styled.button`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
  max-width: 100px;

  & img {
    border-radius: 5px;
  }
`;
