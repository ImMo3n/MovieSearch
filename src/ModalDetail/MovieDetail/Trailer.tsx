import { styled } from "styled-components";
import { TrailerResponse } from "../../Types";

export const Trailer = ({ response }: { response: TrailerResponse }) => {
  const { isLoading, data } = response;

  if (isLoading === true) return <TrailerSkeletonLoader />;

  const videos = data.data;

  const youtubeKey = videos.results
    .filter((video) => video.site === "YouTube")
    .at(-1)?.key;

  return youtubeKey ? (
    <Wrapper>
      <YoutubeFrame
        src={`https://www.youtube.com/embed/${youtubeKey}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Wrapper>
  ) : (
    <></>
  );
};

const Wrapper = styled.div`
  background-color: #414141;
`;

const YoutubeFrame = styled.iframe`
  aspect-ratio: 16/9;
  width: 100%;
`;

const TrailerSkeletonLoader = () => {
  return <p>Loading...</p>;
};
