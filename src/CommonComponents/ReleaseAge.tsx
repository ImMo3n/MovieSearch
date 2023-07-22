import { getTimeAgo } from "../CommonFunctions";

export const ReleaseAge = ({ releaseDate }: { releaseDate: Date }) => {
  return <p>{getTimeAgo(releaseDate)}</p>;
};
