import { styled } from "styled-components";
import { PersonDetailsResponse } from "../../Types";

export const Biography = ({
  response,
}: {
  response: PersonDetailsResponse;
}) => {
  const { isLoading, data } = response;
  if (isLoading === true) return <p>Loading...</p>;
  const details = data.data;

  const { biography } = details;
  return <Text>{biography}</Text>;
};

const Text = styled.p`
  --line-height: 1.3;

  line-height: var(--line-height);
`;
