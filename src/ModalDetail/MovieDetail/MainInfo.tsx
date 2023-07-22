import { styled } from "styled-components";
import { GenreTag } from "../../CommonComponents/GenreTag";
import { IMDBLink } from "../../CommonComponents/IMDBLink";
import { PosterImage } from "../../CommonComponents/PosterImage";
import { ReleaseAge } from "../../CommonComponents/ReleaseAge";
import { VoteRating } from "../../CommonComponents/VoteRating";

import { getImageURL } from "../../CommonFunctions";
import {
  categories,
  MovieDetailsResponse,
  TVDetailsResponse,
} from "../../Types";

export const MainInfo = ({
  response,
}: {
  response: MovieDetailsResponse | TVDetailsResponse;
}) => {
  const { data, isLoading } = response;

  if (isLoading === true) return <SkeletonLoader />;

  const movie = data.data;

  const genreArray = movie.genres.map((genre) => genre.id);
  const releaseDay =
    "release_date" in movie
      ? new Date(movie.release_date)
      : "first_air_date" in movie
      ? new Date(movie.first_air_date)
      : new Date();

  const title = "title" in movie ? movie.title : movie?.name;
  const imdbID = "imdb_id" in movie ? movie.imdb_id : "";

  return movie ? (
    <>
      <Wrapper>
        <PosterImage
          url={getImageURL(movie.poster_path)}
          alt={title}
          category={categories.movie}
        />
        <InfoWrapper>
          <Title>{title}</Title>
          <GenreTag genreArray={genreArray} />
          <VoteRating vote={movie.vote_average} />
          <ReleaseAge releaseDate={releaseDay} />
          <IMDBLink imdb_id={imdbID} />
        </InfoWrapper>
      </Wrapper>
      {/* <SkeletonLoader /> */}
    </>
  ) : (
    <></>
  );
};

const Title = styled.h1`
  @media only screen and (max-width: 600px) {
    margin-top: 0.5rem;
  }
`;

const Wrapper = styled.div`
  --image-width: 200px;
  display: flex;
  gap: 1rem;
  padding: 1rem;

  background: linear-gradient(90deg, #2f2f2f, #131313);
  border-radius: 10px;
  object-fit: contain;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  & h1 {
    font-size: 2rem;
  }
`;

// Skeleton Loader

const SkeletonLoader = () => {
  return (
    <Wrapper>
      <PosterImage url={""} alt={""} category={categories.movie} />
      <InfoWrapper>
        <TitleSkeleton />
        <GenreTagSkeleton />
        <ScoreSkeleton />
        <ReleasedSkeleton />
        <IMDBSkeleton />
      </InfoWrapper>
    </Wrapper>
  );
};

const TitleSkeleton = () => {
  const style = {
    width: 300,
    height: 32,
    backgroundColor: "#898989",
    borderRadius: 5,
    marginTop: "0.5rem",
  };

  return <div className="animate-pulse" style={style}></div>;
};

const GenreTagSkeleton = () => {
  return (
    <GenreTagSkeletonLoaderWrapper>
      <GenreTagSkeletonLoader width={60} />
      <GenreTagSkeletonLoader width={50} />
      <GenreTagSkeletonLoader width={70} />
    </GenreTagSkeletonLoaderWrapper>
  );
};

const GenreTagSkeletonLoaderWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const GenreTagSkeletonLoader = ({ width }: { width: number }) => {
  const style = {
    width,
    height: 31,
    backgroundColor: "#898989",
    borderRadius: 5,
  };

  return <div className="animate-pulse" style={style}></div>;
};

const ScoreSkeleton = () => {
  const style = {
    height: 24,
    width: 75,
    borderRadius: "100vw",
    backgroundColor: "#898989",
  };

  return <div className="animate-pulse" style={style}></div>;
};

const ReleasedSkeleton = () => {
  const style = {
    height: 16,
    width: 150,
    borderRadius: 5,
    backgroundColor: "#898989",
  };

  return <div className="animate-pulse" style={style}></div>;
};

const IMDBSkeleton = () => {
  const style = {
    height: 26,
    width: 100,
    borderRadius: 5,
    backgroundColor: "#898989",
  };

  return <div className="animate-pulse" style={style}></div>;
};
