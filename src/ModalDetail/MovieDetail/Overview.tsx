import { styled } from "styled-components";
import { MovieDetailsResponse } from "../../Types";

export const Overview = ({ response }: { response: MovieDetailsResponse }) => {
  const { isLoading, data } = response;

  if (isLoading === true) return <OverviewSkeleton />;

  const overview = data?.data?.overview;

  return <Wrapper>{overview}</Wrapper>;
};

const OverviewSkeleton = () => {
  return <p>Loading...</p>;
};

const Wrapper = styled.p`
  margin-top: 0.25rem;
  line-height: 1.4;
`;
