import { styled } from "styled-components";

export const VoteRating = ({ vote }: { vote: number | null }) => {
  if (!vote) return <></>;
  return (
    <Vote>
      <span>{vote.toFixed(1)}</span> / 10
    </Vote>
  );
};

const Vote = styled.p`
  display: inline;
  border-radius: 100vw;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #161616;
  border: 1px solid #9d9d9d;
  width: fit-content;
  padding-block: 3px;

  & span {
    font-weight: bold;
  }
`;
