import { styled } from "styled-components";
import { ResultCard } from "./ResultCard";
import { categories, MovieObject as MovieType } from "../Types";

export const MovieSlide = ({
  movies,
  category,
  title,
  isLoading,
  children,
}: {
  movies: MovieType[];
  category: categories;
  title: string;
  isLoading: boolean;
  children?: React.ReactNode;
}) => (
  <Wrapper>
    <Category>
      <h2>{title}</h2>
      {children}
    </Category>
    <MovieListWrapper>
      {isLoading === true ? (
        <SkeletonLoader />
      ) : (
        movies.map((movie) => (
          <ResultCard key={movie.id} result={movie} category={category} />
        ))
      )}
    </MovieListWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  --image-width: 160px;
  border-radius: 10px;
  background-color: #141414;
  padding: 0.3rem;
  border: 3px solid #262626;

  &:hover,
  &:focus-within {
    border-color: #626262;
  }
`;

const Category = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 1.5rem;
  padding-top: 1.1rem;
  align-items: center;

  & h2 {
    color: white;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 500px) {
    padding: 0;
    padding-top: 1rem;
    flex-direction: column;
  }
`;

const MovieListWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 1.5rem;
  padding: 1.5rem;
  margin-bottom: 0.5rem;

  & article {
    background-color: #757f8d46;
    padding: 1rem;
    border-radius: 8px;
  }

  & figcaption {
    color: white;
    line-height: 1.3rem;
  }

  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: #252525;
    margin-inline: 0.5rem;
    border-radius: 100vw;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dde6ed;
    border-radius: 100vw;
    border: 1px solid #27374d;
  }
`;

export const SkeletonLoader = () => (
  <>
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
    <MovieSkeletonLoader />
  </>
);

const MovieSkeletonLoader = () => {
  return (
    <MovieSkeletonWrapper className="animate-pulse">
      <div></div>
      <div></div>
      <div></div>
    </MovieSkeletonWrapper>
  );
};

const MovieSkeletonWrapper = styled.div`
  background-color: #535a6446;
  padding: 1rem;
  border-radius: 8px;

  /* img skeleton */
  & div:nth-child(1) {
    background-color: #757f8d46;
    border-radius: 8px;
    border: 2px solid #757f8d46;
    width: var(--image-width);
    height: calc(var(--image-width) * 1.7);
    flex-shrink: 0;
  }
  /* title skeleton */
  & div:nth-child(2) {
    background-color: #757f8d46;
    width: 100%;
    height: 20px;
    margin-top: 10px;
    border-radius: 100vw;
  }
  /* vote skeleton */
  & div:nth-child(3) {
    background-color: #757f8d46;
    width: 80px;
    height: 20px;
    margin-top: 10px;
    border-radius: 100vw;
  }
`;
