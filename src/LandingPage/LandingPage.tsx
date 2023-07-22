import { NowPlaying } from "./NowPlaying";
import { Upcoming } from "./Upcoming";
import { styled } from "styled-components";
import { Trending } from "./Trending";

export const LandingPage = () => {
  return (
    <Wrapper>
      <NowPlaying />
      <Trending />
      <Upcoming />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
