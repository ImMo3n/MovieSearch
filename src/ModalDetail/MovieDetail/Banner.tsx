import { styled } from "styled-components";
import { getBackdropURL } from "../../CommonFunctions";
import { MovieDetailsResponse } from "../../Types";

export const Banner = ({ response }: { response: MovieDetailsResponse }) => {
  const { data, isLoading } = response;
  if (isLoading === true) return <SkeletonLoader />;
  const movie = data.data;

  const bannerPath = getBackdropURL(movie.backdrop_path);

  return bannerPath ? (
    <Wrapper>
      <img src={bannerPath} alt={movie.title} />
    </Wrapper>
  ) : (
    <></>
  );
};

const SkeletonLoader = () => {
  return <p>Loading...</p>;
};

const Wrapper = styled.div`
  & img {
    width: 100%;
  }
`;
