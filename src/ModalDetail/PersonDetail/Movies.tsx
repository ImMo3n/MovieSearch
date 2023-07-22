import { MovieSlide } from "../../CommonComponents/MovieSlide";
import { categories, MovieCreditsResponse, MovieObject } from "../../Types";

export const Movies = ({ response }: { response: MovieCreditsResponse }) => {
  const { isLoading, data } = response;

  if (isLoading === true) return <SkeletonLoader />;

  const movies = data.data;

  const movieList = movies.cast.filter((movie: any) => movie.poster_path);

  return (
    <MovieSlide
      isLoading={isLoading}
      title="Movies"
      movies={movieList as unknown as Array<MovieObject>}
      category={categories.movie}
    />
  );
};

const SkeletonLoader = () => <p>Loading...</p>;
