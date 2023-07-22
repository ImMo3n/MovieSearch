import { MovieDetailsResponse, TrailerResponse } from "../../Types";
import { Banner } from "./Banner";
import { Trailer } from "./Trailer";

export const BannerOrTrailer = ({
  movieDetailResponse,
  videoResponse,
}: {
  movieDetailResponse: MovieDetailsResponse;
  videoResponse: TrailerResponse;
}) => {
  const { isLoading: movieLoading } = movieDetailResponse;
  const { isLoading: videoLoading, data: videoData } = videoResponse;

  if (movieLoading || videoLoading) return <SkeletonLoader />;

  const videos = videoData.data;

  const youtubeKey = videos.results
    .filter((video) => video.site === "YouTube")
    .at(-1)?.key;

  return youtubeKey ? (
    <>
      <Trailer response={videoResponse} />
    </>
  ) : (
    <>
      <Banner response={movieDetailResponse} />
    </>
  );
};

const SkeletonLoader = () => {
  const style = {
    aspectRatio: "16 / 9",
    backgroundColor: "#414141",
    // textAlign: "center",
    paddingTop: "1rem",
    paddingLeft: "1rem",
  };

  return (
    <div style={style} className="animate-pulse">
      Loading Trailer
    </div>
  );
};
